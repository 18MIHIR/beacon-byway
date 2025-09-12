import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PanicButton from "@/components/PanicButton";
import DestinationCard from "@/components/DestinationCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, MapPin, Users, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import destination1 from "@/assets/destination-1.jpg";
import destination2 from "@/assets/destination-2.jpg";
import destination3 from "@/assets/destination-3.jpg";

const Index = () => {
  const navigate = useNavigate();
  const featuredDestinations = [
    {
      id: "1",
      name: "Cherrapunja",
      location: "Meghalaya, Northeast India",
      image: destination1,
      rating: 4.8,
      safetyLevel: "high" as const,
      price: "From ₹15,999",
      highlights: ["Living Root Bridges", "Wettest Place on Earth", "Waterfalls", "Cave Exploration"]
    },
    {
      id: "2",
      name: "Shillong",
      location: "Meghalaya, Northeast India",
      image: destination2,
      rating: 4.9,
      safetyLevel: "high" as const,
      price: "From ₹12,999",
      highlights: ["Scotland of the East", "Ward's Lake", "Music Scene", "Pine Forest"]
    },
    {
      id: "3",
      name: "Aizawl",
      location: "Mizoram, Northeast India",
      image: destination3,
      rating: 4.7,
      safetyLevel: "high" as const,
      price: "From ₹18,999",
      highlights: ["Hill Station", "Tribal Culture", "Handloom Textiles", "Scenic Views"]
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
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-30">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-soft hover:bg-white dark:hover:bg-gray-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>
      
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
              See why travelers worldwide choose Yatra Rakshak for their adventures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">2.5M+</div>
              <div className="text-white/80">Safe Trips Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">States Covered</div>
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
