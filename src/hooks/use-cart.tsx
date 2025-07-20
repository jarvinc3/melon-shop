import { useCartStore } from "@/lib/cart-store"

export function useCart() {
  const cartStore = useCartStore()

  return {
    items: cartStore.items,
    total: cartStore.total,
    itemCount: cartStore.itemCount,
    addItem: cartStore.addItem,
    removeItem: cartStore.removeItem,
    updateQuantity: cartStore.updateQuantity,
    clearCart: cartStore.clearCart,
    getSummary: cartStore.getSummary
  }
}