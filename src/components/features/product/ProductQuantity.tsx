import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/hooks/use-cart"
import type { CartItem } from "@/lib/cart-provider"
import { Heart, Minus, Plus, Share2, ShoppingCart } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import type { Product } from "../shop/ProductCard"

const colorOptions = ['#FF0000', '#0000FF', '#00FF00'];
const sizeOptions = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

export const ProductQuantity = ({ productId, product }: { productId: string, product: Product }) => {
   const [filters, setFilters] = useState({
      color: "all",
      size: "all",
   })
   const [quantity, setQuantity] = useState(1)
   const [isWishlisted, setIsWishlisted] = useState(false)

   const { addItem } = useCart()

   const handleAddToCart = () => {
      const cartItem: CartItem = {
         id: productId,
         size: "s",
         color: "red",
         name: product.name,
         price: product.price,
         image: "/placeholder.svg?height=300&width=300",
         quantity,
      }
      addItem(cartItem)
      toast.success(
         "Added to cart", {
         description: `${product.name} has been added to your cart.`,
      })
   }

   const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()
      setIsWishlisted(!isWishlisted)
      toast.success(
         isWishlisted ? "Removed from wishlist" : "Added to wishlist", {
         description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
      })
   }

   const handleFilterChange = (type: keyof typeof filters, value: string) => {
      setFilters(prev => ({ ...prev, [type]: value }))
   }

   const renderColorCheckboxes = () => (
      colorOptions.map(color => (
         <RadioGroupItem
            key={color}
            id={`color-${color}`}
            value={color}
            style={{
               backgroundColor: color,
            }}
            className="size-6"
            onChange={() => handleFilterChange('color', color)}
         />
      ))
   );

   const renderCheckboxGroup = (options: { id: string, label: string }[], type: keyof typeof filters) => (
      options.map(option => (
         <div key={option.id} className="flex items-center gap-3 bg-background border border-border rounded-md p-3 shadow-md">
            <Checkbox
               id={`${type}-${option.id}`}
               className="border-border cursor-pointer"
               checked={filters[type] === option.id}
               onCheckedChange={() => handleFilterChange(type, option.id)}
            />
            <Label htmlFor={`${type}-${option.id}`} className="cursor-pointer w-full">{option.label}</Label>
         </div>
      ))
   );

   return (
      <div className="space-y-4">
         <div className="space-y-4">
            <div className="flex justify-between sm:justify-start sm:gap-20">
               <div className="space-y-2">
                  <label className="block text-sm font-medium text-primary mb-2">Available Color</label>
                  <RadioGroup className="flex flex-wrap gap-2">
                     {renderColorCheckboxes()}
                  </RadioGroup>
               </div>
               <div>
                  <label className="block text-sm font-medium text-primary mb-2">Quantity</label>
                  <div className="flex items-center space-x-3">
                     <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full border border-border"
                        onClick={() => setQuantity(quantity - 1 > 0 ? quantity - 1 : 1)}
                     >
                        <Minus className="h-4 w-4" />
                     </Button>

                     <span className="font-semibold text-lg w-8 text-center">
                        {quantity}
                     </span>

                     <Button
                        size="icon"
                        className="w-8 h-8 rounded-full border bg-inverse text-inverse border-border"
                        onClick={() => setQuantity(quantity + 1)}
                     >
                        <Plus className="h-4 w-4 text-background" />
                     </Button>
                  </div>
               </div>
            </div>

            <div className="space-y-2">
               <label className="block text-sm font-medium text-primary mb-2">Available Size</label>
               <div className="flex flex-wrap gap-2">
                  {renderCheckboxGroup(sizeOptions.map(s => ({ id: s, label: s.toUpperCase() })), 'size')}
               </div>
            </div>
         </div>

         <div className="space-x-4 hidden sm:flex">
            <Button onClick={handleAddToCart} className="flex-1 bg-inverse text-inverse border border-border rounded-full h-12" size="lg">
               <ShoppingCart className="h-5 w-5 mr-2" />
               Add to Cart
            </Button>
            <Button
               variant="outline"
               size="lg"
               onClick={handleWishlist}
               className={`border border-border rounded-full size-12 ${isWishlisted ? "text-red-500 border-red-500" : ""}`}
            >
               <Heart className={`h-5 w-5 ${isWishlisted ? "fill-current" : ""}`} />
            </Button>
            <Button variant="outline" size="lg" className="border border-border rounded-full bg-primary text-primary size-12">
               <Share2 className="h-5 w-5" />
            </Button>
         </div>
      </div>
   )
}
