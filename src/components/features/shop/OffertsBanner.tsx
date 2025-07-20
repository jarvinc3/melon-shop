import { Badge } from "@/components/ui/badge";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import type { Banner } from "@/types/ui.types";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";


export function OffertsBanner({ banners, className }: { banners: Banner[], className?: string }) {
   const [api, setApi] = useState<CarouselApi>();
   const [selectedIndex, setSelectedIndex] = useState(0);

   useEffect(() => {
      if (!api) return
      api.on("select", () => {
         setSelectedIndex(api.selectedScrollSnap())
      })
   }, [api]);

   const plugin = useRef(
      Autoplay({ delay: 5000, stopOnFocusIn: true, stopOnInteraction: true })
   )

   return (
      <div className="relative flex flex-col gap-4">
         <section className={cn("relative py-10 overflow-hidden rounded-2xl sm:px-10 shadow-lg", className)}>
            <Carousel setApi={setApi} className="absolute inset-0 z-0 flex items-center" plugins={[plugin.current]}>
               <CarouselContent>
                  {banners.map((banner, index) => (
                     <CarouselItem key={index} className={cn("relative w-full sm:px-10 cursor-grab", className)}>
                        <div
                           key={banner.id}
                           className={`absolute inset-0 transition-opacity duration-1000 ${index === selectedIndex ? "opacity-100" : "opacity-0"
                              }`}
                        >
                           <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient} opacity-90`}></div>
                           <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-black/20"></div>
                        </div>

                        <div className="relative z-10 h-full container mx-auto px-4 grid grid-cols-2 gap-4 items-center">
                           <div className="lg:space-y-6 text-center flex flex-col justify-center">
                              <p className={`text-lg text-white opacity-80 max-w-lg mx-auto lg:mx-0`}>
                                 {banner.description}
                              </p>
                              <div className="flex justify-center">
                                 <Badge className="bg-yellow-400 text-yellow-900 text-lg px-4 py-2">
                                    {banner.discount}
                                 </Badge>
                              </div>
                           </div>
                           <div className="flex justify-center items-center">
                              <img
                                 src={banner.image || "/placeholder.svg"}
                                 alt={banner.title}
                                 className="size-32 object-cover rounded-3xl shadow-2xl"
                              />
                           </div>
                        </div>
                     </CarouselItem>
                  ))}
               </CarouselContent>
            </Carousel>
         </section>
         <div className="flex space-x-3 z-20 justify-center">
            {banners.map((_, index) => (
               <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`size-2 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer
                     ${selectedIndex === index ? "border-2 border-info bg-primary/100 scale-125" : "bg-secondary border-transparent"}
                  `}
               />
            ))}
         </div>
      </div>
   )
}
