import { ProductGallery } from "@/components/features/product/ProductGallery"
import { ProductInfo } from "@/components/features/product/ProductInfo"
import { ProductTabs } from "@/components/features/product/ProductTabs"
import { RelatedProducts } from "@/components/features/product/RelatedProducts"
import { useParams } from "react-router-dom"

export interface ProductsProps {
   productId: string
}

export default function ProductsPage() {
   const { id } = useParams<{ id: string }>()

   return (
      <main className="container mx-auto px-4 py-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ProductGallery productId={id || "1"} />
            <ProductInfo productId={id || "1"} />
         </div>

         <ProductTabs productId={id || "1"} />
         <RelatedProducts productId={id || "1"} />
      </main>
   )
}
