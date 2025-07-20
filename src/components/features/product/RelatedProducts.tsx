import { ProductCard } from "@/components/features/shop/ProductCard"
import { DataWrapper } from "@/components/ui/data-wrapper"
import { useProducts } from "@/hooks"
import type { ProductsProps } from "@/pages/ProductPage"
import type { Product } from "@/types/product.types"

export function RelatedProducts({ productId }: ProductsProps) {
  const { data: productsData, isLoading, isError } = useProducts()
  
  const relatedProducts = productsData?.data 
    ? productsData.data.filter((product: Product) => product.id !== parseInt(productId)).slice(0, 4)
    : []
  
  return (
    <section className="mt-24">
      <div className="mb-8">
        <h2 className="sm:text-4xl text-3xl font-bold text-primary text-center mb-2">You Might Also Like</h2>
      </div>

      <DataWrapper 
        data={relatedProducts} 
        isLoading={isLoading} 
        isError={isError}
        loadingMessage="Loading related products..."
        errorMessage="Failed to load related products."
        emptyMessage="No related products found."
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </DataWrapper>
    </section>
  )
}
