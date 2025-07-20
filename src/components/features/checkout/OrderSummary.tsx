import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/hooks/use-cart"
import { useNavigate } from "react-router-dom"

export function OrderSummary() {
  const { items, total } = useCart()
  const navigate = useNavigate()
  const subtotal = total
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08

  return (
    <Card className="bg-primary border-border">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {items.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="size-12 object-cover rounded" />
              <div className="flex-1">
                <h2 className="font-medium text-sm">{item.name}</h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-secondary">Qty: {item.quantity}</p>
                  <p className="text-sm text-secondary">Size: <span className="text-primary font-bold bg-secondary rounded-md px-2 py-1">{item.size}</span></p>
                  <p className="text-sm text-secondary">Color: <span className="text-primary font-bold rounded-full p-0.5 px-2.5" style={{ backgroundColor: item.color }}></span></p>
                </div>
              </div>
              <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <Separator className="bg-secondary border border-border h-0.5" />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
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

        <Separator className="hidden md:block bg-secondary border border-border h-0.5 " />

        <div className="hidden md:flex space-x-4 w-full justify-center">
          <div className="flex flex-col flex-1">
            <div className="font-bold text-primary text-xl">Total</div>
            <div className="text-3xl font-bold text-primary">$ {total.toFixed(2)}</div>
          </div>
          <Button variant="outline" onClick={() => navigate("/success")} className="cursor-pointer flex-1 bg-inverse text-lg text-inverse border border-border rounded-2xl h-14" size="lg">
            Place Order
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
