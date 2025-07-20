import { CartItems } from "@/components/features/cart/CartItems";
import { CartSummary } from "@/components/features/cart/CartSummary";
import { NavLayout } from "@/components/layout/NavLayout";
import { useCart } from "@/hooks/use-cart";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items } = useCart()

  return (
    <NavLayout
      title="Cart"
      action={
        <Link to="/wishlist" className="cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-primary size-10 shadow-md border border-border hover:shadow-lg transition-all duration-300">
          <Heart className="size-6" />
        </Link>
      }
    >
      <main className="min-h-screen bg-background text-primary flex flex-col items-center justify-start px-2">
        <div className="w-full relative flex flex-col h-[80vh] md:hidden">
          <div className="flex-1 overflow-y-auto scrollbar-hide pb-24 pt-20 w-full">
            <CartItems />
          </div>
          {items.length > 0 && (
            <div className="fixed left-1/2 -translate-x-1/2 bottom-0 w-full bg-background p-4 z-10">
              <CartSummary />
            </div>
          )}
        </div>
        <div className="w-screen h-screen hidden md:flex justify-between gap-10 p-4 pt-20">
          <div className="overflow-y-auto scrollbar-hide h-full w-2/3 bg-primary text-primary border-border border rounded-lg shadow-md p-4">
            <CartItems />
          </div>
          {items.length > 0 && (
            <div className="w-1/3 h-fit bg-primary text-primary border-border border rounded-lg shadow-md p-4">
              <CartSummary />
            </div>
          )}
        </div>
      </main>
    </NavLayout>
  );
}
