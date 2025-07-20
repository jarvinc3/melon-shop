import { Badge } from "@/components/ui/badge"
import type { Product } from "@/types/product.types"
import { Star } from "lucide-react"
import { ProductDetails } from "./ProductDetails"
import { ProductQuantity } from "./ProductQuantity"

interface ProductInfoProps {
  productId: string
  product: Product
}

export function ProductInfo({ productId, product }: ProductInfoProps) {


  return (
    <div className="space-y-6 text-primary">
      <div>
        <Badge className="mb-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
          New Arrival
        </Badge>
        <h1 className="text-3xl font-bold text-primary mb-2">{product.name}</h1>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                  }`}
              />
            ))}
            <span className="ml-2 text-slate-600 dark:text-slate-400">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-primary">${product.price}</span>
          {product.originalPrice && (
            <>
              <span className="text-xl text-slate-500 line-through">${product.originalPrice}</span>
              <Badge variant="destructive">Save ${product.originalPrice - product.price}</Badge>
            </>
          )}
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{product.description}</p>

      <ProductQuantity productId={productId} product={product} />

      <div className="border-t pt-6">
        <ProductDetails product={product} />
      </div>
    </div >
  )
}
