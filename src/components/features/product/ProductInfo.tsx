import type { CartItem } from "@/components/lib/cart-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import { useState } from "react"

const mockProduct = {
  name: "Premium Wireless Headphones",
  price: 299,
  originalPrice: 399,
  rating: 4.8,
  reviews: 124,
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
}

interface ProductInfoProps {
  productId: string
}

export function ProductInfo({ productId }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: productId,
      name: mockProduct.name,
      price: mockProduct.price,
      image: "/placeholder.svg?height=300&width=300",
      quantity,
    }
    addItem(cartItem)
    toast({
      title: "Added to cart",
      description: `${mockProduct.name} has been added to your cart.`,
    })
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${mockProduct.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <Badge className="mb-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
          New Arrival
        </Badge>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">{mockProduct.name}</h1>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`h-5 w-5 ${
                  i < Math.floor(mockProduct.rating) ? "text-yellow-400 fill-current" : "text-slate-300"
                }`}
              />
            ))}
            <span className="ml-2 text-slate-600 dark:text-slate-400">
              {mockProduct.rating} ({mockProduct.reviews} reviews)
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-slate-900 dark:text-slate-100">${mockProduct.price}</span>
          <span className="text-xl text-slate-500 line-through">${mockProduct.originalPrice}</span>
          <Badge variant="destructive">Save ${mockProduct.originalPrice - mockProduct.price}</Badge>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{mockProduct.description}</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Size</label>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {mockProduct.sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Color</label>
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger>
              <SelectValue placeholder="Select color" />
            </SelectTrigger>
            <SelectContent>
              {mockProduct.colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-900 dark:text-slate-100 mb-2">Quantity</label>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
        <Button onClick={handleAddToCart} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white" size="lg">
          <ShoppingCart className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleWishlist}
          className={isWishlisted ? "text-red-500 border-red-500" : ""}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
        </Button>
        <Button variant="outline" size="lg">
          <Share2 className="h-5 w-5" />
        </Button>
      </div>

      <div className="border-t pt-6">
        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Key Features</h3>
        <ul className="space-y-2">
          {mockProduct.features.map((feature, index) => (
            <li key={index} className="flex items-center text-slate-600 dark:text-slate-400">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
