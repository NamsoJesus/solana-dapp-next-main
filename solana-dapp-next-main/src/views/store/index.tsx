
import Link from "next/link";
import { FC } from "react";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
export const StoreView: FC = ({ }) => {
  const lorems = [
    { id: 1, name: 'lorem1' },
    { id: 2, name: 'lorem2' },
    { id: 3, name: 'lorem3' },
    { id: 4, name: 'lorem4' },
    { id: 5, name: 'lorem5' },
    { id: 6, name: 'lorem6' },
    { id: 7, name: 'lorem7' },
    { id: 8, name: 'lorem8' },
    { id: 9, name: 'lorem9' },
    { id: 10, name: 'lorem10' },
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const [selected, setSelected] = useState(lorems[3])

  const files = [
    {
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },
    {
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },{
      title: '79352',
      size: '3.9 MB',
      source:
        '/79352.jpg',
    },
  ]

  return (
    <div className="w-full ">
      <div className="wrapper pl-20 pr-20 mt-40">
         
         <div className="link-to-return"> 
          <Link href="/">
          <p className=" text-sm text-blue-700 font-thin">Home {'>'} Galeria</p>
          </Link>
         </div>
         <div className="image h-64 bg-white w-full">
          
         </div>

         <div className="galeria-container">
          <div className="input-container flex justify-end w-full">
            <form className="mt-4 sm:flex ">
              <label htmlFor="search" className="sr-only">
                Lorem ipsum dolor sit amet.
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-96 bg-white border border-transparent rounded-md py-2 px-4 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="lorem lorem lorem lorem lorem lorem lorem"
              />
              <div className="mt-3 w-48 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                  Filtro
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-16">
              <div className="menu col-1 h-96">
                <div className="mb-10 border-style">
                  <Listbox  value={selected} onChange={setSelected} >
                  {({ open }) => (
                   <>
         
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none text-xl border-top">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {lorems.map((lorems) => (
                  <Listbox.Option
                    key={lorems.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4'
                      )
                    }
                    value={lorems}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {lorems.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
                  </Listbox>
                </div>
                
                <div className="mb-10 border-style">
                  <Listbox  value={selected} onChange={setSelected} >
                  {({ open }) => (
                   <>
         
          <div className="mt-1 relative">
            <Listbox.Button className="relative w-full rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none text-xl border-top">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {lorems.map((lorems) => (
                  <Listbox.Option
                    key={lorems.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4'
                      )
                    }
                    value={lorems}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {lorems.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
                  </Listbox>
                </div>
              </div>
              <div className="col-span-3  h-full">
                   <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group block w-full aspect-w-5 aspect-h-5 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <img src={file.source} alt="" className="object-cover pointer-events-none group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
          <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
        </li>
      ))}
    </ul>
              </div>
          </div>
         </div>
      </div>
    
    </div>
  );
};
