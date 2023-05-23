import { loadEnvConfig } from '@next/env';
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import { CUJSON, Post } from './../types/index';

loadEnvConfig('');

const generateEmbeddings = async (posts: Post[]) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;
  const supabase = createClient(supabaseUrl, supabaseKey);

  let chunkNum = 1;

  for (let i = 0; i < posts.length; i++) {
    const section = posts[i];

    for (let j = 0; j < section.chunks.length; j++) {
      const chunk = section.chunks[j];

      const { title, content, content_length, content_tokens } = chunk;

      const embeddingResponse = await openai.createEmbedding({
        model: 'text-embedding-ada-002',
        input: content,
      });

      if (embeddingResponse.status !== 200) {
        console.log('error', embeddingResponse);
      } else {
        const [{ embedding }] = embeddingResponse.data.data;

        const { data, error } = await supabase
          .from('cu')
          .insert({
            title,
            content,
            content_length,
            content_tokens,
            embedding,
          })
          .select('*');

        console.log(data);

        if (error) {
          console.log('not saved', error);
        } else {
          console.log('saved', i + 1, j + 1, chunkNum);
        }
      }

      chunkNum++;

      await new Promise((resolve) => setTimeout(resolve, 100));
    }
  }
};

(async () => {
  const book: CUJSON = JSON.parse(fs.readFileSync('scripts/cu.json', 'utf8'));

  await generateEmbeddings(book.posts);
})();
