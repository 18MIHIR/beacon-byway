import { Search, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20">
            <Shield className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-medium">Safe Travel Guaranteed</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Destinations
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Stay Safe
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Explore the world with confidence. Real-time safety alerts, emergency response, 
            and AI-powered threat detection to keep you protected wherever you go.
          </p>
          
          {/* Search Bar */}
          <Card className="bg-white/95 backdrop-blur-sm border-white/20 p-6 max-w-2xl mx-auto mb-8 shadow-card">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Where do you want to go?"
                  className="pl-10 h-12 text-lg border-border"
                />
              </div>
              <Button 
                size="lg" 
                className="h-12 px-8 bg-gradient-hero hover:scale-105 transition-all duration-200 shadow-soft"
              >
                <Search className="h-5 w-5 mr-2" />
                Explore Safely
              </Button>
            </div>
          </Card>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">2M+</div>
              <div className="text-white/80">Safe Travelers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">20+</div>
              <div className="text-white/80">States Covered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-white/80">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;