import { useState } from "react";
import { MenuIcon } from "../icons/Menu";

interface MenuModal {
   opened?: boolean
}

export const MenuModal = ({ opened }: MenuModal) => {
   const [isDrawerVisible, setIsDrawerVisible] = useState(opened);

   return (
      <>
         <button
            className="inline-flex items-center justify-center w-10 p-2 text-sm text-gray-500 rounded-lg md:h-14 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
            data-drawer-target="drawer-navigation"
            onClick={() => setIsDrawerVisible(!isDrawerVisible)}
         >
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
         </button>
         <div
            id="drawer-navigation"
            className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerVisible ? "" : "-translate-x-full"
               } bg-white w-64 dark:bg-gray-800`}
            tabIndex={-1}
            aria-labelledby="drawer-navigation-label"
         >
            <div className="flex items-center justify-between mb-4">
               <h2 className="text-3xl font-semibold text-gray-600 dark:text-gray-300">
                  Menu
               </h2>
               <button
                  className="duration-300 rotate-45 outline-none cursor-pointer group hover:-rotate-45"
                  onClick={() => setIsDrawerVisible(!isDrawerVisible)}
                  type="button"
                  data-drawer-hide="drawer-navigation"
                  aria-controls="drawer-navigation"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="50px"
                     height="50px"
                     viewBox="0 0 24 24"
                     className="duration-300 stroke-zinc-400 fill-none group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0"
                  >
                     <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        strokeWidth="1.5"
                     />
                     <path d="M8 12H16" strokeWidth="1.5" />
                     <path d="M12 16V8" strokeWidth="1.5" />
                  </svg>
                  <span className="sr-only">close icon</span>
               </button>
            </div>
            <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
            <div className="py-4 overflow-y-auto">
               <ul className="space-y-2 font-medium">
                  <li>
                     <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                     >
                        <svg
                           className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 22 21"
                        >
                           <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                           <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                        </svg>
                        <span className="ms-3">Dashboard</span>
                     </a>
                  </li>
                  <li>
                     <button
                        type="button"
                        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                     >
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 18 21"
                        >
                           <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                        </svg>
                        <span className="flex-1 text-left ms-3 rtl:text-right whitespace-nowrap">
                           E-commerce
                        </span>
                        <svg
                           className="w-3 h-3"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 10 6"
                        >
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="m1 1 4 4 4-4"
                           />
                        </svg>
                     </button>
                     <ul id="dropdown-example" className="hidden py-2 space-y-2">
                        <li>
                           <a
                              href="#"
                              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                           >
                              Products
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                           >
                              Billing
                           </a>
                        </li>
                        <li>
                           <a
                              href="#"
                              className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                           >
                              Invoice
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                     >
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 20 20"
                        >
                           <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ms-3 dark:bg-blue-900 dark:text-blue-300">
                           3
                        </span>
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                     >
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="currentColor"
                           viewBox="0 0 18 20"
                        >
                           <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Products
                        </span>
                     </a>
                  </li>
                  <li>
                     <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                     >
                        <svg
                           className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 18 16"
                        >
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                           />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                           Sign In
                        </span>
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </>
   )
}
