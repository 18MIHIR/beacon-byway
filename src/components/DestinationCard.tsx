import { MapPin, Star, Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  safetyLevel: "high" | "medium" | "low";
  price: string;
  highlights: string[];
}

const DestinationCard = ({ 
  name, 
  location, 
  image, 
  rating, 
  safetyLevel, 
  price, 
  highlights 
}: DestinationCardProps) => {
  const getSafetyColor = (level: string) => {
    switch (level) {
      case "high": return "success";
      case "medium": return "warning";
      case "low": return "emergency";
      default: return "muted";
    }
  };

  const getSafetyIcon = (level: string) => {
    switch (level) {
      case "high": return Shield;
      case "medium": return AlertTriangle;
      case "low": return AlertTriangle;
      default: return Shield;
    }
  };

  const SafetyIcon = getSafetyIcon(safetyLevel);

  return (
    <Card className="group cursor-pointer hover:shadow-card transition-all duration-300 hover:scale-[1.02] overflow-hidden bg-gradient-card border-border/50">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Safety Badge */}
        <Badge 
          variant="outline"
          className={`absolute top-3 right-3 bg-white/90 backdrop-blur-sm border-${getSafetyColor(safetyLevel)}/30`}
        >
          <SafetyIcon className={`h-3 w-3 mr-1 text-${getSafetyColor(safetyLevel)}`} />
          {safetyLevel.charAt(0).toUpperCase() + safetyLevel.slice(1)} Safety
        </Badge>
        
        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground">
            {price}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-warning fill-warning mr-1" />
            <span className="font-medium text-foreground">{rating}</span>
          </div>
        </div>
        
        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {highlights.slice(0, 2).map((highlight, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {highlight}
            </Badge>
          ))}
          {highlights.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{highlights.length - 2} more
            </Badge>
          )}
        </div>
        
        <Button className="w-full bg-gradient-hero hover:scale-[1.02] transition-all duration-200">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;