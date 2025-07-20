import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/lib/cart-provider"
import type { WishlistItem } from "@/pages/WishlistPage"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "sonner"

export function WishlistCard({ item }: { item: WishlistItem }) {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false)
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    const cartItem: CartItem = {
      id: item.id.toString(),
      size: "s",
      color: "red",
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    }
    addItem(cartItem)
    toast.success(
      "Added to cart", {
      description: `${item.name} has been added to your cart.`,
    })
  }

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
    toast.success(
      isWishlisted ? "Removed from wishlist" : "Added to wishlist", {
      description: `${item.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <Card key={item.id} className="bg-primary border-border hover:shadow-lg transition-shadow">
      <Link to={`/product/${item.id}`}>
        <CardHeader className="p-4">
          <div className="relative">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors cursor-pointer" onClick={handleWishlist}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </button>
            <button className="absolute top-2 left-2 p-2 bg-white rounded-full shadow-md" onClick={handleWishlist}>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </button>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 pt-0">
        <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold">${item.price}</span>
          <Badge variant={item.inStock ? "secondary" : "outline"} className={`text-xs text-primary ${item.inStock ? "bg-success text-success" : "bg-destructive text-destructive"}`}>
            {item.inStock ? 'In Stock' : 'Out of Stock'}
          </Badge>
        </div>
        <Button
          disabled={!item.inStock}
          onClick={handleAddToCart}
          variant="outline"
          className="cursor-pointer w-full bg-inverse border-inverse text-inverse h-12 rounded-xl"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}
