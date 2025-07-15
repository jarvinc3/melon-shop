import type { CartItem } from "@/components/lib/cart-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import { Eye, Heart, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string | null
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const cartItem: CartItem = {
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    }
    addItem(cartItem)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <Link to={`/product/${product.id}`}>
      <Card
        className="group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          <div className="relative overflow-hidden rounded-t-xl">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {product.badge && (
              <Badge className={`absolute top-3 left-3 ${product.badge === "Sale" ? "bg-red-500" : "bg-emerald-500"}`}>
                {product.badge}
              </Badge>
            )}

            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-3 right-3 bg-white/80 hover:bg-white transition-all duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              onClick={handleWishlist}
            >
              <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
            </Button>

            <div
              className={`absolute inset-x-3 bottom-3 flex space-x-2 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <Button
                size="sm"
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="secondary" size="icon">
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
