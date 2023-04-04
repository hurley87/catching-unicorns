import Layout from '@/components/Layout';
import { Lato } from 'next/font/google';
import Header from '@/components/Header';

const lato = Lato({ subsets: ['latin'], weight: '400' });

export default function Author() {
  return (
    <Layout title="Catching Unicorns | Author">
      <Header text="Why Writing Matters" />
      <div className={`py-8 text-gray-600 ${lato.className} text-sm`}>
        <p>The power of writing is not fully understood.</p>
        <p className="pt-3 text-sm">
          We normally think of it as a fine supplement to speaking because it
          allows us to communicate ideas over vast stretches of time and space.
          I can read what Euclid thought about geometry two and a half millennia
          ago and write to a colleague half a world away.
        </p>
        <p className="pt-3 text-sm">
          However, it’s more than a medium of communication. In Catching
          Unicorns: How Writing Enables Our Imaginations (Kendall Hunt, 2023), I
          argue that writing has been crucial to us discovering a large class of
          ideas. How it enables discovery is best explained with three simple
          examples.
        </p>
        <p className="pt-3 text-sm">
          Some time ago, my sister, a lawyer, asked me to tell her something
          interesting about my research. I replied: “To do serious thinking you
          always use your hands.” She heartily disagreed saying she used her
          head to think. So I asked her how she prepared for an important
          cross-examination, knowing she would tell me she wrote it out. When
          she did, it was my turn: “So you use your hands to think.” She thought
          for a moment and replied: “I might use my hands, but my mind is
          telling my hands what to do.” I answered: “But what if I took away
          your pen? Could you put together a cross-examination?” She conceded
          she couldn’t.
        </p>
        <p className="pt-3 text-sm">
          Let’s consider the arithmetic problem 847 x 86. The answer is 72,842.
          I find it very difficult to get this answer using only my mind. But if
          I can use writing to record my intermediate calculations so I don’t
          forget them, I can get an answer quickly.
        </p>
        <p className="pt-3 text-sm">
          This arithmetic problem is a simple metaphor for more difficult
          problems whose solutions lead to important ideas. Einstein reported
          that he thought about relativity by visualizing the cinema of a moving
          train, lightning bolts, and two observers. But what he couldn’t
          imagine were the associated maths. He had to put pen to paper to see
          if the math would reveal something interesting. Happily, it did and
          Special Relativity and E=mc2 were hatched.
        </p>
        <p className="pt-3 text-sm">
          The role of writing in thought was discovered by cognitive scientists
          in the early 1990s. My contribution begins with the observation that
          we didn’t need writing to discover ideas like tailored clothing,
          surfboards, and cooking but we did to get to computer chips, the
          calculus, and the Saturn V rocket. Why do we need writing to discover
          certain kinds of ideas but not others?
        </p>
        <p className="pt-3 text-sm">
          A part of the answer is the aide to memory I mentioned above. But
          there is another reason. What our species is especially good at is
          working with materials in our visual fields and this goes back to our
          ancient hominin ancestors who fashioned stone tools some two and half
          million years ago. However, for certain ideas, the raw materials are
          not naturally in our visual fields. For example, there is no such
          thing as the number “23” in the real world. But we were able to invent
          this abstract concept and then use it. The key to using it is our
          ability to etch “23” on a clay tablet or write it on a piece of paper.
          Once on a visual medium, it’s as real as the desk I’m sitting at, and
          we can then combine it with other abstract concepts to discover ideas.
          Hence, writing allows us to get abstract concepts into our visual
          fields where we can then manipulate them into ideas. This is why we
          didn’t need writing to ideate the plough but we did to go to the moon,
          build mRNA vaccines, and compose Adagio for Strings.
        </p>
        <p className="pt-3 text-sm">
          Let’s think about the complete collection of ideas we’ve discovered
          since the dawn of consciousness, a collection we can partition into
          ideas that have required writing to discover—what I term A Class
          ideas—and those that don’t. Surveys of the A Class suggest that it’s
          been growing exponentially for the last millennium and there is no
          reason to think this growth will not continue. As I argue, the
          techno-literate society we enjoy today, with all of its A Class
          material artifacts, is the direct result of our discovery of the
          technology of writing.
        </p>
        <p className="pt-3 text-sm">
          The lore on unicorns is that they are difficult to capture. Two
          important ones our species has corralled are speech and writing. We’ve
          doubled down with writing, using it to capture the abstract unicorns
          of our imaginations. I am not suggesting for a minute that writing is
          the key element of the story because it isn’t. What is key is our
          imaginations. But as we’re beginning to discover, we can’t fully
          exploit these imaginations without writing. Just as a carpenter needs
          a hammer to pound a nail, we need the technology of writing to
          discover A Class ideas.
        </p>
      </div>
    </Layout>
  );
}
