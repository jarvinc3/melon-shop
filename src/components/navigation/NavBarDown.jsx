import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import './navBarDown.css'

export default function NavBarDown({ toggleDark }) {
 const [navBar, setNavBar] = useState(false)

 const handleClick = () =>{
  setNavBar(!navBar)
 }

  return (
    <nav className={`bg-white border-gray-200 dark:bg-gray-900 shadow-md rounded-xl mx-3 max-w-screen-xl flex flex-wrap p-4 justify-between md:order-2 md:gap-4 ${navBar ? 'alto items-end' : 'items-end normal'}`}>
      <Link 
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <img src="/home-icon.png" alt="" />
      </Link>
      <button 
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        {toggleDark ? (
          <img
            width="30"
            src="https://img.icons8.com/fluency-systems-regular/48/000000/guest-male.png"
            alt="guest-male"
          />
        ) : (
          <img width="35" src="/light.png" alt="guest-male" />
        )}
      </button>
      <button 
      className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <img src="/cart.png" alt="" />
      </button>
      <button 
      onClick={handleClick}
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </nav>
  );
}

NavBarDown.propTypes = {
  toggleClick: PropTypes.func.isRequired,
  toggleDark: PropTypes.bool.isRequired,
};
