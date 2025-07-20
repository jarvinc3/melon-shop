import { Button } from "@/components/ui/button"
import { ProductsWithPaginationWrapper } from "@/components/ui/data-wrapper"
import { useProducts } from "@/hooks/use-products"
import type { Product } from "@/types/product.types"
import { useEffect, useState } from "react"
import { ProductCard } from "./ProductCard"
import { ProductList } from "./ProductList"

export function ProductGrid({ viewMode }: { viewMode: 'grid' | 'list' }) {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading, error } = useProducts(currentPage, 8)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [currentPage])

  return (
    <ProductsWithPaginationWrapper data={data} isLoading={isLoading} isError={!!error}>
      {data && (
        <div className="space-y-6">
          {/* Product Grid */}
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {data.data.map((product: Product) => (
              viewMode === 'grid'
                ? <ProductCard key={product.id} product={product} />
                : <ProductList key={product.id} product={product} />
            ))}
          </div>

          <p className="text-disabled text-center">
            Showing {data.pagination.totalItems > 0 ? (currentPage - 1) * data.pagination.itemsPerPage + 1 : 0}-{Math.min(currentPage * data.pagination.itemsPerPage, data.pagination.totalItems)} of {data.pagination.totalItems}{" "}
            products
          </p>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </Button>

            {Array.from({ length: data.pagination.totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                onClick={() => setCurrentPage(i + 1)}
                className="w-10"
              >
                {i + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, data.pagination.totalPages))}
              disabled={currentPage === data.pagination.totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </ProductsWithPaginationWrapper>
  )
}
