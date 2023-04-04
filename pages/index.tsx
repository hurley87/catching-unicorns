import Layout from '@/components/Layout';
import Image from 'next/image';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';
import Link from 'next/link';

const latoBold = Lato({ subsets: ['latin'], weight: '700' });
const lato = Lato({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <Layout title="Catching Unicorns | Home">
      <div className={`py-8 text-gray-600 ${lato.className}`}>
        <Image
          src="/Cover.png"
          alt=""
          width={300}
          height={376}
          className="mr-6 mt-2 mb-2 md:float-left shadow-sm rounded-md"
        />
        <p className={latoBold.className + ' text-sm pt-2'}>
          When the topic of writing comes up in college and university
          classrooms, it is generally in the context of “how to do it”
          discussions. But another important question is “why we do it.”
        </p>
        <p className="pt-3 text-sm">
          Catching Unicorns: How Writing Enables Our Imaginations provides a
          full answer to this second question with some important observations
          on the first.
        </p>
        <p className="pt-3 text-sm">
          Students spend a lot of time writing. They take lecture notes, they
          make notes while preparing to write an essay or report, they write to
          fellow students and professors, they record lab results, write exams
          and so on. They also spend a lot of time consuming the writing of
          others. They read textbooks, lecture notes, papers, essays, exams,
          assignment questions, emails, and texts. Furthermore, once students
          graduate, writing will be critical in their professional lives and in
          their roles as citizens. Since we spend years learning how to read and
          write, the question “why we do it” is an important one.
        </p>
        <p className="pt-3 text-sm">
          Catching Unicorns focuses on how we use writing to think and ideate.
          I’ll first argue that certain kinds of ideas are only discoverable
          with writing. The technology of writing enabled us to build the Saturn
          V rocket, to design mRNA vaccines, and to compose Adagio for Strings.
          Without it, these “ideas” would not exist. I’ll present evidence that
          the collection of ideas spawned by writing has been growing
          exponentially for centuries and now forms the basis for our modern
          techno-literate societies. Second, I’ll develop the idea that writing
          is a key technology which supports our collaboration, the signature
          talent of our species. Much of modern ideation is collaborative on a
          grand scale. It took 300,000 of us working for ten years to get Apollo
          11 to the moon. Quite simply, the technology of writing enables a
          complex mind-sharing network to think and ideate over time and space.
          Both of these points are meant to convince students (and colleagues)
          that writing has been one of the most important technologies we’ve
          discovered.
        </p>
        <br />
        <br />
        <Link href="https://he.kendallhunt.com/product/catching-unicorns-how-writing-enables-our-imaginations">
          <button
            className={`bg-blue-500 text-white px-4 py-1 mx-auto rounded-sm block ${latoBold.className}`}
          >
            Purchase Catching Unicorns
          </button>
        </Link>
      </div>

      <Header text="About The Author" />
      <div className={`py-10 text-gray-600 ${lato.className} max-w-xl mx-auto`}>
        <Image
          src="/Headshot.jpg"
          alt="bill hurley pic"
          width={200}
          height={250}
          className="mr-6 md:float-left border-2 border-black shadow-sm rounded-md"
        />
        <p className="pt-4 text-sm">
          Bill Hurley (BSc, MBA, PhD) is a Professor of Applied Mathematics in
          the Department of Mathematics and Computer Science at the Royal
          Military College of Canada. His research interests are in decision
          analysis, game theory, defence analytics, and cognitive science. He’s
          held NSERC funding continuously over his career and has published over
          125 refereed papers.
        </p>
        <p className="pt-3 text-sm">
          He has two sons, David and Matthew, two grandchildren, Alice and
          Evelyn, and lives with his wife Deb and Basset hound Miss Lily in
          Kingston, Ontario, Canada.
        </p>
      </div>
    </Layout>
  );
}
