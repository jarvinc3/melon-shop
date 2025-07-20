import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { cn } from "@/lib/utils"
import { useNavigate } from "react-router-dom"

export function CartSummary( {className}: {className?: string} ) {
  const { items, total } = useCart()
  const navigate = useNavigate()
  const subtotal = total
  const shipping = subtotal > 100 ? 0 : 10
  const tax = subtotal * 0.08
  const finalTotal = subtotal + shipping + tax

  return (
    <div className="space-y-5">
      <div className={cn("items-center bg-primary md:bg-secondary rounded-xl p-2 gap-2 border border-border dark:border-none hidden md:flex", className)}>
        <input
          type="text"
          placeholder="Promo Code"
          className="flex-1 bg-transparent outline-none border-none text-base px-2"
        />
        <Button variant="outline" className="bg-inverse cursor-pointer text-inverse rounded-lg px-5 py-2 text-center font-semibold text-base border border-border dark:border-none">Apply</Button>
      </div>
      <div className="space-y-2 text-base">
        <div className="flex justify-between">
          <span className="font-medium text-secondary">Order Amount</span>
          <span className="font-semibold text-primary">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-secondary">Tax</span>
          <span className="font-semibold text-primary">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-t pt-2 mt-2">
          <span className="font-bold text-lg">Total Payment <span className="text-xs font-normal text-secondary">({items.length} items)</span></span>
          <span className="font-bold text-lg text-primary">${finalTotal.toFixed(2)}</span>
        </div>
      </div>
      <Button onClick={() => navigate("/checkout")} className="w-full cursor-pointer bg-inverse text-inverse rounded-2xl py-6 text-lg font-bold mt-2">Proceed To Checkout</Button>
    </div>
  )
}

