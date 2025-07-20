export interface WishlistItem {
  id: number
  productId: number
  name: string
  price: number
  image: string
  inStock: boolean
  addedAt: string
  product?: {
    rating: number
    reviews: number
    badge?: string
    originalPrice?: number
  }
}

export interface WishlistState {
  items: WishlistItem[]
  itemCount: number
}

export type WishlistAction =
  | { type: "ADD_ITEM"; payload: WishlistItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_WISHLIST" }
  | { type: "MOVE_TO_CART"; payload: number } 