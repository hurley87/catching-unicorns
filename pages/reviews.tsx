import Layout from '@/components/Layout';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: '400' });
const latoBold = Lato({ subsets: ['latin'], weight: '700' });

export default function Reviews() {
  return (
    <Layout title="Catching Unicorns | Links">
      <Header text="What People Are Saying About Catching Unicorns" />
      <div className={`py-8 text-gray-600 ${lato.className} text-sm`}>
        <p>
          Professor Hurley has provided important context for understanding the
          strong interaction between written symbols and mathematical thinking.
          He has also shown the ways in which written symbols serve thinkers of
          any kind, mathematical or not. They do this by providing an external
          memory display, called an “exogram,” which is an essential cognitive
          support for most of the cognitive operations that run our economy as
          well as the Internet. His survey of the literature on exograms is
          clear, wide-ranging, and a genuine contribution to the field. It is
          also accessible and great fun to read. <br />
          <span className={`${latoBold.className} text-sm`}>
            Merlin Donald, Professor Emeritus, Queen’s University, Kingston,
            Ontario, and author of Origins of the Modern Mind: Three Stages in
            the Evolution of Culture and Cognition
          </span>
        </p>
        <p className="pt-3 text-sm">
          The concepts explored in this book provide compelling and timely
          reminders of how the act and process of writing helps us to think,
          create and innovate. Teaching the importance and skill of writing is
          especially critical now given that we are in an age of artificial
          intelligence where elaborate, inauthentic written responses can be
          easily produced. Catching Unicorns is a thought-provoking book that
          will undoubtedly prompt educators to assess their teaching practice
          particularly given the foreseeable consequences to the development of
          the human thought process. A must read for teachers in higher
          education. <br />
          <span className={`${latoBold.className}`}>
            Dr. Eileen DeCourcy, Vice President Academic, George Brown College,
            Toronto
          </span>
        </p>
        <p className="pt-3 text-sm">
          Bill Hurley has addressed the vital link between the human imagination
          and the recording in intelligable symbols of ideas leading to their
          further development and communication to others literate in the
          symbols employed. Through the application of examples from many
          sources, including his own field of applied mathematics, he leads
          readers to a deeper understanding of the vital contributions of what
          we normally call writing or “exographics” to the processes of
          experiment, invention and their application to betterment of the human
          condition. It is a must read for everyone who takes too much for
          granted the importance of records, measurements, and of generally
          writing things down to foster strengthening, harvesting, and applying
          the ideas that flow from the human imagination. <br />
          <span className={`${latoBold.className}`}>
            Dr. Duncan G. Sinclair C.M., Professor Emeritus, and one-time Dean
            of Arts & Science and Medicine, Queen’s University
          </span>
        </p>
        <p className="pt-3 text-sm">
          Dr. Hurley’s Catching Unicorns: How Writing Enables Our Imaginations
          provides a comprehensive examination of how the human species arrives
          at extraordinary ideas through writing and collaboration. By
          illustrating the intricacies of human imagination, Dr. Hurley led me
          to a thorough appreciation of the qualities, tools, and systems that
          enable humans to solve complicated problems. Ultimately, Dr. Hurley’s
          class has equipped me with lasting skills to tackle problems, write,
          and communicate far more effectively. <br />
          <span className={`${latoBold.className}`}>
            Officer Cadet Andrew Rice, Royal Military College, March 2023
          </span>
        </p>
        <p className="pt-3 text-sm">
          With his intriguing and highly entertaining text Catching Unicorns:
          How Writing Enables Our Imaginations, Dr. Hurley provides an insight
          into thought that is valuable to any post-secondary student.
          Highlighting the uniqueness of the human mind and its reliance on
          external tools, Catching Unicorns thoroughly explores the history of
          human thought and how the characteristics of the mind influence human
          society. The book will undoubtedly provide the reader with a better
          appreciation for ideation, writing, and the thousands of years of
          evolution that have shaped the modern human mind.
          <br />
          <span className={`${latoBold.className}`}>
            Officer Cadet Andrew Willison, Royal Military College, March 2023
          </span>
        </p>
      </div>
    </Layout>
  );
}
