import { useState } from "react";
import ProductList from "../../components/product/ProductList";
import NavBar from "../../components/navigation/NavBar";
import NavBarDown from "../../components/navigation/NavBarDown";
import Oferts from "../../components/product/Oferts";

function Home() {
  const [toggleDark, setToggleDark] = useState(false);

  const toggleClick = () => {
    setToggleDark(!toggleDark);
  };

  return (
    <div
      className={
        toggleDark
          ? "bg-gray-200 pt-3 relative z-[2] transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-500 [&_p]:transition-all"
          : "dark bg-slate-800 pt-3 relative z-0 transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
      }
    >
      <div className="bg-gray-200 dark:bg-slate-800 fixed top-0 z-30 w-full transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
        <section className=" mt-4">
          <NavBar toggleClick={toggleClick} toggleDark={toggleDark} />
        </section>
      </div>
      <section className="mt-14 lg:px-20 p-8 py-10 mb-16 md:mb-0">
        <Oferts />
        <ProductList />
      </section>
      <section className="fixed bottom-0 z-20 w-full md:hidden">
        <NavBarDown toggleClick={toggleClick} toggleDark={toggleDark} />
      </section>
    </div>
  );
}

export default Home;
