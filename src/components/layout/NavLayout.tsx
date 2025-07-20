import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export interface NavLayoutProps {
   children: React.ReactNode;
   title: string;
   action?: React.ReactNode;
   bottomAction?: React.ReactNode;
}

export const NavLayout = ({ children, title, action, bottomAction }: NavLayoutProps) => {
   const [lastScrollY, setLastScrollY] = useState(0);
   const [showMobileBars, setShowMobileBars] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY;

         if (Math.abs(currentScrollY - lastScrollY) < 20) return;

         const goingDown = currentScrollY > lastScrollY;
         setShowMobileBars(!goingDown);

         setLastScrollY(currentScrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, [lastScrollY]);

   return (
      <div className="text-primary">
         <div className={cn("fixed -top-1 left-0 right-0 z-50 h-14 px-4 text-primary flex justify-between items-center transition-transform duration-300 bg-primary shadow-md py-8", showMobileBars ? "translate-y-1" : "-translate-y-full")}>
            <Button onClick={() => navigate(-1)} variant="ghost" size="icon" className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary size-10 shadow-md border border-border hover:shadow-lg transition-all duration-300">
               <ChevronLeft className="size-8" />
            </Button>
            <h1 className="text-2xl font-bold text-center">{title}</h1>
            <div className="flex items-center gap-2">
               {action}
            </div>
         </div>
         <div>{children}</div>
         {bottomAction &&
            <div className={cn("fixed sm:hidden bottom-1 left-0 right-0 z-50 h-16 p-2 mx-2 transition-transform duration-300 bg-primary shadow-md border-t border border-border bg-primary rounded-xl", showMobileBars ? "-translate-y-1" : "translate-y-full")}>
               {bottomAction}
            </div>
         }
      </div>
   )
}
