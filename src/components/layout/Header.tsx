import { CartDrawer } from "@/components/features/cart/CartDrawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/hooks/use-cart"
import { ThemeToggle } from "@/lib/theme-toggle"
import { cn } from "@/lib/utils"
import { ContactRound, Home, NotepadText, Search, ShoppingBag, Store } from "lucide-react"
import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { NavUser } from "./NavUser"

const navItems = [
  {
    name: "Home",
    icon: Home,
    path: "/"
  },
  {
    name: "Shop",
    icon: Store,
    path: "/shop"
  },
  {
    name: "Collect",
    icon: NotepadText,
    path: "/collections"
  },
  {
    name: "About",
    icon: ContactRound,
    path: "/about"
  }
]

export function Header() {
  const [atTop, setAtTop] = useState(true);
  const { items } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const { pathname } = useLocation();
  const [showMobileBars, setShowMobileBars] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY === 0);

      if (Math.abs(currentScrollY - lastScrollY) < 20) return;

      const goingDown = currentScrollY > lastScrollY;
      setShowMobileBars(!goingDown);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-t from-transparent via-white/70 to-white dark:via-[#222222]/70 dark:to-[#222222]">
      {/* Mobile Top Bar */}
      <nav
        className={cn(
          "sm:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-primary h-14 px-4 shadow-md text-primary transition-transform duration-300",
          showMobileBars ? "translate-y-0" : "-translate-y-full"
        )}>
        <ThemeToggle />

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="pl-10 pr-2 py-2 max-w-48 bg-primary border-border rounded-full text-sm"
          />
        </div>


        <NavUser user={{ name: "John Doe", email: "john.doe@example.com", avatar: "/placeholder.svg" }} />

        <Button variant="ghost" size="icon" onClick={() => navigate("/cart")} className="relative">
          <ShoppingBag className="size-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Button>
      </nav>

      {/* Desktop Header */}
      <nav className={`container items-center justify-between mx-auto px-4 hidden sm:flex h-16 rounded-2xl text-primary transition-all duration-300 ${atTop ? 'bg-background mt-0' : 'shadow-md bg-primary mt-3'}`}>
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold mr-4">
          ModernShop
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className={cn(
                "text-secondary hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2",
                pathname === item.path && "text-emerald-600 dark:text-emerald-400"
              )}
            >
              <item.icon className="size-6" />
              {pathname === item.path && <span className="hidden md:block">{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
            <Input
              placeholder="Search products..."
              className="pl-10 border-border rounded-full bg-transparent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <NavUser user={{ name: "John Doe", email: "john.doe@example.com", avatar: "/placeholder.svg" }} />
          <CartDrawer />
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 transition-transform duration-300 bg-gradient-to-b from-transparent via-white/70 to-white dark:via-[#222222]/70 dark:to-[#222222] ${showMobileBars ? 'translate-y-0' : 'translate-y-full'}`}>
        <nav className="bg-primary grid grid-cols-4 px-2 items-center h-14 rounded-3xl shadow-md mb-2">
          {navItems.map((item) => (
            <Link to={item.path} key={item.name} className={`flex items-center justify-center gap-1 transition-colors ${pathname === item.path ? 'bg-emerald-600 text-white rounded-2xl p-2 w-24' : 'text-secondary bg-transparent'}`}>
              <item.icon className="size-6" />
              {pathname === item.path && <span className="text-xs">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>

    </header>
  )
}
