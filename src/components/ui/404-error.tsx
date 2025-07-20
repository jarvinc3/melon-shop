import { Button } from "@/components/ui/button"
import { Home, Search, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function NotFound() {
   const [isFloating, setIsFloating] = useState(false)
   const [clickCount, setClickCount] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setIsFloating((prev) => !prev)
      }, 2000)
      return () => clearInterval(interval)
   }, [])

   const handleNumberClick = () => {
      setClickCount((prev) => prev + 1)
   }

   const messages = [
      "Oops! This page went on vacation 🏖️",
      "Oops! Looks like you got lost in cyberspace 🚀",
      "Wow! This page is playing hide and seek 🙈",
      "Yikes! This page moved out without notice 📦",
      "Ouch! Page not found, but your curiosity is! 🔍",
   ]

   const currentMessage = messages[clickCount % messages.length]

   return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
         <div className="text-center space-y-8 max-w-md mx-auto">
            {/* Animated 404 */}
            <div className="relative">
               <div
                  className={`text-8xl md:text-9xl font-bold text-muted  transition-transform duration-1000 cursor-pointer select-none ${isFloating ? "transform -translate-y-2" : "transform translate-y-0"
                     }`}
                  onClick={handleNumberClick}
               >
                  4
                  <span className="text-disabled inline-block transform hover:rotate-12 transition-transform duration-300">
                     0
                  </span>
                  4
               </div>

               {/* Floating elements */}
               <div className="absolute -top-4 -right-4">
                  <Zap
                     className={`w-6 h-6 text-yellow-400 transition-all duration-1000 ${isFloating ? "transform rotate-12 scale-110" : "transform rotate-0 scale-100"
                        }`}
                  />
               </div>

               <div className="absolute -bottom-2 -left-4">
                  <Search
                     className={`w-5 h-5 text-blue-400 transition-all duration-1000 ${isFloating ? "transform -rotate-12 scale-90" : "transform rotate-0 scale-100"
                        }`}
                  />
               </div>
            </div>

            {/* Dynamic message */}
            <div className="space-y-4">
               <h1 className="text-2xl md:text-3xl font-semibold text-secondary transition-all duration-500">
                  {currentMessage}
               </h1>

               <p className="text-muted leading-relaxed">
                  The page you're looking for doesn't exist, but don't worry,
                  <br className="hidden sm:block" />
                  there are plenty of other awesome things to discover!
               </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-primary">
               <Button asChild className="group" variant="outline">
                  <Link to="/">
                     <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                     Back to Home
                  </Link>
               </Button>
            </div>

            {/* Fun interaction hint */}
            {clickCount === 0 && (
               <p className="text-xs text-slate-400 animate-pulse">💡 Psst... click the "0" in the middle</p>
            )}

            {clickCount > 0 && (
               <p className="text-xs text-slate-400">
                  🎉 You've clicked {clickCount} {clickCount === 1 ? "time" : "times"}!
               </p>
            )}
         </div>
      </div>
   )
}
