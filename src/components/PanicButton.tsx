import { AlertTriangle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PanicButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { toast } = useToast();

  const handlePanicPress = () => {
    setIsPressed(true);
    toast({
      title: "Emergency Alert Sent!",
      description: "Your location and emergency alert have been sent to emergency services.",
      className: "bg-emergency text-emergency-foreground border-emergency",
    });
    
    // Mock API call - in real app would send to backend
    console.log("PANIC BUTTON PRESSED - Emergency services notified");
    
    setTimeout(() => setIsPressed(false), 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handlePanicPress}
        disabled={isPressed}
        className={`
          w-16 h-16 rounded-full bg-gradient-emergency shadow-emergency
          hover:scale-105 active:scale-95 transition-all duration-200
          border-2 border-emergency-glow/50
          ${isPressed 
            ? 'animate-pulse bg-emergency-glow shadow-emergency' 
            : 'hover:shadow-emergency hover:border-emergency-glow'
          }
        `}
        variant="ghost"
      >
        {isPressed ? (
          <Phone className="h-8 w-8 text-emergency-foreground animate-bounce" />
        ) : (
          <AlertTriangle className="h-8 w-8 text-emergency-foreground" />
        )}
      </Button>
      
      {isPressed && (
        <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full border-4 border-emergency-glow animate-ping opacity-75" />
      )}
    </div>
  );
};

export default PanicButton;