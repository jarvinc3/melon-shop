import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle(): React.ReactNode {
  const [mounted, setMounted] = useState<boolean>(false)
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun className="size-6" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  const toggleTheme = (): void => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="cursor-pointer">
      <Sun className="size-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
