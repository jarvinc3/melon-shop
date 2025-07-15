import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { Link } from "react-router-dom"

export function CartSummary() {
  const { items, total } = useCart()

  const subtotal = total
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08
  const finalTotal = subtotal + shipping + tax

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal ({items.length} items)</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${finalTotal.toFixed(2)}</span>
        </div>

        <div className="space-y-2">
          <Input placeholder="Enter discount code" />
          <Button variant="outline" className="w-full bg-transparent">
            Apply Discount
          </Button>
        </div>

        <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
          <Link to="/checkout">Proceed to Checkout</Link>
        </Button>

        {subtotal < 100 && (
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
            Add ${(100 - subtotal).toFixed(2)} more for free shipping!
          </p>
        )}
      </CardContent>
    </Card>
  )
}
