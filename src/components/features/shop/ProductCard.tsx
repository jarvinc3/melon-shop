import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useProductById } from "@/hooks"
import { useCartStore, useWishlistStore } from "@/lib"
import type { CartItem } from "@/types/cart.types"
import type { Product } from "@/types/product.types"
import { Eye, Heart, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { addItem } = useCartStore()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlistStore()
  const { data: productDetails } = useProductById(product.id)
  const isWishlisted = isInWishlist(product.id)

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
    if (isWishlisted) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        inStock: product.inStock,
        product: {
          rating: product.rating,
          reviews: product.reviews,
          badge: product.badge || undefined,
          originalPrice: product.originalPrice
        }
      })
      toast.success("Added to wishlist", {
        description: `${product.name} has been added to your wishlist.`,
      })
    }
  }

  return (
    <Link to={`/product/${product.id}`}>
      <Card
        className="group cursor-pointer rounded-t-2xl border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden p-2">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-40 sm:h-64 rounded-t-xl object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {product.badge && (
              <Badge className={`absolute top-3 left-3 ${product.badge === "Sale" ? "bg-red-500" : "bg-emerald-500"}`}>
                {product.badge}
              </Badge>
            )}

            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-3 right-3 bg-white/80 hover:bg-white shadow-md transition-all duration-300 ${isHovered ? "opacity-100" : " md:opacity-0"
                }`}
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-black"}`} />
            </Button>

            <Button
              className="absolute bottom-3 right-3 bg-emerald-600 hover:bg-emerald-700 text-white md:hidden block size-10"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
            </Button>

            <div
              className={`absolute inset-x-3 bottom-3 flex space-x-2 transition-all duration-300 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
            >
              <Button
                size="sm"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white hidden md:flex py-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="secondary" size="icon" className="hidden md:flex flex-0.5">
                <Eye className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2 line-clamp-2">{product.name}</h3>

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
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
