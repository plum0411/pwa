// import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './App.css';
import './tailwind.css';

const navigation = [
  { name: 'info', href: '/info', current: "" },
  { name: 'achievements', href: '/achievements', current: "" },
  { name: 'about bear', href: '/about-bear', current: "" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <div className="App font-poppins bg-white dark:bg-stone-900 h-full m-0 p-0">
      <Disclosure as="div" className="bg-yellow-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
                        className="block h-8 w-8 lg:hidden rounded-lg"
                        src='./img/bear-rect.webp'
                        alt="plum logo"
                      />
                      <img
                        className="hidden h-8 w-8 lg:block rounded-lg"
                        src='./img/bear-rect.webp'
                        alt="plum logo"
                      />
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <a
                          key={item.href}
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

      <div className="grid sm:grid-cols-6 grid-cols-1 p-12 sm:p-24 relative overflow-hidden bg-white dark:bg-stone-900">
        <div className='col-span-1'>
          <div className='flex justify-center'>
            <img className="rounded-full border-8 border-black mb-4 sm:w-auto w-40 justify-center" src="./img/logo.webp" alt="description" />
          </div>
          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-2xl my-4 font-black dark:text-white">Expertise</p>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            搗蛋
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            欺負人
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            邪惡的想法
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            翻滾
          </li>
          <li className="flex items-center text-base my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-stone-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
            乖乖聽話
          </li>

          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-2xl my-4 font-black dark:text-white">Contact</p>


          {/* <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/phone-call.svg' className="w-4 h-4 mr-1.5 flex-shrink-0"></img>
            0966-326329
          </li> */}
          {/* <li className="flex text-sm my-4 dark:text-white">
            <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
            台中市西屯區漢翔路127號8F-1
          </li> */}
          {/* <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/email.svg' className="w-4 h-4 mr-1.5 flex-shrink-0"></img>
            mayble0411@gmail.com
          </li> */}
          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='instagram'></img>
            <a href='https://www.instagram.com/abiju_bear-ma/'>@abiju_bear-ma</a>
          </li>
          <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/img-solid.svg' className="w-4 h-4 mr-1.5 flex-shrink-0" alt='solid'></img>
            {/* <img src='./img/instagram.svg' className="w-4 h-4 mr-1.5 flex-shrink-0"></img> */}
            <a href='https://photos.app.goo.gl/3WybRNACKhetdc9Z9'>@熊麻寫真集</a>

          </li>
          {/* <li className="flex text-sm my-4 dark:text-white items-center">
            <img src='./img/linkedin.svg' className="w-4 h-4 mr-1.5 flex-shrink-0"></img>
            <a href='https://www.linkedin.com/in/%E9%83%81%E6%A2%85-%E5%BC%B5-768085212/details/certifications/'>@張郁梅</a>
          </li> */}

          <hr className="w-full h-1 mx-auto mt-4 mb-8 bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

        </div>


        <div className="sm:col-span-5 col-span-1 text-left sm:pl-24">
          <p className="text-4xl font-black dark:text-white">熊麻</p>
          <p className="text-lg my-4 dark:text-white">ＳＥＬＦ　ＩＮＴＲＯ</p>
          {/* <p className="text-lg my-4 dark:text-white">
            身高：
          </p> */}
          <div className=' relative grid sm:grid-cols-2 mt-8 justify-center items-center'>
            {/* <h2 className="mb-2 text-lg font-semibold text-stone-900 dark:text-white">Password requirements:</h2> */}

            <ul className="max-w-md space-y-1 text-stone-500 list-disc list-inside dark:text-white">
              <li>
                品種：<span className='text-stone-300'>熊</span>
              </li>
              <li>
                身高：<span className='text-stone-300'>不到50cm</span>
              </li>
              <li>
                體重：<span className='text-stone-300'>500g ~</span>
              </li>
              <li>
                休閒活動：<span className='text-stone-300'>欺負熊麻、命令人類</span>
              </li>
              <li>
                喜歡的食物：<span className='text-stone-300'>牛奶</span>
              </li>
              <li>
                討厭的食物：<span className='text-stone-300'>有腥味的食物</span>
              </li>
            </ul>
            <img src="./img/bear1.webp" className='w-96 sm:absolute my-4 sm:right-10 sm:top-20' alt='bear rest'></img>
          </div>
          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-3xl my-4 font-black dark:text-white">說一些話吧熊麻</p>
          {/* <hr className="w-full h-0.5 mx-auto bg-stone-200 border-0 rounded md:mb-10 dark:bg-stone-800"></hr> */}
          <div className='grid sm:grid-cols-2 mt-8 justify-center'>
            <img src="./img/bear3.webp" className='w-96' alt='bear-giragira'></img>
            <p className="sm:text-3xl text-lg my-4 dark:text-white sm:pt-16 sm:text-left text-center">
              哈嘍<br></br>
              <b className="sm:text-6xl text-3xl">我是熊麻</b>
              <br></br>給我牛奶
            </p>
          </div>


          <hr className="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

        </div>
      </div>

    </div>
  );
}

export default App;
