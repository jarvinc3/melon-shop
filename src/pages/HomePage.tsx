import { BannerSlider } from "@/components/features/home/BannerSlider";
import { FeaturedCategories } from "@/components/features/home/FeaturedCategories";
import { NewsletterSignup } from "@/components/features/home/NewsletterSignup";
import { TestimonialsCarousel } from "@/components/features/home/TestimonialsCarousel";
import MainLayout from "@/components/layout/MainLayout";

export interface Banner {
   id?: number;
   title?: string;
   subtitle?: string;
   description?: string;
   image?: string;
   ctaText?: string;
   ctaLink?: string;
   badge?: string;
   discount?: string;
   bgGradient?: string;
   textColor?: string;
}

const banners = [
   {
      id: 1,
      title: "Summer Collection 2024",
      subtitle: "Discover Premium Products",
      description:
         "Experience the perfect blend of style and comfort with our latest summer collection. Limited time offer!",
      image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200",
      ctaText: "Shop Now",
      ctaLink: "/shop?collection=summer",
      badge: "New Arrival",
      discount: "Up to 50% Off",
      bgGradient: "from-orange-400 via-pink-500 to-red-500",
      textColor: "text-white",
   },
   {
      id: 2,
      title: "Tech Innovation Collection",
      subtitle: "Smart Solutions for Modern Living",
      description:
         "Cutting-edge gadgets and smart devices that transform your daily routine. Free shipping on orders over $100.",
      image: "/placeholder.svg?height=600&width=800",
      ctaText: "Explore Tech",
      ctaLink: "/shop?category=tech",
      badge: "Best Seller",
      discount: "Free Shipping",
      bgGradient: "from-blue-600 via-purple-600 to-indigo-700",
      textColor: "text-white",
   },
   {
      id: 3,
      title: "Eco-Friendly Collection",
      subtitle: "Sustainable Products for a Better Tomorrow",
      description:
         "Join the green revolution with our eco-conscious product line. Every purchase plants a tree!",
      image: "/placeholder.svg?height=600&width=800",
      ctaText: "Go Green",
      ctaLink: "/shop?collection=eco-friendly",
      badge: "Eco Choice",
      discount: "Plant a Tree",
      bgGradient: "from-green-500 via-emerald-500 to-teal-600",
      textColor: "text-white",
   },
]

export default function HomePage() {
   return (
      <MainLayout>
         <main className="px-5 sm:px-10 md:px-20 py-5 sm:py-2">
            <BannerSlider banners={banners} className="h-[50vh] md:h-[80vh]" />
            <FeaturedCategories />
            <TestimonialsCarousel />
            <NewsletterSignup />
         </main>
      </MainLayout>
   );
}
