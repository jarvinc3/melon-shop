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
      <ul className="md:hidden flex flex-wrap justify-between text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <Link to={"/electronics"}>
          <li className="me-2 gap-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group cursor-pointer">
            <img src="/electronics-icon.png" alt="" width={30} />
            Electronics
          </li>
        </Link>
        <Link to={"/jewelery"}>
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
      <div className="bg-white rounded-xl dark:bg-gray-900 dark:text-gray-100 hidden md:block">
        <div className="container mx-auto p-4 my-3 lg:px-8 lg:py-14 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Link to={'/all products'}>
              <a
                href="#"
                className="group relative block overflow-hidden transition ease-out active:opacity-75"
              >
                <img
                  src="/all-products.png"
                  width={500}
                  alt="Product Image"
                  className="transform transition ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    All
                  </div>
                </div>
              </a>
            </Link>
            <Link to={'/electronics'}>
              <a
                href="#"
                className="group relative block overflow-hidden transition ease-out active:opacity-75"
              >
                <img
                  src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                  alt="Product Image"
                  className="transform transition ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    Electronics
                  </div>
                </div>
              </a>
            </Link>
            <Link to={'/clothes'}>
              <a
                href="#"
                className="group relative block overflow-hidden transition ease-out active:opacity-75"
              >
                <img
                  src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                  alt="Product Image"
                  className="transform transition ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    Clothes
                  </div>
                </div>
              </a>
            </Link>
            <Link to={'jewelery'}>
              <a
                href="#"
                className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
              >
                <img
                  src="/jewelery.webp"
                  alt="Product Image"
                  className="transform transition ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="rounded-3xl bg-white bg-opacity-95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    Jewelery
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
