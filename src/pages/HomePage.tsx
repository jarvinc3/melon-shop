import { BannerSlider } from "@/components/features/home/BannerSlider";
import { FeaturedCategories } from "@/components/features/home/FeaturedCategories";
import { NewsletterSignup } from "@/components/features/home/NewsletterSignup";
import { TestimonialsCarousel } from "@/components/features/home/TestimonialsCarousel";
import MainLayout from "@/components/layout/MainLayout";
import { BannersWrapper } from "@/components/ui/data-wrapper";
import { useBanners } from "@/hooks";

export default function HomePage() {
   const { data: banners, isLoading, isError } = useBanners()

   return (
      <MainLayout>
         <main className="px-5 sm:px-10 md:px-20 py-5 sm:py-2">
            <BannersWrapper data={banners} isLoading={isLoading} isError={isError}>
               <BannerSlider banners={banners || []} className="h-[50vh] md:h-[80vh]" />
            </BannersWrapper>
            <FeaturedCategories />
            <TestimonialsCarousel />
            <NewsletterSignup />
         </main>
      </MainLayout>
   );
}
