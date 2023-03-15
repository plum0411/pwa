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
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-stone-400 hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                    </a>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-yellow-900 text-white' : 'text-stone-300 hover:bg-yellow-700 hover:text-white',
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
                      item.current ? 'bg-yellow-900 text-white' : 'text-stone-300 hover:bg-yellow-700 hover:text-white',
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

      <div className="text-left grid grid-cols-6 gap-x-12 p-24 relative overflow-hidden bg-white dark:bg-stone-900">

        <ol class="relative border-l border-stone-200 dark:border-stone-700 ml-32 col-span-5">
          <div className='grid grid-cols-4'>
            <li class="mb-24 ml-6 col-span-3">
              {/* <span class="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-stone-900 dark:bg-yellow-900">
              <svg aria-hidden="true" class="w-3 h-3 text-yellow-800 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span> */}
              <div class="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                <img src='./img/record.png' class=''></img>
              </div>
              <div className='ml-28'>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                  實習專案-樹梅派溫溼度感測網頁
                  <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 ml-3">Latest</span></h3>
                <time class="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  Released on 2023
                </time>
                <p class="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                  專五的專題過後的寒假我進入了創科股份有限公司開始實習，
                  開始學習更好管理與維護的<a className='text-yellow-600'>React框架</a>，
                  並用其與<a className='text-yellow-600'>ant-Design</a>搭配來撰寫溫溼度感測網頁，
                  我在其中負責了<a className='text-yellow-600'>LOGO</a>與<a className='text-yellow-600'>網頁介面設計</a>、前端刻板及感測變化圖表，
                  過程中我除了了解如何使用<a className='text-yellow-600'>Figma</a>設計頁面與<a className='text-yellow-600'>Prototype</a>的操作外，
                  也學會如何依需求建立圖表及連接至<a className='text-yellow-600'>Firebase</a>，
                  並開始使用<a className='text-yellow-600'>GitLab</a>進行專案的版本控制。
                </p>

                <a href="https://gitlab.com/trunk-yo/raspberry_backend" class="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                  {/* <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg> */}
                  ☚ 看看後端
                </a>
                <a href="https://gitlab.com/trunk-yo/raspberry_frontend" class="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                  {/* <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg> */}
                  看看前端 ☛
                </a>
              </div>
            </li>
            <img class="h-auto max-w-sm mx-8 rounded-lg" src="./img/record-rect.png" alt="image description" />
          </div>
          <div className='grid grid-cols-4'>
            <li class="mb-24 ml-6 col-span-3">
              {/* <span class="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-stone-900 dark:bg-yellow-900">
              <svg aria-hidden="true" class="w-3 h-3 text-yellow-800 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span> */}
              <div class="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                <img src='./img/mouji.png' class=''></img>
              </div>
              <div className='ml-28'>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                  自行進修-3D建模∕
                  <a href='https://www.instagram.com/plum_friends/' className='text-amber-700'>@plum_friends</a>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  Released 2022
                </time>
                <p class="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                  我在專五的專題過程中接觸了<a className='text-yellow-600'>3D建模</a>並從中學習如何創建一個角色的完整流程，
                  包括規劃2D的角色、建立3D模型、使用3D列印印出實體再翻模、為其上色、
                  <a className='text-yellow-600'>創建社群軟體帳號</a>並<a className='text-yellow-600'>參與展覽</a>提高社群關注，在社群平台的方面，
                  我額外去修習了<a className='text-yellow-600'>品牌經營</a>的課程，學習更系統化的經營方式，
                  而後期接了與其他模型作者的<a className='text-yellow-600'>聯名製作</a>更讓我加強與其他工作者合作時所需的溝通能力與細節。
                </p>

                <a href="https://www.instagram.com/plum_friends/" class="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                  {/* <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg> */}
                  看看哞吉 ➜
                </a>
              </div>
            </li>
            <div className='grid grid-cols-2 gap-4'>
              <img class="h-64 max-w-xs mx-8 rounded-lg col" src="./img/mouji-rect3.png" alt="image description" />
              <img class="h-64 max-w-xs mx-20 rounded-lg" src="./img/mouji-rect2.png" alt="image description" />
            </div>
          </div>
          <div className='grid grid-cols-4'>
            <li class="mb-24 ml-6 col-span-3">
              {/* <span class="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-stone-900 dark:bg-yellow-900">
              <svg aria-hidden="true" class="w-3 h-3 text-yellow-800 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span> */}
              <div class="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                <img src='./img/fire.png' class=''></img>
              </div>
              <div className='ml-28'>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                  專題-火場逃生VR模擬
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  Released on 2022
                </time>
                <p class="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                  專五的專題製作[火場的逃生VR模擬]，
                  我們採用了<a className='text-yellow-600'>Unreal虛幻引擎</a>結合arduino來模擬火場情境，
                  我在其中擔任了<a className='text-yellow-600'>場景美術</a>的製作，
                  並從中學習到了如何使用<a className='text-yellow-600'>3D建模軟體</a>的操作以及在
                  <a className='text-yellow-600'>3DsMax</a>與<a className='text-yellow-600'>Unreal</a>間模型的匯入與整合。
                </p>

                <a href="http://imtopic.nutc.edu.tw/2022/achievements/B25" class="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                  {/* <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg> */}
                  相關檔案 ➜
                </a>
              </div>
            </li>
            <img class="h-auto max-w-sm mx-8 rounded-lg" src="./img/fire-rect.png" alt="image description" />
          </div>
          <div className='grid grid-cols-4'>
            <li class="mb-24 ml-6 col-span-3">
              {/* <span class="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-stone-900 dark:bg-yellow-900">
              <svg aria-hidden="true" class="w-3 h-3 text-yellow-800 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span> */}
              <div class="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                <img src='./img/rapputappu.png' class=''></img>
              </div>
              <div className='ml-28'>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                  專題-比價網站
                </h3><time class="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {/* Released on January 13th, 2022 */}
                  Released on 2021
                </time>
                <p class="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                  專四的專題是電腦比價[RappuTappu]網站利用爬蟲(web crawler)爬取電腦網站的資料，
                  並且按照筆電的各項規格提供查詢與排序，我在其中負責網頁的<a className='text-yellow-600'>前端設計</a>，
                  學習到了<a className='text-yellow-600'>網頁建構</a>基礎知識與
                  <a className='text-yellow-600'>網頁前端開發</a>與<a className='text-yellow-600'>藍圖設計</a>、<a className='text-yellow-600'>LOGO設計的經驗</a>，
                  並且利用<a className='text-yellow-600'>Bootstrap</a>插件建構網頁功能。
                </p>

                <a href="https://drive.google.com/drive/folders/1BtX68XOitvJz0C7AUZgP5H4vHe0UNbPZ?usp=share_link" class="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                  {/* <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg> */}
                  相關檔案 ➜
                </a>
              </div>
            </li>
            <img class="h-auto max-w-sm mx-8 rounded-lg" src="./img/rapputappu-rect.png" alt="image description" />
          </div>
          <div className='grid sm:grid-cols-4 '>
            <li class="mb-24 ml-6 sm:col-span-3 col-span-1">
              {/* <span class="absolute flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full -left-3 ring-8 ring-white dark:ring-stone-900 dark:bg-yellow-900">
              <svg aria-hidden="true" class="w-3 h-3 text-yellow-800 dark:text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span> */}
              <div class="absolute w-40 h-40 bg-stone-200 rounded-full mt-2 -left-20 border border-white dark:border-stone-900 dark:bg-stone-700">
                <img src='./img/bear_round.png' class=''></img>
              </div>
              <div className='ml-28'>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-stone-900 dark:text-white">
                  國文組長
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  Released on 2020
                </time>
                <p class="mb-4 text-base font-normal text-stone-500 dark:text-stone-400">
                  我在專三的國文課擔任了分組報告的組長，當時的上課方式為每週各組都各自報告一個題目，
                  在當時擔任組長的過程中學習到了<a className='text-yellow-600'>妥善分配工作</a>以及<a className='text-yellow-600'>定期審視進度</a>的重要，
                  其中一周一次的報告不僅加強了我將<a className='text-yellow-600'>複雜資料統整</a>並以淺顯易讀的<a className='text-yellow-600'>簡報呈現</a>之能力，
                  也提升了我與合作伙伴<a className='text-yellow-600'>溝通協作的效率</a>。
                </p>

                <a href="https://drive.google.com/drive/folders/1GoIMOxerT3X8QEwnDKNv_ca5_DywtOV7?usp=share_link" class="inline-flex items-center px-4 py-2 text-sm font-medium text-stone-900 bg-white border border-stone-200 rounded-lg hover:bg-stone-100 hover:text-yellow-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-stone-200 focus:text-yellow-700 dark:bg-stone-800 dark:text-stone-400 dark:border-stone-600 dark:hover:text-white dark:hover:bg-stone-700 dark:focus:ring-stone-700">
                  {/* <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path>
                </svg> */}
                  相關檔案 ➜
                </a>
              </div>
            </li>
            <img class="h-auto max-w-sm mx-8 rounded-lg" src="./img/chinese-rect.png" alt="image description" />
          </div>

        </ol>
        <div className=' col-span-6 mx-24 my-20'>
          <hr class="w-full h-1 mx-auto mt-4 mb-8 bg-amber-200 border-0 rounded md:my-10 dark:bg-yellow-600"></hr>

          <p className="text-2xl mx-24 font-black dark:text-white">Epilogue
            <hr class="w-full h-0.5 mx-auto mb-8 mt-4 bg-stone-200 border-0 rounded md:my-10 dark:bg-stone-800"></hr>
          </p>
          <p className="text-lg my-4 mx-24 dark:text-white">
            一直以來的專題都是在專題老師的帶領下與同儕共同研究開發，未能有機會接觸真正貼近職場的環境與機會，偶然契機下得知了創科資訊的Monosprata培訓計畫，並且初步了解後，對該公司的公司文化與工作氛圍感到嚮往，於是在專五專題展結束後我便進入了該公司實習

            希望未來能在實習的過程中配合公司的工作指派並且完成任務。也希望能在實習中累積個人的經驗，提升與同事和睦相處共同協作的能力，同時摸索自己對未來更明確的道路。
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;
