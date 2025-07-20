import { AboutCTA } from "@/components/features/about/AboutCTA";
import { AboutHero } from "@/components/features/about/AboutHero";
import { AboutValues } from "@/components/features/about/AboutValues";
import { TeamSection } from "@/components/features/about/TeamSection";
import MainLayout from "@/components/layout/MainLayout";

export default function AboutPage() {
   return (
      <MainLayout>
         <main>
            <AboutHero />
            <AboutValues />
            <TeamSection />
            <AboutCTA />
         </main>
      </MainLayout>
   )
}
