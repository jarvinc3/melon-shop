import { createContext, useReducer, type ReactNode } from "react"

export interface CartItem {
   id: string
   size: string
   color: string
   name: string
   price: number
   image: string
   quantity: number
}

interface CartState {
   items: CartItem[]
   total: number
}

type CartAction =
   | { type: "ADD_ITEM"; payload: CartItem }
   | { type: "REMOVE_ITEM"; payload: string }
   | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
   | { type: "CLEAR_CART" }

export interface CartContextType {
   state: CartState
   addItem: (item: CartItem) => void
   removeItem: (id: string) => void
   updateQuantity: (id: string, quantity: number) => void
   clearCart: () => void
   items: CartItem[]
   total: number
}

const CartContext = createContext<CartContextType | null>(null)

function cartReducer(state: CartState, action: CartAction): CartState {
   switch (action.type) {
      case "ADD_ITEM": {
         const existingItem = state.items.find((item) => item.id === action.payload.id)

         if (existingItem) {
            const updatedItems = state.items.map((item) =>
               item.id === action.payload.id ? { ...item, quantity: item.quantity + action.payload.quantity } : item,
            )
            return {
               items: updatedItems,
               total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
            }
         }

         const newItems = [...state.items, action.payload]
         return {
            items: newItems,
            total: newItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
         }
      }

      case "REMOVE_ITEM": {
         const filteredItems = state.items.filter((item) => item.id !== action.payload)
         return {
            items: filteredItems,
            total: filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
         }
      }

      case "UPDATE_QUANTITY": {
         const updatedItems = state.items
            .map((item) => (item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item))
            .filter((item) => item.quantity > 0)

         return {
            items: updatedItems,
            total: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
         }
      }

      case "CLEAR_CART":
         return { items: [], total: 0 }

      default:
         return state
   }
}

interface CartProviderProps {
   children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
   const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })

   const addItem = (item: CartItem): void => {
      dispatch({ type: "ADD_ITEM", payload: item })
   }

   const removeItem = (id: string): void => {
      dispatch({ type: "REMOVE_ITEM", payload: id })
   }

   const updateQuantity = (id: string, quantity: number): void => {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
   }

   const clearCart = (): void => {
      dispatch({ type: "CLEAR_CART" })
   }

   return (
      <CartContext.Provider
         value={{
            state,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            items: state.items,
            total: state.total,
         }}
      >
         {children}
      </CartContext.Provider>
   )
}

export default CartContext;