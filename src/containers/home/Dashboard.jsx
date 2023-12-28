import { useState, useEffect } from "react";
import NavBar from "../../components/navigation/NavBar";
import NavBarDown from "../../components/navigation/NavBarDown";
import Oferts from "../../components/homeComponents/Oferts";
import Categories from "../../components/homeComponents/Categories";
import Products from "./Products";
import Span from "../../components/homeComponents/Span";
import Footer from "../../components/footer/Footer";

function App() {
  // Lee el estado del localStorage al cargar el componente
  const storedDarkMode = localStorage.getItem("darkMode");
  const [toggleDark, setToggleDark] = useState(storedDarkMode === "true");

  // Guarda el estado en el localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("darkMode", toggleDark.toString());
  }, [toggleDark]);

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
      <div className="flex flex-col items-center bg-gray-200 dark:bg-slate-800 fixed top-0 z-30 w-full transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
        <div className="mt-5 flex md:hidden items-center">
          <img width={70} src="/melon-shop-logo.png" alt="" />
          <img width={170} src="/melon-shop-name.png" alt="" />
        </div>
        <section className="w-full mt-4">
          <NavBar toggleClick={toggleClick} toggleDark={toggleDark} />
        </section>
      </div>
      <section className="md:mt-20 mt-28 lg:px-20 p-8 py-10 mb-16 md:mb-0">
        <div className="flex justify-center items-center w-full mb-2">
          <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
          <h2 className="dark:text-gray-300 text-gray-600  font-semibold text-lg">
            Oferts
          </h2>
          <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
        </div>
        <Oferts />
        <Categories />
        <Span />
      </section>
      <section className="fixed bottom-0 z-20 w-full md:hidden">
        <NavBarDown toggleClick={toggleClick} toggleDark={toggleDark} />
      </section>
      <div className="hidden">
        <Products toggleClick={toggleClick} toggleDark={toggleDark} />
      </div>
      <Footer/>
    </div>
  );
}

export default App;



// import { useState, useEffect } from "react";
// import NavBar from "../../components/navigation/NavBar";
// import NavBarDown from "../../components/navigation/NavBarDown";
// import Oferts from "../../components/homeComponents/Oferts";
// import Categories from "../../components/homeComponents/Categories";
// import Products from "./Products";
// import Span from "../../components/homeComponents/Span";
// import Footer from "../../components/footer/Footer";
// import Welcome from "../../components/welcome/Welcome";

// function App() {
//   // Lee el estado del localStorage al cargar el componente
//   const storedDarkMode = localStorage.getItem("darkMode");
//   const [toggleDark, setToggleDark] = useState(storedDarkMode === "true");

//   // Guarda el estado en el localStorage cada vez que cambia
//   useEffect(() => {
//     localStorage.setItem("darkMode", toggleDark.toString());
//   }, [toggleDark]);

//   const toggleClick = () => {
//     setToggleDark(!toggleDark);
//   };

//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Welcome />
//       ) : (
//         <div
//           className={
//             toggleDark
//               ? "bg-gray-200 pt-3 relative z-[2] transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-500 [&_p]:transition-all"
//               : "dark bg-slate-800 pt-3 relative z-0 transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
//           }
//         >
//           <div className="flex flex-col items-center bg-gray-200 dark:bg-slate-800 fixed top-0 z-30 w-full transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all">
//             <div className="mt-5 flex md:hidden items-center">
//               <img width={70} src="/melon-shop-logo.png" alt="" />
//               <img width={170} src="/melon-shop-name.png" alt="" />
//             </div>
//             <section className="w-full mt-4">
//               <NavBar toggleClick={toggleClick} toggleDark={toggleDark} />
//             </section>
//           </div>
//           <section className="md:mt-20 mt-28 lg:px-20 p-8 py-10 mb-16 md:mb-0">
//             <div className="flex justify-center items-center w-full mb-2">
//               <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
//               <h2 className="dark:text-gray-300 text-gray-600  font-semibold text-lg">
//                 Oferts
//               </h2>
//               <div className="border-b border-gray-300 dark:border-gray-700 h-[0.5px] w-full"></div>
//             </div>
//             <Oferts />
//             <Categories />
//             <Span />
//           </section>
//           <section className="fixed bottom-0 z-20 w-full md:hidden">
//             <NavBarDown toggleClick={toggleClick} toggleDark={toggleDark} />
//           </section>
//           <div className="hidden">
//             <Products toggleClick={toggleClick} toggleDark={toggleDark} />
//           </div>
//           <Footer />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
