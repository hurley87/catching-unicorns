// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

type Data = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const content = req.body.content;

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Summarize this content as a visual in less than 10 words. Return 3 ideas. Format it as an array of strings:
    
    "${content}"`,
  });

  const text = completion.data.choices[0].text as string;

  console.log(text);

  res.status(200).json({ text });
}
