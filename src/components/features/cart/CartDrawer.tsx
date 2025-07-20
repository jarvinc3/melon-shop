import { Button } from "@/components/ui/button"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { useCart } from "@/hooks/use-cart"
import { Heart, ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"
import { CartItems } from "./CartItems"
import { CartSummary } from "./CartSummary"

export function CartDrawer() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="relative cursor-pointer">
          <ShoppingBag className="size-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full size-6 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="border-border h-screen w-lg">
        <DrawerHeader className="flex flex-row justify-between items-center border-b border-border p-2">
          <Link to="/cart" className="size-10 flex items-center gap-2 rounded-lg bg-primary p-2 shadow-md border border-border hover:shadow-lg transition-all duration-300">
            <ShoppingBag className="size-8" />
          </Link>
          <DrawerTitle>Shopping Cart <span className="text-sm text-primary bg-secondary rounded-lg px-2 border border-border py-1">{items.length}</span></DrawerTitle>
          <Link to="/wishlist" className="size-10 flex relative items-center gap-2 rounded-lg bg-primary p-2 shadow-md border border-border hover:shadow-lg transition-all duration-300">
            <Heart className="size-8" />
          </Link>
          <DrawerDescription className="hidden">
            <span>Cart</span>
          </DrawerDescription>
        </DrawerHeader>
        <main className="h-full p-4 flex flex-col justify-between relative">
          <div className="h-[75%] overflow-y-auto scrollbar-hide w-full pb-4">
            <CartItems />
          </div>
          {items.length > 0 && (
            <div className="h-[20%] sticky bottom-0 w-full mb-4 border-t border-border pt-4">
              <CartSummary className="!hidden" />
            </div>
          )}
        </main>
      </DrawerContent>
    </Drawer>
  )
}
