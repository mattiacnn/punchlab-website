import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Button from '../button/button'
import useScrollPosition from '../../hooks/useScrollPosition'
import Image from 'next/image'
import logo from "../../public/images/logo.png";

const navigation = [
  { name: 'WITH THE BAG', href: '#' },
  { name: 'WITH YOUR BODY', href: '#' },
  { name: 'OUR WORKOUTS', href: '#' },
  { name: 'PLANS', href: '#' },
]


export default function menu({ alwaysFixed }) {

  const scrollPosition = useScrollPosition();
  const isFixed = alwaysFixed === true || scrollPosition > 5 ? "bg-darkPurple w-full fixed" : "fixed w-full";


  return (
    <Popover className={isFixed} style={{ zIndex: 99 }}>
      <div className="relative p-6 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between sm:h-10 " aria-label="Global">
          <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <a href="#">
                <Image
                  width={95}
                  height={22}
                  src={logo}
                />
              </a>
              <div className="-mr-2 flex items-center lg:hidden">
                <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center 
                justify-center text-white focus:outline-none">
                  <MenuIcon onClick={() => document.body.style.overflow = "hidden"} className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
          </div>
          <div className="hidden lg:block md:ml-10 md:pr-4 md:space-x-8 w-fit">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="font-medium text-white">
                {item.name}
              </a>
            ))}
            <Button cta="Shop the strap" outline />
            <Button cta="Start 7-day free trial" />
          </div>
        </nav>
      </div>

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
          className="absolute z-50 top-0 inset-x-0 transition transform origin-top-right lg:hidden h-screen"
        >
          <div className="bg-darkPurple overflow-hidden h-full">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <Image
                  width={95}
                  height={22}
                  src={logo}
                />
              </div>
              <div className="-mr-2">
                <Popover.Button className="bg-transparent rounded-md p-2 inline-flex items-center 
                justify-center text-white  focus:outline-none ">
                  <XIcon onClick={() => document.body.style.overflow = "scroll"} className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-2xl font-medium text-white
                   text-center mt-2 mb-2"
                >
                  {item.name}
                </a>
              ))}
              <div className='flex mx-auto mt-5'>
                <Button cta="Start 7-day free trial" />
              </div>
              <div className='flex mx-auto mt-5'>
                <Button cta="Shop the strap" outline />
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}