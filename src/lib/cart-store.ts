import type { CartItem, CartState, CartSummary } from '@/types/cart.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStore extends CartState {
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  applyDiscount: (code: string, amount: number) => void
  removeDiscount: () => void
  getSummary: () => CartSummary
  getItemCount: () => number
  discount?: number
  discountCode?: string
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      itemCount: 0,

      addItem: (item) => {
        const { items } = get()
        const existingItem = items.find(i => i.id === item.id)

        if (existingItem) {
          get().updateQuantity(item.id, existingItem.quantity + item.quantity)
        } else {
          set((state) => ({
            items: [...state.items, item],
            total: state.total + (item.price * item.quantity),
            itemCount: state.itemCount + item.quantity
          }))
        }
      },

      removeItem: (id) => {
        set((state) => {
          const item = state.items.find(i => i.id === id)
          if (!item) return state

          return {
            items: state.items.filter(i => i.id !== id),
            total: state.total - (item.price * item.quantity),
            itemCount: state.itemCount - item.quantity
          }
        })
      },

      updateQuantity: (id, quantity) => {
        set((state) => {
          const itemIndex = state.items.findIndex(i => i.id === id)
          if (itemIndex === -1) return state

          const item = state.items[itemIndex]
          const quantityDiff = quantity - item.quantity

          const newItems = [...state.items]
          if (quantity <= 0) {
            newItems.splice(itemIndex, 1)
          } else {
            newItems[itemIndex] = { ...item, quantity }
          }

          return {
            items: newItems,
            total: state.total + (item.price * quantityDiff),
            itemCount: state.itemCount + quantityDiff
          }
        })
      },

      clearCart: () => {
        set({ items: [], total: 0, itemCount: 0 })
      },

      applyDiscount: (code, amount) => {
        // This would typically validate the discount code
        // For now, we just store it in the state
        set((state) => ({
          ...state,
          discount: amount,
          discountCode: code
        }))
      },

      removeDiscount: () => {
        set((state) => ({
          ...state,
          discount: undefined,
          discountCode: undefined
        }))
      },

      getSummary: () => {
        const { total, discount } = get()
        const subtotal = total
        const shipping = subtotal > 100 ? 0 : 10
        const tax = subtotal * 0.08
        const finalTotal = subtotal + shipping + tax - (discount || 0)

        return {
          subtotal,
          shipping,
          tax,
          total: finalTotal,
          discount,
          discountCode: get().discountCode
        }
      },

      getItemCount: () => {
        return get().itemCount
      }
    }),
    {
      name: 'cart-storage',
      partialize: (state) => ({
        items: state.items,
        total: state.total,
        itemCount: state.itemCount
      })
    }
  )
) 