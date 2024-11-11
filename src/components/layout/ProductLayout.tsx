import { useEffect, useState } from "react"
import Footer from "../common/footer/Footer"
import { NavBar } from "../common/nav/NavBar"
import { NavBarDown } from "../common/nav/NavBarDown"

interface Props {
   children?: React.ReactNode
   className?: string
}

export const ProductLayout = ({ children, className }: Props) => {
   const storedDarkMode = localStorage.getItem("darkMode");
   const [toggleDark, setToggleDark] = useState(storedDarkMode === "true");

   useEffect(() => {
      localStorage.setItem("darkMode", toggleDark.toString());
   }, [toggleDark]);

   const toggleClick = () => {
      setToggleDark(!toggleDark);
   };
   return (
      <div className="bg-slate-100 dark:bg-slate-800">
         <section className="z-50 flex flex-col items-center w-full md:fixed md:top-0 dark:bg-slate-800">
            <div className="flex items-center mt-5 md:hidden">
               <img width={70} src="/logos/melon-shop-logo.png" alt="" />
               <img width={170} src="/melon-shop-name.png" alt="" />
            </div>
            <section className="w-full md:mt-4">
               <NavBar toggleClick={toggleClick} toggleDark={toggleDark} />
            </section>
         </section>
         <div className={className}>
            {children}
         </div>
         <section className="fixed bottom-0 z-50 w-full md:hidden">
            <NavBarDown toggleClick={toggleClick} toggleDark={toggleDark} />
         </section>
         <section>
            <Footer />
         </section>
      </div>
   )
}
