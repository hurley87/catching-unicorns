import fs from 'fs';
import { encode } from 'gpt-3-encoder';
import { chapters } from './book';

const CHUNK_SIZE = 200;

const getPost = async (chapter: any) => {
  let post = {
    title: '',
    number: 0,
    content: '',
    length: 0,
    tokens: 0,
    chunks: [],
  };

  let cleanedText = chapter.text.replace(/\s+/g, ' ');
  cleanedText = cleanedText.replace(/\.([a-zA-Z])/g, '. $1');

  const trimmedContent = cleanedText.trim();

  post = {
    title: chapter.title,
    number: chapter.number,
    content: trimmedContent,
    length: trimmedContent.length,
    tokens: encode(trimmedContent).length,
    chunks: [],
  };

  return post;
};

const chunkPost = async (post: any) => {
  const { title, content } = post;

  const postTextChunks = [];

  if (encode(content).length > CHUNK_SIZE) {
    const split = content.split('. ');
    let chunkText = '';

    for (let i = 0; i < split.length; i++) {
      const sentence = split[i];
      const sentenceTokenLength = encode(sentence);
      const chunkTextTokenLength = encode(chunkText).length;

      if (chunkTextTokenLength + sentenceTokenLength.length > CHUNK_SIZE) {
        postTextChunks.push(chunkText);
        chunkText = '';
      }

      if (
        sentence[sentence.length - 1] &&
        sentence[sentence.length - 1].match(/[a-z0-9]/i)
      ) {
        chunkText += sentence + '. ';
      } else {
        chunkText += sentence + ' ';
      }
    }

    postTextChunks.push(chunkText.trim());
  } else {
    postTextChunks.push(content.trim());
  }

  const postChunks = postTextChunks.map((text) => {
    const trimmedText = text.trim();

    const chunk = {
      title,
      content: trimmedText,
      content_length: trimmedText.length,
      content_tokens: encode(trimmedText).length,
      embedding: [],
    };

    return chunk;
  });

  if (postChunks.length > 1) {
    for (let i = 0; i < postChunks.length; i++) {
      const chunk = postChunks[i];
      const prevChunk = postChunks[i - 1];

      if (chunk.content_tokens < 100 && prevChunk) {
        prevChunk.content += ' ' + chunk.content;
        prevChunk.content_length += chunk.content_length;
        prevChunk.content_tokens += chunk.content_tokens;
        postChunks.splice(i, 1);
        i--;
      }
    }
  }

  const chunkedSection = {
    ...post,
    chunks: postChunks,
  };

  return chunkedSection;
};

(async () => {
  const posts = [];

  for (let i = 0; i < chapters.length; i++) {
    const chapter = chapters[i];
    const post = await getPost(chapter);
    const chunkedPost = await chunkPost(post);

    posts.push(chunkedPost);
  }

  const json = {
    author: 'Hurley',
    length: posts.reduce((acc, essay) => acc + essay.length, 0),
    tokens: posts.reduce((acc, essay) => acc + essay.tokens, 0),
    posts,
  };

  console.log(json);

  fs.writeFileSync('scripts/cu.json', JSON.stringify(json));
})();
