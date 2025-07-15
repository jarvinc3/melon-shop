import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from "./components/lib/cart-provider"
import { ThemeProvider } from "./components/lib/theme-provider"
import { Toaster } from "./components/ui/toaster"
import "./index.css"
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
