import { Link } from "react-router-dom";
import { Dark_Light } from "../icons/Dark_Light";
import { SearchIcon } from "../icons/Search";
import { MenuModal } from "../modals/MenuModal";

export const NavBar = () => {


  return (
    <nav className="fixed top-0 z-50 flex flex-col items-center w-full md:top-4 md:px-4">
      <div className="flex items-center justify-between w-full p-2 bg-white shadow-sm rounded-b-2xl md:rounded-xl dark:bg-gray-900">
        <section className="flex items-center justify-between w-full h-auto md:justify-start md:gap-8">
          <div className="hidden md:block md:ml-4">
            <MenuModal />
          </div>
          <div className="items-center hidden md:flex">
            <img width={50} src="/logos/melon-shop-logo.png" alt="" />
            <img className="md:hidden xl:block" width={150} src="/logos/melon-shop-name.png" alt="" />
          </div>
          <div className="relative w-full md:w-[40%] px-3">
            <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-6">
              <SearchIcon />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg md:py-3 ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <button
            type="button"
            className="md:hidden mr-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <Dark_Light />
            <span className="sr-only">Toggle dark mode</span>
          </button>
        </section>
        <section className="items-center hidden pr-2 md:flex md:order-2 md:gap-4">
          <button type="button" className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <Dark_Light />
            <span className="sr-only">Toggle dark mode</span>
          </button>
          <Link to={"/login"} className="hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5 focus:outline-none focus:ring-4 focus:ring-gray-200">
            <img
              width="35"
              src={`https://img.icons8.com/fluency-systems-regular/50/ffffff/guest-male.png`}
              alt="guest-male"
            />
          </Link>
          <Link to={'/cart'} className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <img src="/icons/cart.png" alt="" />
          </Link>
        </section>
      </div>
    </nav>
  );
}