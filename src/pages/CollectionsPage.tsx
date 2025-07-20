import { CollectionGrid } from "@/components/features/collections/CollectionGrid";
import { CollectionHero } from "@/components/features/collections/CollectionHero";
import MainLayout from "@/components/layout/MainLayout";

export default function CollectionsPage() {
  return (
    <MainLayout>
      <CollectionHero />
      <CollectionGrid />
    </MainLayout>
  )
}
