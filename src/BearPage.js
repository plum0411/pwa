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

    </div>
  );
}

export default App;
