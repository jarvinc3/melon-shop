import { ProductGallery } from "@/components/features/product/ProductGallery"
import { ProductInfo } from "@/components/features/product/ProductInfo"
import { RatingReviews } from "@/components/features/product/RatingReviews"
import { RelatedProducts } from "@/components/features/product/RelatedProducts"
import { Footer } from "@/components/layout/Footer"
import { NavLayout } from "@/components/layout/NavLayout"
import { Button } from "@/components/ui/button"
import { ProductWrapper } from "@/components/ui/data-wrapper"
import { useProductById } from "@/hooks"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/lib"
import { ShoppingBag, ShoppingCart } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom"

export interface ProductsProps {
   productId: string
}

export default function ProductPage() {
   const { id } = useParams<{ id: string }>()
   const productId = parseInt(id || "1")
   const { data: product, isLoading, isError } = useProductById(productId)
   const { items, addItem } = useCart();
   const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
   const navigate = useNavigate()

   const handleAddToCart = () => {
      if (!product) return;

      const cartItem: CartItem = {
         id: product.id.toString(),
         productId: product.id,
         size: product.sizes[0] || "One Size",
         color: product.colors[0] || "Default",
         name: product.name,
         price: product.price,
         image: product.image,
         quantity: 1,
         sku: product.sku
      }
      addItem(cartItem)
   }

   return (
      <NavLayout title="Product Details"
         action={
            <Link to="/cart" className="flex relative items-center gap-2 rounded-lg bg-primary p-2 shadow-md border border-border hover:shadow-lg transition-all duration-300">
               <ShoppingBag className="size-8" />
               {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                     {itemCount}
                  </span>
               )}
            </Link>
         }
         bottomAction={
            <div className="flex space-x-4 w-full justify-center">
               <Button onClick={handleAddToCart} className="flex-1 bg-background text-primary border border-border rounded-full h-12" size="lg">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
               </Button>

               <Button variant="outline" onClick={() => navigate("/checkout")} className="flex-1 bg-inverse text-inverse border border-border rounded-full h-12" size="lg">
                  Buy Now
               </Button>
            </div>
         }
      >
         <main className="container mx-auto px-4 py-8 mt-14">
            <ProductWrapper data={product} isLoading={isLoading} isError={isError}>
               {product && (
                  <>
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <ProductGallery productId={id || "1"} />
                        <ProductInfo productId={id || "1"} product={product} />
                     </div>

                     <RatingReviews />
                     <RelatedProducts productId={id || "1"} />
                  </>
               )}
            </ProductWrapper>
         </main>
         <Footer />
      </NavLayout>
   )
}
