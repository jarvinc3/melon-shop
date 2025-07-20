import { ProductGallery } from "@/components/features/product/ProductGallery"
import { ProductInfo } from "@/components/features/product/ProductInfo"
import { RatingReviews } from "@/components/features/product/RatingReviews"
import { RelatedProducts } from "@/components/features/product/RelatedProducts"
import { Footer } from "@/components/layout/Footer"
import { NavLayout } from "@/components/layout/NavLayout"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/lib/cart-provider"
import { ShoppingBag, ShoppingCart } from "lucide-react"
import { Link, useNavigate, useParams } from "react-router-dom"

export interface ProductsProps {
   productId: string
}

const mockProduct = {
   id: 1,
   name: "Premium Wireless Headphones",
   price: 299,
   originalPrice: 399,
   rating: 4.8,
   reviews: 50,
   description:
      "Experience premium sound quality with our latest wireless headphones featuring active noise cancellation and 30-hour battery life.",
   features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium sound quality",
      "Comfortable fit",
      "Quick charge technology",
   ],
   sizes: ["Small", "Medium", "Large"],
   colors: ["Black", "White", "Silver", "Blue"],
   image: "/placeholder.svg?height=300&width=300",
}

export default function ProductPage() {
   const { id } = useParams<{ id: string }>()
   const { items, addItem } = useCart();
   const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
   const navigate = useNavigate()

   const handleAddToCart = () => {
      const cartItem: CartItem = {
         id: id || "1",
         size: "s",
         color: "red",
         name: mockProduct.name,
         price: mockProduct.price,
         image: "/placeholder.svg?height=300&width=300",
         quantity: 1,
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
               <ProductGallery productId={id || "1"} />
               <ProductInfo productId={id || "1"} product={mockProduct} />
            </div>

            <RatingReviews />
            <RelatedProducts productId={id || "1"} />
         </main>
         <Footer />
      </NavLayout>
   )
}
