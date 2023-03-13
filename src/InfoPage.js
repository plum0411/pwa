import { React, Fragment, Layout } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './logo.svg';
import './App.css';
import './tailwind.css';
import InfoPage from "./InfoPage";

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
    <div className="App font-poppins">
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
                    <img
                      // className="block h-8 w-auto lg:hidden rounded-full"
                      className="block h-8 w-auto lg:hidden rounded-lg"
                      src='./img/bear_rect.png'
                      alt="Your Company"
                    />
                    <img
                      // className="hidden h-8 w-auto lg:block"
                      className="hidden h-8 w-auto lg:block rounded-lg"
                      src='./img/bear_rect.png'
                      alt="Your Company"
                    />
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
      <div className="grid grid-cols-6 p-24 relative overflow-hidden bg-white dark:bg-stone-900">
        <img className="rounded-full border-8 border-gray-200 " src="./img/me.png" alt="image description" />
        <div className="col-span-5 text-left pl-40">
          <p className="text-4xl font-black dark:text-white">張郁梅</p>
          <p className="text-lg my-4 dark:text-white">ＳＥＬＦ　ＩＮＴＲＯ</p>
          <p className="text-lg my-4 dark:text-white">
            我是張郁梅，國中畢業後就讀於國立台中科技大學的資訊應用菁英班五專部，
            在求學過程中學習了各項語言(Kotlin、Java、C等)的程式設計基礎以及各式程式開發工具，
            出生於台中的小康家庭，家中成員有四人，我則是長女，在父母開明幽默的教導下，
            成就了我能理性思考的特質以及適時換位思考的能力，不僅讓我能夠判斷事情的關鍵點即時應對，
            也幫助我再專案中從不同視角優化使用者體驗並更好的與合作夥伴溝通。</p>
          <hr class="w-full h-1 mx-auto bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <ol class="items-center sm:flex">
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full ring-0 ring-white dark:bg-amber-900 sm:ring-8 dark:ring-stone-800 shrink-0">
                  <svg aria-hidden="true" class="w-3 h-3 text-amber-800 dark:text-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-stone-800"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-black text-gray-900 dark:text-white">
                  國立永安國民小學
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  畢業於2015
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  {/* 407台中市西屯區西屯路三段133號<br></br> */}
                  「鐵肩擔教育，笑臉看兒童」，秉持「學生第一」「教學為先」及「多元適性」的原則，創造學生學習
                  高峰經驗，適性揚才，培養學生身心及五育均衡發展，以實現全人教育，創
                  造一個教師用心、學生開心、家長放心的「全是贏家的學校」。
                </p>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-amber-100 rounded-full ring-0 ring-white dark:bg-amber-900 sm:ring-8 dark:ring-stone-800 shrink-0">
                  <svg aria-hidden="true" class="w-3 h-3 text-amber-800 dark:text-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-stone-800"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-black text-gray-900 dark:text-white">
                  國立福科國民中學
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  畢業於2018
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  {/* 407台中市西屯區福林路333號<br></br> */}
                  因應未來多元社會的發展，本校教學目標為開展學生多元智慧，教師教學多元生動，輔以班級經營策略，
                  結合科學、英語、資訊科技學習環境，強調因材施教，將每一個孩子帶上來，期許學生立足福科、放眼未來。
                </p>
              </div>
            </li>
            <li class="relative mb-6 sm:mb-0">
              <div class="flex items-center">
                <div class="z-10 flex items-center justify-center w-6 h-6 bg-amber-200 rounded-full ring-0 ring-white dark:bg-amber-900 sm:ring-8 dark:ring-stone-800 shrink-0">
                  <svg aria-hidden="true" class="w-3 h-3 text-amber-900 dark:text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-stone-800"></div>
              </div>
              <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-black text-gray-900 dark:text-white">
                  國立台中科技大學
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  就讀中
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                  {/* 404台中市北區三民路三段129號<br></br> */}
                  國立臺中科技大學，簡稱臺中科大、中科大、NTCUST、NUTC，是一所位於中華民國臺中市的國立科技大學，
                  現有四大學制：日間部、進修部、空中學院、進修學院。
                  共有六大學院：商學院、設計學院、語文學院、資訊與流通學院、中護健康學院、智慧產業學院。
                </p>
              </div>
            </li>
          </ol>

        </div>
      </div>
    </div>
  );
}

export default App;