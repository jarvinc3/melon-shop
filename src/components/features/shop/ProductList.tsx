import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useProductById } from "@/hooks"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/types/cart.types"
import type { Product } from "@/types/product.types"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

interface ProductListProps {
   product: Product
}

export function ProductList({ product }: ProductListProps) {
   const [isWishlisted, setIsWishlisted] = useState<boolean>(false)
   const { addItem } = useCart()
   const { data: productDetails } = useProductById(product.id)

   const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()
      if (!productDetails) return;

      const cartItem: CartItem = {
         id: product.id.toString(),
         productId: product.id,
         size: productDetails.sizes[0] || "One Size",
         color: productDetails.colors[0] || "Default",
         name: product.name,
         price: product.price,
         image: product.image,
         quantity: 1,
         sku: productDetails.sku
      }
      addItem(cartItem)
   }

   const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()
      setIsWishlisted(!isWishlisted)
   }

   return (
      <Link to={`/product/${product.id}`}>
         <Card
            className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
         >
            <CardContent className="p-0 flex">
               <div className="relative overflow-hidden rounded-t-xl p-2">
                  <img
                     src={product.image || "/placeholder.svg"}
                     alt={product.name}
                     className="w-60 h-36 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                  />

                  {product.badge && (
                     <Badge className={`absolute top-3 left-3 ${product.badge === "Sale" ? "bg-red-500" : "bg-emerald-500"}`}>
                        {product.badge}
                     </Badge>
                  )}

                  <Button
                     variant="ghost"
                     size="icon"
                     className="absolute top-3 flex-1 right-3 bg-white/80 hover:bg-white shadow-md md:hidden"
                     onClick={handleWishlist}
                  >
                     <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-black"}`} />
                  </Button>
               </div>

               <div className="py-4 pl-2 pr-4 md:w-full flex flex-col md:gap-2">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-1">{product.name}</h3>

                  <div className="flex items-center mb-2">
                     <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                           <Star
                              key={i}
                              className={`h-4 w-4 ${i < product.rating ? "text-yellow-400 fill-current" : "text-slate-300"}`}
                           />
                        ))}
                     </div>
                     <span className="text-sm text-slate-600 dark:text-slate-400 ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                     <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">${product.price}</span>
                        {product.originalPrice && (
                           <span className="text-sm text-slate-500 line-through">${product.originalPrice}</span>
                        )}
                     </div>
                  </div>

                  <Button
                     className="flex-1 bg-emerald-600 w-full hover:bg-emerald-700 text-white"
                     onClick={handleAddToCart}
                  >
                     <ShoppingCart className="h-4 w-4 mr-2" />
                     Add to Cart
                  </Button>
               </div>
            </CardContent>
         </Card>
      </Link>
   )
}
