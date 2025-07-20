import { OffertsBanner } from "@/components/features/shop/OffertsBanner";
import { ProductFilters } from "@/components/features/shop/ProductFilters";
import { ProductGrid } from "@/components/features/shop/ProductGrid";
import MainLayout from "@/components/layout/MainLayout";
import { useState } from "react";


const offers = [
  {
    id: 1,
    discount: "50% Off",
    description: "Flat 50% discount on your first order.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200",
    bgGradient: "from-blue-600 via-purple-600 to-indigo-700",
  },
  {
    id: 2,
    discount: "10% Off",
    description: "Flat 10% discount on your first order.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200",
    bgGradient: "from-green-600 via-green-600 to-indigo-700",
  },
  {
    id: 3,
    discount: "20% Off",
    description: "Flat 20% discount on your first order.",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=200",
    bgGradient: "from-red-600 via-yellow-600 to-indigo-700",
  },
]


export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    color: 'all',
    size: 'all',
  });

  return (
    <MainLayout>
      <main className="px-5 sm:px-10 md:px-20 py-5 sm:py-2 container mx-auto">
        <OffertsBanner banners={offers} className="h-40" />

        <ProductFilters viewMode={viewMode} setViewMode={setViewMode} filters={filters} setFilters={setFilters} />

        <ProductGrid viewMode={viewMode} />
      </main>
    </MainLayout >
  )
}
