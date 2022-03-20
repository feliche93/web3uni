/* This example requires Tailwind CSS v2.0+ */
import { LightningBoltIcon, SparklesIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export default function Features() {
  return (
    <div id="features" className="relative pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                  <LightningBoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Your interactive web3 Journey
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  We help you to learn and use web3 in a fun and interactive way. Follow step-by-step guides and easy tutorials without being afraid to loose money or make mistakes. Once you complete each lesson you will unlock a new exclusive NFT.
                </p>
                <div className="mt-6">
                  <Link href="register">
                    <a
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Today it feels like the frontiers on the internet and even on the internet, the frontier is within Web3 and crypto because it's sort of the least regulated the most decentralized, the most permissionless, 24x7x365 markets that are self-funding, hackers from all around the world can participate.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="/naval.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">Naval Ravikant</div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/open-sea-website.png"
                alt="Open Sea Website"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  From Wallets to Tokens, NFTs and DEFI
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  We help you all the way from creating and funding your wallet to minting your first NFT. And it will not stop there. Learn how to join a DAO or use some more advanced DEFI protocols.
                </p>
                <div className="mt-6">
                <Link href="register">
                    <a
                      className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Get started
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/uniswap-website.png"
                alt="Uniswap Website"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
