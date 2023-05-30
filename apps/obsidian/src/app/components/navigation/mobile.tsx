import {Dispatch, Fragment, SetStateAction} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/24/outline'
import Logo from '../logo'
import NavigationContext from '../../contexts/navigation-context'

type Props = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Mobile ({ open, setOpen }: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pb-4 pt-5">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute right-0 top-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              <div className="flex flex-shrink-0 items-center px-4">
                <Logo />
              </div>

              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="px-2">

                  <div className="flex flex-col gap-2">
                    <NavigationContext.Consumer>
                      {([navigation]) => (
                        <>
                          { navigation.map((link, index) => (
                            <div className="px-3" key={index}>
                              <h3 className=" text-sm font-medium text-gray-500" id="mobile-teams-headline">
                                {link.label}
                              </h3>
                            </div>
                          ))}
                        </>
                      )}
                    </NavigationContext.Consumer>
                  </div>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>

          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
