import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';

const SignIn = () => {

  const { isAuthenticated, logout, authentice, user, userError } = useMoralis()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState({ type: '', content: '' });
  const router = useRouter();
  const { next } = router.query;

  const handleSignin = async (e) => {
    e.preventDefault();

    setSubmitted(true);
    setLoading(true);
    setMessage({});

    const { error } = await signIn({ email, password });
    if (error) {
      setMessage({ type: 'error', content: error.message });
      setisError(true);
    }
    if (!password) {
      setMessage({
        type: 'note',
        content: 'Check your email for the magic link.',
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      console.log(router.query);
      router.replace('/welcome');
    }
  }, [user]);

  if (!user)
    return (
      <div className='min-h-screen flex flex-col justify-center py-6 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <img
            className='mx-auto h-12 w-auto'
            src='/share.png'
            alt='Workflow'
          />
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Sign in with a magic Link
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            Not Signed up yet?{' '}
            <Link href='/register'>
              <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                Sign up here.
              </a>
            </Link>
          </p>
        </div>

        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
            <form onSubmit={handleSignin} className='space-y-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700'
                >
                  Email address
                </label>
                <div className='mt-1'>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  />
                </div>
              </div>

              <div>
                <button
                  disabled={submitted}
                  type='submit'
                  className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  {submitted ? 'Magic Link Sent' : 'Submit'}
                </button>
                {isError && (
                  <p className='mt-2 text-sm text-center text-red-600'>
                    {message.content}
                  </p>
                )}
                {!isError && submitted && (
                  <p className='mt-2 text-sm text-center text-gray-500'>
                    {message.content}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );

  return null;
};

export default SignIn;
