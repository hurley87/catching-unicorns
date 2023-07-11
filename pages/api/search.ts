import { supabaseAdmin } from '@/utils';

export const config = {
  runtime: 'edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { query, matches } = (await req.json()) as {
      query: string;
      matches: number;
    };

    const input = query.replace(/\n/g, ' ');
    const apiKey = process.env.OPENAI_API_KEY as string;

    const res = await fetch('https://api.openai.com/v1/embeddings', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      method: 'POST',
      body: JSON.stringify({
        model: 'text-embedding-ada-002',
        input,
      }),
    });

    const json = await res.json();
    const embedding = json.data[0].embedding;
    // console.log('embedding', embedding);

    const { data: chunks, error } = await supabaseAdmin.rpc('cu_search', {
      query_embedding: embedding,
      similarity_threshold: 0.01,
      match_count: 1,
    });

    console.log('chunks', chunks);

    if (error) {
      console.error(error);
      return new Response('Error', { status: 500 });
    }

    return new Response(JSON.stringify(chunks), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;
