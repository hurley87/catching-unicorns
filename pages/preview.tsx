import Layout from '@/components/Layout';
import { Chunk } from '@/types';
import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { useState } from 'react';
import endent from 'endent';
import { Answer } from '@/components/Answer';

export default function FAQ() {
  const [query, setQuery] = useState<string>('');
  const [chunks, setChunks] = useState<Chunk[]>([]);
  const [answer, setAnswer] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      handleAnswer();
    }
  };

  const handleAnswer = async () => {
    if (!query) {
      alert('Please enter a query.');
      return;
    }

    setAnswer('');
    setChunks([]);

    setLoading(true);

    const searchResponse = await fetch('/api/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, matches: 1 }),
    });

    if (!searchResponse.ok) {
      setLoading(false);
      throw new Error(searchResponse.statusText);
    }

    const results: Chunk[] = await searchResponse.json();

    setChunks(results);

    const prompt = endent`
    Use the following book to provide an answer to the query: "${query}"

    ${results?.map((d: any) => d.content).join('\n\n')}
    `;

    const answerResponse = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!answerResponse.ok) {
      setLoading(false);
      console.log('ERRROR');
    }

    const data = answerResponse.body;

    if (!data) {
      return;
    }

    setLoading(false);

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setAnswer((prev) => prev + chunkValue);
    }
  };

  console.log('TEST');
  console.log(chunks);
  console.log(answer);
  console.log(loading);
  console.log('');

  return (
    <Layout title="Catching Unicorns | Preview">
      <div className="relative w-full mt-4 pb-72">
        <IconSearch className="absolute top-3 w-10 left-1 h-6 rounded-full opacity-50 sm:left-3 sm:top-4 sm:h-8" />

        <input
          className="h-12 w-full rounded-full border border-zinc-600 pr-12 pl-11 focus:border-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-800 sm:h-16 sm:py-2 sm:pr-16 sm:pl-16 sm:text-lg"
          type="text"
          placeholder="Does literacy play a big role in our cognitive life?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button>
          <IconArrowRight
            onClick={handleAnswer}
            className="absolute right-2 top-2.5 h-7 w-7 rounded-full bg-blue-500 p-1 hover:cursor-pointer hover:bg-blue-600 sm:right-3 sm:top-3 sm:h-10 sm:w-10 text-white"
          />
        </button>
        {loading ? (
          <p className="pt-4">Searching for an answer ...</p>
        ) : (
          answer !== '' && (
            <p className="pt-4">
              <Answer text={answer} />
            </p>
          )
        )}
      </div>
    </Layout>
  );
}