import { LoginForm } from "@/components/features/auth/LoginForm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
   const navigate = useNavigate();
   return (
      <div className="grid min-h-svh lg:grid-cols-2">
         <div className="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-start">
               <Button onClick={() => navigate("/")} variant="ghost" size="icon" className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary size-10 shadow-md border border-border hover:shadow-lg transition-all duration-300">
                  <ChevronLeft className="size-8" />
               </Button>
            </div>
            <div className="flex flex-1 items-center justify-center">
               <div className="w-full max-w-xs">
                  <LoginForm />
               </div>
            </div>
         </div>
         <div className="bg-muted relative hidden lg:block">
            <img
               src="/shop-presentation.png"
               alt="Image"
               className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
         </div>
      </div>
   )
}
