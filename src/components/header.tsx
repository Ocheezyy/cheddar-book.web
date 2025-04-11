import {Calendar} from "lucide-react";
import {Link} from "@tanstack/react-router";
import {Button} from "@/components/ui/button.tsx";
import {ThemeToggle} from "@/components/theme-toggle.tsx";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-rose-500" />
          <span className="text-xl font-bold">CheddarBook</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium">
            Browse
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium">
            How It Works
          </Link>
          <Link to="/for-businesses" className="text-sm font-medium">
            For Businesses
          </Link>
          <Link to="/pricing" className="text-sm font-medium">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/login" className="text-sm font-medium hidden sm:block">
            Log in
          </Link>
          <Link to="/sign-up" className="text-sm font-medium hidden sm:block">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}