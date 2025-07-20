import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { mockTestimonials } from "@/data/testimonials";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function TestimonialsCarousel() {
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
    <section className="container mx-auto py-10 sm:py-16 sm:pt-24 bg-card rounded-2xl shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-xl text-secondary">Don't just take our word for it</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <section className="relative py-10 overflow-hidden rounded-2xl sm:px-10 shadow-lg bg-secondary min-h-72 md:h-60">
            <Carousel setApi={setApi} className="absolute inset-0 z-0 flex items-center" plugins={[plugin.current]}>
              <CarouselContent>
                {mockTestimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="relative w-full sm:px-10 cursor-grab min-h-60 md:h-50">
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-2xl text-secondary mb-8 italic">
                        "{testimonial.content}"
                      </blockquote>

                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full"
                        />
                        <div>
                          <div className="font-semibold text-primary">
                            {testimonial.name}
                          </div>
                          <div className="text-disabled">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </section>
          <div className="flex space-x-3 z-20 justify-center">
            {mockTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`size-3 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer
                    ${selectedIndex === index ? "border-2 border-border bg-primary/100 scale-125" : "bg-secondary border-transparent"}
                  `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
