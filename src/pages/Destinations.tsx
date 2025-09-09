import { Search, Filter, MapPin, Star, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DestinationCard from "@/components/DestinationCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const mockDestinations = [
  {
    id: "1",
    name: "Cherrapunji",
    location: "Meghalaya, Northeast India",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    rating: 4.8,
    safetyLevel: "high" as const,
    price: "From ₹15,000",
    highlights: ["Living Root Bridges", "Wettest Place on Earth", "Waterfalls", "Cave Exploration"]
  },
  {
    id: "2", 
    name: "Shillong",
    location: "Meghalaya, Northeast India",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    rating: 4.9,
    safetyLevel: "high" as const,
    price: "From ₹12,000",
    highlights: ["Scotland of the East", "Ward's Lake", "Music Scene", "Pine Forest"]
  },
  {
    id: "3",
    name: "Aizawl",
    location: "Mizoram, Northeast India",
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
    rating: 4.7,
    safetyLevel: "high" as const,
    price: "From ₹18,000",
    highlights: ["Hill Station", "Tribal Culture", "Handloom Textiles", "Scenic Views"]
  },
  {
    id: "4",
    name: "Gangtok",
    location: "Sikkim, Northeast India",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
    rating: 4.8,
    safetyLevel: "high" as const,
    price: "From ₹16,000",
    highlights: ["Buddhist Monasteries", "Cable Car Ride", "Himalayan Views", "Organic Food"]
  },
  {
    id: "5",
    name: "Kohima",
    location: "Nagaland, Northeast India",
    image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop",
    rating: 4.6,
    safetyLevel: "high" as const,
    price: "From ₹20,000",
    highlights: ["Hornbill Festival", "WWII History", "Naga Heritage", "Traditional Villages"]
  },
  {
    id: "6",
    name: "Imphal",
    location: "Manipur, Northeast India",
    image: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=600&fit=crop",
    rating: 4.5,
    safetyLevel: "medium" as const,
    price: "From ₹14,000",
    highlights: ["Loktak Lake", "Manipuri Dance", "War Cemetery", "Floating Islands"]
  }
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Destinations" },
    { id: "high", label: "High Safety" },
    { id: "beach", label: "Beach" },
    { id: "city", label: "City" },
    { id: "adventure", label: "Adventure" }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Home Button */}
      <div className="fixed top-20 left-4 z-30">
        <Link to="/">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-soft hover:bg-white dark:hover:bg-gray-800"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
        </Link>
      </div>
      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Safe Destinations
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore verified safe destinations with real-time safety ratings and comprehensive travel information.
          </p>
          
          {/* Search & Filter */}
          <Card className="bg-white/95 backdrop-blur-sm max-w-4xl mx-auto p-6 shadow-card">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search destinations..."
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 flex-wrap lg:flex-nowrap">
                {filters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilter === filter.id ? "default" : "outline"}
                    className={selectedFilter === filter.id ? "bg-gradient-hero" : ""}
                    onClick={() => setSelectedFilter(filter.id)}
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {mockDestinations.length} Destinations Found
              </h2>
              <p className="text-muted-foreground">
                All destinations verified for safety and quality
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
          
          {/* Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mockDestinations.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8">
              Load More Destinations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;