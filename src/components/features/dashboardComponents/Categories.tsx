import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="mb-6">
      <ul className="flex flex-wrap justify-between text-sm font-medium text-center text-gray-500 md:hidden dark:text-gray-400">
        <Link to={"/electronics"}>
          <li className="inline-flex items-center justify-center gap-2 p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer me-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <img src="/icons/electronics-icon.png" alt="" width={30} />
            Electronics
          </li>
        </Link>
        <Link to={"/jewelery"}>
          <li className="inline-flex items-center justify-center gap-2 p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer me-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <img src="/icons/jewelery-icon.png" alt="" width={30} />
            Jewelery
          </li>
        </Link>
        <Link to={"/men's clothing"}>
          <li className="inline-flex items-center justify-center gap-2 p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer me-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <img src="/icons/men-clothing-icon.png" alt="" width={30} />
            Men`s clothing
          </li>
        </Link>
        <Link to={"/women's clothing"}>
          <li className="inline-flex items-center justify-center gap-2 p-4 border-b-2 border-transparent rounded-t-lg cursor-pointer me-2 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <img src="/icons/women-clothing-icon.png" alt="" width={30} />
            Women`s clothing
          </li>
        </Link>
      </ul>
      <div className="bg-white rounded-xl dark:bg-gray-900 dark:text-gray-100 md:block">
        <div className="container p-4 mx-auto my-3 lg:px-8 lg:py-14 xl:max-w-7xl">
          <div className="grid grid-cols-4 gap-4">
            <Link to={'/products'}>
              <a
                href="#"
                className="relative block overflow-hidden transition ease-out group active:opacity-75"
              >
                <img
                  src="/images/all-products.png"
                  width={500}
                  alt="Product Image"
                  className="transition ease-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                <div className="absolute inset-0 items-center justify-center hidden p-4 md:flex">
                  <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    All
                  </div>
                </div>
              </a> 
            </Link>
            <Link to={'/electronics'}>
              <a
                href="#"
                className="relative block overflow-hidden transition ease-out group active:opacity-75"
              >
                <img
                  src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg"
                  alt="Product Image"
                  className="transition ease-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                <div className="absolute inset-0 items-center justify-center hidden p-4 md:flex">
                  <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    Electronics
                  </div>
                </div>
              </a>
            </Link>
            <Link to={'/clothes'}>
              <a
                href="#"
                className="relative block overflow-hidden transition ease-out group active:opacity-75"
              >
                <img
                  src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg"
                  alt="Product Image"
                  className="transition ease-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                <div className="absolute inset-0 items-center justify-center hidden p-4 md:flex">
                  <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                    Clothes
                  </div>
                </div>
              </a>
            </Link>
            <Link to={'/jewelery'}>
              <a
                href="#"
                className="relative block overflow-hidden transition ease-out group active:opacity-75 sm:col-span-2 md:col-span-1"
              >
                <img
                  src="/images/jewelery.webp"
                  alt="Product Image"
                  className="transition ease-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 transition ease-out bg-black bg-opacity-25 group-hover:bg-opacity-0" />
                <div className="absolute inset-0 items-center justify-center hidden p-4 md:flex">
                  <div className="px-4 py-3 text-sm font-semibold tracking-wide uppercase transition ease-out bg-white rounded-3xl bg-opacity-95 group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
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
