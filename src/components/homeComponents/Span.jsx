import { Link } from "react-router-dom";
import "./span.css";

export default function Span() {
  return (
    <div className="span border-b border-gray-300 dark:border-gray-700 pb-6 w-full">
      <section className="bg-white dark:bg-slate-900 rounded-3xl flex flex-col items-center justify-around px-6 pb-6">
        <div className="w-full flex flex-col md:gap-4">
          <h2 className="text-[#abd373] text-[28px] font-bold text-left">
            Best seller
          </h2>
          <p className="dark:text-gray-100 text-lg">
            Get discounts on popular items
          </p>
        </div>
        <div className="bg-[#e5e7eb] dark:bg-[#1e293b] flex flex-col gap-14 p-4 rounded-2xl">
          <section>
            <div className="relative">
              <img className="rounded-xl" src="/audifono.jpg" alt="" />
              <img
                className="absolute bottom-[-60px] right-0"
                width={90}
                src="/discount.png"
                alt=""
              />
            </div>
            <div className="flex justify-center gap-3">
              <p className="text-red-600 font-semibold">$35.65</p>
              <p className="line-through text-gray-500">$52.95</p>
            </div>
          </section>
          <div className="flex gap-4">
            <section>
              <img className="rounded-xl" src="/audifono.jpg" alt="" />
              <div className="flex justify-center gap-3">
                <p className="text-red-600 font-semibold">$35.65</p>
                <p className="line-through text-gray-500">$52.95</p>
              </div>
            </section>
            <section>
              <img className="rounded-xl" src="/audifono.jpg" alt="" />
              <div className="flex justify-center gap-3">
                <p className="text-red-600 font-semibold">$35.65</p>
                <p className="line-through text-gray-500">$52.95</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <section className="flex md:flex-col gap-10 md:justify-between justify-center w-full">
        <div className="hidden md:flex flex-col items-center justify-center md:gap-5 bg-white md:py-5 md:px-0 px-8 rounded-3xl dark:bg-slate-900">
          <section className="flex lg:gap-6 gap-1">
            <Link to={"/singup"}>
              <button className="transition duration-500 hover:scale-105 px-5 py-2 bg-gray-950 dark:bg-slate-100 hover:bg-slate-700 hover:dark:shadow-lg dark:hover:bg-white hover:shadow-lg dark:shadow-gray-100 text-white dark:text-gray-900 rounded-full font-semibold">
                Register
              </button>
            </Link>
            <Link to={'/login'}>
              <button className="transition duration-500 hover:scale-105 px-5 py-2 border-black dark:border-gray-200 border rounded-full font-semibold dark:text-gray-100 dark:shadow-lg hover:dark:shadow-gray-700 hover:dark:bg-slate-800">
                Sing in
              </button>
            </Link>
          </section>
          <p className="text-sm dark:text-gray-100">Or continue with</p>
          <div className="flex gap-8">
            <img width={40} src="/facebook.png" alt="" />
            <img width={40} src="/google.png" alt="" />
            <img width={40} src="/apple.png" alt="" className="dark:hidden" />
            <img
              width={35}
              src="/white-apple.png"
              className="hidden dark:block"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:gap-5 bg-[#f1dfd2] dark:bg-[#e4af89] md:pt-5 md:px-0 px-8 rounded-3xl">
          <h2 className="text-[#abd373] dark:text-[#587432] text-[28px] font-bold text-left">
            Welcome deal
          </h2>
          <p className="text-lg">Your exclusive price</p>
          <div
            id="default-carousel"
            className="relative w-full"
            data-carousel="slide"
          >
            {/* Carousel wrapper */}
            <div className="relative md:h-80 h-64 overflow-hidden rounded-lg">
              {/* Item 1 */}
              <div
                className="hidden duration-700 ease-in-out flex flex-col items-center"
                data-carousel-item=""
              >
                <img src="/audifono.jpg" alt="" />
                <div className="flex justify-center gap-3">
                  <p className="text-red-600 font-semibold">$35.65</p>
                  <p className="line-through text-gray-500">$52.95</p>
                </div>
              </div>
              {/* Item 2 */}
              <div
                className="hidden duration-700 ease-in-out flex flex-col items-center"
                data-carousel-item=""
              >
                <img src="/audifono.jpg" alt="" />
                <div className="flex justify-center gap-3">
                  <p className="text-red-600 font-semibold">$35.65</p>
                  <p className="line-through text-gray-500">$52.95</p>
                </div>
              </div>
              {/* Item 3 */}
              <div
                className="hidden duration-700 ease-in-out flex flex-col items-center"
                data-carousel-item=""
              >
                <img src="/audifono.jpg" alt="" />
                <div className="flex justify-center gap-3">
                  <p className="text-red-600 font-semibold">$35.65</p>
                  <p className="line-through text-gray-500">$52.95</p>
                </div>
              </div>
              {/* Item 4 */}
              <div
                className="hidden duration-700 ease-in-out flex flex-col items-center"
                data-carousel-item=""
              >
                <img src="/audifono.jpg" alt="" />
                <div className="flex justify-center gap-3">
                  <p className="text-red-600 font-semibold">$35.65</p>
                  <p className="line-through text-gray-500">$52.95</p>
                </div>
              </div>
              {/* Item 5 */}
              <div
                className="hidden duration-700 ease-in-out flex flex-col items-center"
                data-carousel-item=""
              >
                <img src="/audifono.jpg" alt="" />
                <div className="flex justify-center gap-3 md:pt-3">
                  <p className="text-red-600 font-semibold">$35.65</p>
                  <p className="line-through text-gray-500">$52.95</p>
                </div>
              </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to={0}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to={1}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to={2}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to={3}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to={4}
              />
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-slate-900 rounded-3xl">
        <div>
          <section></section>
          <section></section>
          <section></section>
        </div>
        <div>
          <div>
            <h2></h2>
            <p></p>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
