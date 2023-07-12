import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]';

export default function SignIn({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  return (
    <>
      <div className="m-4 rounded-xl bg-gray-200 p-12">
        <div className="mb-8 w-full items-center justify-center text-center text-xl font-bold">
          Sign In
        </div>
        <div className="rounded-md bg-white p-4">
          <button
            className="flex flex-row items-center justify-center bg-red-500"
            onClick={() => signIn('google')}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: '/' } };
  }

  return {
    props: {},
  };
}
