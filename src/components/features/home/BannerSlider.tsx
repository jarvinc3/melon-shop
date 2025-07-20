import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import type { Banner } from "@/types/ui.types"
import Autoplay from "embla-carousel-autoplay"
import { ArrowRight, Play, SquareArrowOutUpRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export function BannerSlider({ banners, className }: { banners: Banner[], className?: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigate = useNavigate();

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
    <section className={cn("relative py-10 overflow-hidden rounded-2xl sm:px-10 shadow-2xl", className)}>
      <Carousel setApi={setApi} className="absolute inset-0 z-0 flex items-center" plugins={[plugin.current]}>
        <CarouselContent>
          {banners.map((banner, index) => (
            <CarouselItem key={index} className={cn("relative w-full sm:px-10", className)} onClick={() => navigate(banner.ctaLink || "")}>
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === selectedIndex ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient} opacity-70 sm:opacity-90`}></div>
                <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="container mx-auto relative z-10 h-full px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                <div className="lg:space-y-6 text-center lg:text-left flex flex-col justify-evenly h-full sm:h-auto sm:block">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm absolute top-4 left-4 sm:relative sm:top-0 sm:left-0">
                    {banner.badge}
                  </Badge>
                  <div className="space-y-4">
                    <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${banner.textColor} leading-tight`}>
                      {banner.title}
                    </h1>
                    <h2 className={`text-xl md:text-2xl ${banner.textColor} opacity-90`}>
                      {banner.subtitle}
                    </h2>
                  </div>
                  <p className={`hidden lg:block text-lg ${banner.textColor} opacity-80 max-w-lg mx-auto lg:mx-0`}>
                    {banner.description}
                  </p>
                  <Badge className="bg-yellow-400 text-yellow-900 sm:text-lg px-4 py-2 absolute bottom-3 right-3 sm:relative sm:bottom-0 sm:right-0">
                    {banner.discount}
                  </Badge>
                  <div className="hidden lg:flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8">
                      <Link to={banner.ctaLink || ""}>
                        {banner.ctaText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-8 bg-transparent"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Video
                    </Button>
                  </div>
                </div>

                <div className="hidden sm:block">
                  <div className="relative">
                    <img
                      src={banner.image}
                      alt={banner.title}
                      className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
                  </div>
                </div>
              </div>
              <Button size="icon" className="absolute sm:hidden block top-2 right-0 z-20 bg-transparent">
                <SquareArrowOutUpRight className="size-5" />
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute flex sm:bottom-8 bottom-4 left-1/2 transform -translate-x-1/2 space-x-3 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`size-2 sm:size-5 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer
                ${selectedIndex === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"}
              `}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
