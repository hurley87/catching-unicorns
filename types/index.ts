export enum OpenAIModel {
  DAVINCI_TURBO = 'gpt-3.5-turbo',
}

export type Post = {
  title: string;
  content: string;
  length: number;
  tokens: number;
  chunks: Chunk[];
};

export type Chunk = {
  title: string;
  content: string;
  content_length: number;
  content_tokens: number;
  embedding: number[];
};

export type CUJSON = {
  author: string;
  length: number;
  tokens: number;
  posts: Post[];
};
