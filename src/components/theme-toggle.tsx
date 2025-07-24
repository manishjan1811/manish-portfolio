import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark"

  return (
    <div className="relative">
      {/* Slide Toggle */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 shadow-sm ${
          isDark 
            ? 'bg-gradient-to-r from-primary to-primary/80 shadow-primary/20' 
            : 'bg-gradient-to-r from-muted to-muted-foreground/20 shadow-muted/30'
        }`}
        aria-label="Toggle theme"
      >
        {/* Background glow effect */}
        <div className={`absolute inset-0 rounded-full blur-sm transition-opacity duration-300 ${
          isDark ? 'bg-primary/30 opacity-100' : 'bg-muted/20 opacity-0'
        }`} />
        
        {/* Sliding circle with icon */}
        <span
          className={`relative inline-flex h-5 w-5 items-center justify-center transform rounded-full bg-background shadow-lg transition-all duration-300 ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        >
          {/* Icon that changes based on theme */}
          <div className="relative w-3 h-3">
            <Sun className={`absolute inset-0 w-3 h-3 text-primary transition-all duration-300 ${
              isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
            }`} />
            <Moon className={`absolute inset-0 w-3 h-3 text-primary transition-all duration-300 ${
              isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
            }`} />
          </div>
        </span>
      </button>
    </div>
  )
}