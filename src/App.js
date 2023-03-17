import { React } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
// import logo from './logo.svg';
import './App.css';
import './tailwind.css';


const navigation = [
  { name: 'info', href: './info', current: false },
  { name: 'achievements', href: '/achievements', current: false },
  { name: 'about bear', href: '/about-bear', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function App() {
  return (
    <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0">


      <Disclosure as="nav" className="bg-yellow-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <a href='./'>
                      <img
                        // className="block h-8 w-auto lg:hidden rounded-full"
                        className="block h-8 w-8 lg:hidden rounded-lg"
                        src='./img/bear-rect.webp'
                        alt="plum logo"
                      />
                      <img
                        // className="hidden h-8 w-auto lg:block"
                        className="hidden h-8 w-8 lg:block rounded-lg"
                        src='./img/bear-rect.webp'
                        alt="Your Company"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-yellow-900 text-white' : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-yellow-900 text-white' : 'text-gray-300 hover:bg-yellow-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <div className="relative overflow-hidden bg-white dark:bg-stone-900">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-0 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg sm:m-0 mx-12">
              <h1 className="font sm:text-4xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl text-left">
                Mayble Chang
              </h1>
              <br></br>
              <h1 className="font sm:text-2xl text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-left">
                哈嘍ヾ(๑•̀∀•́๑)ツ，我是張郁梅
              </h1>
              <p className="mt-4 sm:text-xl text-base text-gray-500 dark:text-yellow-600 text-left">
                這是我做的自我介紹網站，瀏覽看看來認識我吧！
              </p>
            </div>
            <div>
              <div className="mt-10 justify-start flex">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">

                    <img
                      src="./img/bear-sacrifice.webp"
                      alt="古埃及熊麻獻祭圖"
                      className="max-h-lg max-w-lg transition-all duration-300 cursor-pointer filter scale-100 grayscale hover:grayscale-0 hover:scale-95"
                    // className="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                    />
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-96 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          
                        </div>
                      </div> */}
                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.webp"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                <button className="z-10 sm:m-0 mx-28 my-36 justify-center items-center inline-block rounded-md border border-transparent bg-yellow-400 py-3 px-8 text-center font-medium hover:bg-yellow-500">
                  <a href="./info">
                    開始吧！
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
