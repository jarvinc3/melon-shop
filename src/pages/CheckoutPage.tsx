import { CheckoutAddress } from "@/components/features/checkout/CheckoutAddress";
import { CheckoutPayment } from "@/components/features/checkout/CheckoutPayment";
import { OrderSummary } from "@/components/features/checkout/OrderSummary";
import { NavLayout } from "@/components/layout/NavLayout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const { total } = useCart();
  const navigate = useNavigate();

  return (
    <NavLayout
      title="Checkout"
      action={
        <Button variant="ghost" size="icon" className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary size-10 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <User className="size-6" />
        </Button>
      }
    >
      <div className="pt-20 container mx-auto min-h-screen bg-background">

        <div className="px-4 space-y-8 pb-20 h-full text-primary md:flex md:flex-row md:justify-between md:gap-10 md:items-start">
          <div className="space-y-8 md:w-2/3">
            <CheckoutAddress />
            <CheckoutPayment />
          </div>
          <div className="md:w-1/2">
            <OrderSummary />
          </div>
          <div className="flex space-x-4 w-full justify-center fixed bottom-0 left-0 right-0 bg-background px-4 py-3 md:hidden">
            <div className="flex flex-col flex-1">
              <div className="font-bold text-primary text-xl">Total</div>
              <div className="text-3xl font-bold text-primary">$ {total.toFixed(2)}</div>
            </div>
            <Button variant="outline" onClick={() => navigate("/success")} className="flex-1 bg-inverse text-lg text-inverse border border-border rounded-2xl h-14" size="lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </NavLayout>
  );
}
