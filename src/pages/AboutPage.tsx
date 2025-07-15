import { AboutCTA } from "@/components/features/about/AboutCTA";
import { AboutHero } from "@/components/features/about/AboutHero";
import { AboutStory } from "@/components/features/about/AboutStory";
import { AboutValues } from "@/components/features/about/AboutValues";
import { TeamSection } from "@/components/features/about/TeamSection";

export default function AboutPage() {
   return (
      <main>
         <AboutHero />
         <AboutStory />
         <AboutValues />
         <TeamSection />
         <AboutCTA />
      </main>
   )
}
