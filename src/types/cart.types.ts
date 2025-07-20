export interface CartItem {
  id: string
  productId: number
  name: string
  price: number
  image: string
  quantity: number
  size: string
  color: string
  sku?: string
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

export interface CartSummary {
  subtotal: number
  shipping: number
  tax: number
  total: number
  discount?: number
  discountCode?: string
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "APPLY_DISCOUNT"; payload: { code: string; amount: number } }
  | { type: "REMOVE_DISCOUNT" } 