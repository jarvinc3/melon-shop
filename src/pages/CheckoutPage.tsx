import { CheckoutForm } from "@/components/features/checkout/CheckoutForm";
import { OrderSummary } from "@/components/features/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <CheckoutForm />
        <OrderSummary />
      </div>
    </main>
  )
}
