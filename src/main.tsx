import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Toaster } from "./components/ui/sonner"
import "./index.css"
import { CartProvider } from "./lib/cart-provider"
import { ThemeProvider } from "./lib/theme-provider"
import { AppRouter } from "./routes/AppRouter"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <CartProvider>
          <AppRouter />
          <Toaster />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
