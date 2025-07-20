import { OffertsBanner } from "@/components/features/shop/OffertsBanner";
import { ProductFilters } from "@/components/features/shop/ProductFilters";
import { ProductGrid } from "@/components/features/shop/ProductGrid";
import MainLayout from "@/components/layout/MainLayout";
import { BannersWrapper } from "@/components/ui/data-wrapper";
import { useBanners } from "@/hooks";
import { useState } from "react";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    color: 'all',
    size: 'all',
  });

  const { data: banners, isLoading, isError } = useBanners();

  return (
    <MainLayout>
      <main className="px-5 sm:px-10 md:px-20 py-5 sm:py-2 container mx-auto">
        <BannersWrapper data={banners} isLoading={isLoading} isError={isError}>
          <OffertsBanner banners={banners || []} className="h-40" />
        </BannersWrapper>

        <ProductFilters viewMode={viewMode} setViewMode={setViewMode} filters={filters} setFilters={setFilters} />

        <ProductGrid viewMode={viewMode} />
      </main>
    </MainLayout >
  )
}
