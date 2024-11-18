import { Link } from "react-router-dom";
import { MenuModal } from "../modals/MenuModal";
import "/src/components/css/navBarDown.css";

export const NavBarDown = () => {
  return (
    <nav className="fixed bottom-0 z-50 flex items-center justify-around w-full bg-white shadow-2xl shadow-slate-900 md:hidden dark:bg-gray-900 rounded-t-3xl">
      <Link to={"/"} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <img src="/icons/home-icon.png" alt="" />
      </Link>
      <Link to={"/login"} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <img width="35" src="/icons/light.png" alt="guest-male" />
      </Link>
      <button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
        <img src="/icons/cart.png" alt="cart icon" />
      </button>
      <MenuModal />
    </nav>
  );
}
