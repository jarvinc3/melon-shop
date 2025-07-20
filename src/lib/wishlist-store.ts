import type { WishlistItem, WishlistState } from '@/types/wishlist.types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WishlistStore extends WishlistState {
  addItem: (item: Omit<WishlistItem, 'id' | 'addedAt'>) => void
  removeItem: (id: number) => void
  clearWishlist: () => void
  moveToCart: (id: number) => void
  isInWishlist: (productId: number) => boolean
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      itemCount: 0,

      addItem: (item) => {
        const { items } = get()
        const existingItem = items.find(i => i.productId === item.productId)

        if (!existingItem) {
          const newItem: WishlistItem = {
            ...item,
            id: Date.now(),
            addedAt: new Date().toISOString()
          }

          set((state) => ({
            items: [...state.items, newItem],
            itemCount: state.items.length + 1
          }))
        }
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id),
          itemCount: state.items.length - 1
        }))
      },

      clearWishlist: () => {
        set({ items: [], itemCount: 0 })
      },

      moveToCart: (id) => {
        get().removeItem(id)
      },

      isInWishlist: (productId) => {
        const { items } = get()
        return items.some(item => item.productId === productId)
      }
    }),
    {
      name: 'wishlist-storage',
      partialize: (state) => ({ items: state.items, itemCount: state.itemCount })
    }
  )
) 