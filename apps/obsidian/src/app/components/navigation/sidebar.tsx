import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Mobile from './mobile'
import NavigationContext from '../../contexts/navigation-context'
import LinkItem from './link-item'

export default function Sidebar () {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <NavigationContext.Consumer>
      {([navigation]) => (
        <div>
          {/** MOBILE NAV **/}
          <div>
            <Mobile open={open} setOpen={setOpen} />
          </div>

          <div className="hidden lg:flex lg:sticky h-screen top-0">
            <div className="flex flex-col justify-between h-full bg-white">
              <Link to={"/"} className="inline-flex border">
                <div className="absolute inset-y-0 left-0 md:static md:flex-shrink-0">
                  <div
                    className="flex h-20 w-20 items-center justify-center  focus:outline-none "
                  >
                    <img
                      className="h-12 w-auto"
                      src="../../../../public/icon.webp"
                      alt="Your Company"
                    />
                  </div>
                </div>
              </Link>

              <div className="flex flex-col justify-between border-r h-full py-8">
                <div className=" flex flex-col gap-4">
                  {navigation.map((link) =>
                    <LinkItem key={link.label} link={link} /> )
                  }
                </div>
              </div>

            </div>
          </div>


          {/** NAVBAR MOBILE **/}
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center">
                {/* Profile dropdown */}
                <span>loren</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </NavigationContext.Consumer>

  )
}
