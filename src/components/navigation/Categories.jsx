import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="border-b border-gray-300 dark:border-gray-700 mb-6">
      <div className="flex justify-center items-center w-full">
        <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
        <h2 className="dark:text-gray-300 text-gray-600  font-semibold text-lg">
          Categories
        </h2>
        <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
      </div>
      <ul className="flex flex-wrap justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <Link to={'/electronics'}>
          <li className="me-2 gap-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer">
            <img src="/electronics-icon.png" alt="" width={30} />
            Electronics
          </li>
        </Link>
        <Link to={'/jewelery'}>
          <li className="me-2 gap-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer">
            <img src="/jewelery-icon.png" alt="" width={30} />
            Jewelery
          </li>
        </Link>
        <Link to={"/men's clothing"}>
          <li className="me-2 gap-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer">
            <img src="/men-clothing-icon.png" alt="" width={30} />
            Men`s clothing
          </li>
        </Link>
        <Link to={"/women's clothing"}>
          <li className="me-2 gap-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer">
            <img src="/women-clothing-icon.png" alt="" width={30} />
            Women`s clothing
          </li>
        </Link>
      </ul>
    </div>
  );
}
