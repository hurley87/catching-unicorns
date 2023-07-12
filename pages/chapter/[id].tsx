import type { NextPage } from 'next';
import * as React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import { chapters } from '@/scripts/book';
import { Libre_Baskerville } from 'next/font/google';
const baskerville = Libre_Baskerville({ subsets: ['latin'], weight: '400' });

const ViewChapterPage: NextPage = () => {
  const [id, setId] = React.useState<string | undefined>();
  const [chapter, setChapter] = React.useState<any>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) {
      setId(router.query.id?.toString());
      const chapter =
        chapters[parseInt(router.query.id?.toString() || '0') - 1];
      setChapter(chapter);
    }
  }, [router.isReady, router.query]);

  return chapter ? (
    <Layout title={chapter.title}>
      <h1 className={`${baskerville.className} text-2xl pt-4`}>
        {chapter.title}
      </h1>
      <p className="text-bold text-sm">Chapter {chapter.number}</p>
      <div className="whitespace-pre-line pt-4">{chapter.text}</div>
    </Layout>
  ) : (
    <Layout title="Catching Unicorns"></Layout>
  );
};

export default ViewChapterPage;
