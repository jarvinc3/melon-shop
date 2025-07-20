import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus } from "lucide-react"
import { Link } from "react-router-dom"

export function CartItems() {
  const { items, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <Card className="bg-primary border border-border">
        <CardContent className="p-12 text-center">
          <p className="text-primary mb-4">Your cart is empty</p>
          <Button asChild className="bg-background text-primary border border-border">
            <Link to="/shop">Continue Shopping</Link>
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center p-3 gap-3 text-primary border-x border-t border-border rounded-lg">
          <Link to={`/product/${item.id}`} className="cursor-pointer">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-xl"
            />
          </Link>
          <Link to={`/product/${item.id}`} className="flex-1 min-w-0 cursor-pointer">
            <div className="flex flex-col gap-2">
              <span className="font-semibold truncate leading-tight">{item.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-primary font-semibold rounded-lg bg-secondary border border-border px-2">{item.size}</span>
                <span className="text-sm text-primary rounded-lg px-1" style={{ backgroundColor: item.color }}>{item.color}</span>
                <span className="text-base font-medium bg-primary border border-border px-2 rounded-lg">${item.price.toFixed(2)}</span>
              </div>
            </div>
          </Link>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="icon"
                className="w-8 h-8 rounded-full border border-border"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>

              <span className="font-semibold text-lg w-8 text-center">
                {item.quantity.toString().padStart(2, '0')}
              </span>

              <Button
                size="icon"
                className="w-8 h-8 rounded-full border bg-inverse text-inverse border-border"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4 text-background" />
              </Button>
            </div>
            <span className="text-xs text-primary">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
