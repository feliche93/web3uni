

import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import SectionContent from '../../UI/SectionContent';

import Link from 'next/link'
import NavLinks from './NavLinks';

const navigation = [
  { name: 'Home', href: '/', protected: false },
  { name: 'Features', href: '/#features', protected: false },
  { name: 'FAQ', href: '/#faq', protected: false },
  { name: 'Welcome', href: '/welcome', protected: true },
  { name: 'Notion Setup', href: '/setup/copy-notion-template', protected: true },
  { name: 'Account Settings', href: '/account/plan', protected: true }
]

const actions = [
  { name: 'Sign in', href: '/login', style: 'secondary', protected: false },
  { name: 'Sign up', href: '/sign-up', style: 'primary', protected: false },
]

const Nav = () => {
  // const { user, signOut } = useUser();
  const router = useRouter()


  return (
    <Popover>
      {/* Deskto Menu */}
      <SectionContent>
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto sm:h-10"
                  src="/share.png"
                  alt=""
                />
              </a>
              </Link>
              <div className="-mr-2 flex items-center md:hidden">
                <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <NavLinks
            navigation={navigation}
            // user={user}
          />

          <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            {true ? (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/login">
                  <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Sign in
                  </a>
                </Link>
                <Link href="/register">
                  <a
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Sign up
                  </a>
                </Link>
              </div>
            ) : (
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link href="/register">
                  <button
                    onClick={signOut}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>

        </nav>
      </SectionContent>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="/share.png"
                  alt=""
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <NavLinks
              navigation={navigation}
              // user={user}
              mobile="true"
            />
            {true ? (
              <>
                <Link href="/login">
                  <a className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100">
                    Sign in
                  </a>
                </Link>
                <Link href="/register">
                  <a
                    className="block w-full px-5 py-3 text-center font-medium text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Sign up
                  </a>
                </Link>
              </>
            ):(
              <div>
                <Link href="/register">
                  <button
                    onClick={signOut}
                    className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Nav
