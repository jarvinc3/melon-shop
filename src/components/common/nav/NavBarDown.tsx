import { Link } from "react-router-dom";
import { MenuModal } from "../modals/MenuModal";
import "/src/components/css/navBarDown.css";

export const NavBarDown = ({ toggleDark }: { toggleDark?: boolean }) => {
  return (
    <nav className="fixed z-50 w-full bottom-4 md:hidden">
      <section className="relative flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-3 bg-white border-gray-200 shadow-md dark:bg-gray-900 rounded-xl md:order-2 md:gap-4">
        <Link to={"/"} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          <img src="/icons/home-icon.png" alt="" />
        </Link>
        <Link to={"/login"}>
          <button className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            {toggleDark ? (
              <img
                width="30"
                src="https://img.icons8.com/fluency-systems-regular/48/000000/guest-male.png"
                alt="guest-male"
              />
            ) : (
              <img width="35" src="/icons/light.png" alt="guest-male" />
            )}
          </button>
        </Link>
        <button type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
          <img src="/icons/cart.png" alt="" />
          <span className="sr-only">cart</span>
        </button>
        <MenuModal />
      </section>
    </nav>
  );
}
