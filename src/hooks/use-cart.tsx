import type { CartContextType } from "@/components/lib/cart-provider"
import CartContext from "@/components/lib/cart-provider"
import { useContext } from "react"

export function useCart(): CartContextType {
   const context = useContext(CartContext)
   if (!context) {
      throw new Error("useCart must be used within a CartProvider")
   }
   return context
}