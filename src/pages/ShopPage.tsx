import { ProductFilters } from "@/components/features/shop/ProductFilters"
import { ProductGrid } from "@/components/features/shop/ProductGrid"

export default function ShopPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">Shop All Products</h1>
        <p className="text-slate-600 dark:text-slate-400">Discover our curated collection of premium products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-1/4">
          <ProductFilters />
        </aside>
        <div className="lg:w-3/4">
          <ProductGrid />
        </div>
      </div>
    </main>
  )
}
