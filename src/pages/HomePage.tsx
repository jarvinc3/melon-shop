import { BannerSlider } from "@/components/features/home/BannerSlider";
import { FeaturedCategories } from "@/components/features/home/FeaturedCategories";
import { NewsletterSignup } from "@/components/features/home/NewsletterSignup";
import { TestimonialsCarousel } from "@/components/features/home/TestimonialsCarousel";


export default function HomePage() {
   return (
      <main>
         <BannerSlider />
         <FeaturedCategories />
         <TestimonialsCarousel />
         <NewsletterSignup />
      </main>
   )
}
