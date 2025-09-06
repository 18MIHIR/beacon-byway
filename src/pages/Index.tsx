import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PanicButton from "@/components/PanicButton";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, MapPin, Users, TrendingUp, Clock } from "lucide-react";

const Index = () => {
  const featuredDestinations = [
    {
      id: "1",
      name: "Goa Beaches",
      location: "Western India",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      rating: 4.8,
      safetyLevel: "high" as const,
      price: "From ₹25,999",
      highlights: ["Beach Resorts", "Portuguese Architecture", "Nightlife", "Water Sports"]
    },
    {
      id: "2",
      name: "Kerala Backwaters",
      location: "South India",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      rating: 4.9,
      safetyLevel: "high" as const,
      price: "From ₹18,999",
      highlights: ["Houseboat Cruise", "Ayurveda Spas", "Tea Plantations", "Wildlife"]
    },
    {
      id: "3",
      name: "Rajasthan Heritage",
      location: "North India",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      rating: 4.7,
      safetyLevel: "high" as const,
      price: "From ₹22,999",
      highlights: ["Palace Hotels", "Desert Safari", "Cultural Tours", "Royal Architecture"]
    }
  ];

  const safetyFeatures = [
    {
      icon: Shield,
      title: "AI-Powered Safety Monitoring",
      description: "Advanced algorithms monitor global safety conditions 24/7"
    },
    {
      icon: AlertTriangle,
      title: "Real-Time Alert System",
      description: "Instant notifications about safety concerns in your area"
    },
    {
      icon: MapPin,
      title: "Geo-Fencing Protection",
      description: "Automatic alerts when entering potentially unsafe zones"
    },
    {
      icon: Users,
      title: "Emergency Response Network",
      description: "Connected to local emergency services worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <PanicButton />
      
      {/* Safety Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology and human expertise working together to keep you safe wherever you travel.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-border/50 shadow-card text-center hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Safe Destinations
              </h2>
              <p className="text-xl text-muted-foreground">
                Handpicked destinations with the highest safety ratings
              </p>
            </div>
            <Button className="bg-gradient-hero hover:scale-105 transition-all duration-200">
              View All Destinations
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Millions
            </h2>
            <p className="text-xl text-white/90">
              See why travelers worldwide choose SafeTravel for their adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-white/80">Safe Trips Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-white/80">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.2 min</div>
              <div className="text-white/80">Avg. Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99.8%</div>
              <div className="text-white/80">Safety Success Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
