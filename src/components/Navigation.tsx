import { Shield, Menu, X, Home, Map, AlertTriangle, User, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LoginDialog from "./LoginDialog";
import yatraRakshakLogo from "@/assets/yatra-rakshak-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/destinations", label: "Destinations", icon: Map },
    { href: "/emergency", label: "Emergency", icon: AlertTriangle },
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <img 
                src={yatraRakshakLogo} 
                alt="Yatra Rakshak Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl font-bold text-foreground">Yatra Rakshak</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`
                      flex items-center gap-2 px-4 py-2 
                      ${isActive 
                        ? "bg-gradient-hero text-white shadow-soft" 
                        : "hover:bg-muted text-foreground"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* Profile Button */}
            <Button
              variant="ghost"
              className="flex items-center gap-2 px-4 py-2 hover:bg-muted text-foreground"
              onClick={() => setIsLoginOpen(true)}
            >
              <User className="h-4 w-4" />
              Login
            </Button>
          </div>
          
          {/* Login Dialog */}
          <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-white/95 backdrop-blur-md">
            <div className="py-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link key={item.href} to={item.href} onClick={() => setIsMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className={`
                        w-full justify-start gap-3 h-12 px-4
                        ${isActive 
                          ? "bg-gradient-hero text-white" 
                          : "text-foreground hover:bg-muted"
                        }
                      `}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              
              {/* Mobile Login Button */}
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 h-12 px-4 text-foreground hover:bg-muted"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsLoginOpen(true);
                }}
              >
                <User className="h-5 w-5" />
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;