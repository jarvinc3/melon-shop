import type { CartContextType } from "@/lib/cart-provider"
import CartContext from "@/lib/cart-provider"
import { useContext } from "react"

export function useCart(): CartContextType {
   const context = useContext(CartContext)
   if (!context) {
      throw new Error("useCart must be used within a CartProvider")
   }
   return context
}