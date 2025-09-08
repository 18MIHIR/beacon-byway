import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button className="bg-gradient-hero">
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search Site
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
