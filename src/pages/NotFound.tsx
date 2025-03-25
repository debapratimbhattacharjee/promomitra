
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-promo-black p-4">
      <div className="glass-card rounded-xl p-8 md:p-12 max-w-xl w-full">
        <div className="flex flex-col items-center text-center">
          <div className="relative h-24 w-24 rounded-full bg-promo-red flex items-center justify-center mb-6">
            <span className="text-6xl font-bold text-black">4</span>
            <span className="text-6xl font-bold text-black absolute ml-6">4</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <Button asChild className="bg-promo-red hover:bg-promo-red/90 text-white button-glow">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
