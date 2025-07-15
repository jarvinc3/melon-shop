import { CartItems } from "@/components/features/cart/CartItems";
import { CartSummary } from "@/components/features/cart/CartSummary";

export default function CartPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems />
        </div>
        <div className="lg:col-span-1">
          <CartSummary />
        </div>
      </div>
    </main>
  )
}
