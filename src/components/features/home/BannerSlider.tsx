import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const banners = [
  {
    id: 1,
    title: "Summer Collection 2024",
    subtitle: "Discover Premium Products",
    description:
      "Experience the perfect blend of style and comfort with our latest summer collection. Limited time offer!",
    image: "/placeholder.svg?height=600&width=800",
    ctaText: "Shop Now",
    ctaLink: "/shop?collection=summer",
    badge: "New Arrival",
    discount: "Up to 50% Off",
    bgGradient: "from-orange-400 via-pink-500 to-red-500",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Tech Innovation Hub",
    subtitle: "Smart Solutions for Modern Living",
    description:
      "Cutting-edge gadgets and smart devices that transform your daily routine. Free shipping on orders over $100.",
    image: "/placeholder.svg?height=600&width=800",
    ctaText: "Explore Tech",
    ctaLink: "/shop?category=electronics",
    badge: "Best Seller",
    discount: "Free Shipping",
    bgGradient: "from-blue-600 via-purple-600 to-indigo-700",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Eco-Friendly Living",
    subtitle: "Sustainable Products for a Better Tomorrow",
    description: "Join the green revolution with our eco-conscious product line. Every purchase plants a tree!",
    image: "/placeholder.svg?height=600&width=800",
    ctaText: "Go Green",
    ctaLink: "/shop?collection=eco-friendly",
    badge: "Eco Choice",
    discount: "Plant a Tree",
    bgGradient: "from-green-500 via-emerald-500 to-teal-600",
    textColor: "text-white",
  },
]

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentBanner = banners[currentSlide]

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${banner.bgGradient} opacity-90`}></div>
            <img src={banner.image || "/placeholder.svg"} alt={banner.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">{currentBanner.badge}</Badge>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${currentBanner.textColor} leading-tight`}>
                  {currentBanner.title}
                </h1>
                <h2 className={`text-xl md:text-2xl ${currentBanner.textColor} opacity-90`}>
                  {currentBanner.subtitle}
                </h2>
              </div>

              {/* Description */}
              <p className={`text-lg ${currentBanner.textColor} opacity-80 max-w-lg mx-auto lg:mx-0`}>
                {currentBanner.description}
              </p>

              {/* Discount Badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge className="bg-yellow-400 text-yellow-900 text-lg px-4 py-2">{currentBanner.discount}</Badge>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8">
                  <Link to={currentBanner.ctaLink}>
                    {currentBanner.ctaText}
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

            {/* Simple Featured Image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src={currentBanner.image || "/placeholder.svg"}
                  alt={currentBanner.title}
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      {/* Auto-play Control */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm z-20"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
      >
        {isAutoPlaying ? "Pause" : "Play"}
      </Button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / banners.length) * 100}%`,
          }}
        />
      </div>
    </section>
  )
}
