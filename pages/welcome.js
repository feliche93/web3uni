import SectionContent from '../components/UI/SectionContent';
import { useMoralis } from 'react-moralis';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Welcome() {

  const { user } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    }
  }, [user]);

  return (

    <SectionContent>
      <div className="text-center py-10">
        <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Thanks for signing up 🎉</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          We are launching soon 🚀
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          We will notify you via email once our first lessons are launching.
        </p>
      </div>
    </SectionContent>

  )
}
