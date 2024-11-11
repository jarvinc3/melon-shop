import Footer from "../common/footer/Footer";
import { NavBar } from "../common/nav/NavBar";
import { NavBarDown } from "../common/nav/NavBarDown";

interface Props {
   children?: React.ReactNode
   className?: string
}

export const MainLayout = ({ children, className }: Props) => {

   return (
      <div className="bg-slate-100 dark:bg-slate-800">
         <section>
            <NavBar />
         </section>
         <div className={className}>
            {children}
         </div>
         <section>
            <NavBarDown />
         </section>
         <section>
            <Footer />
         </section>
      </div>
   )
}
