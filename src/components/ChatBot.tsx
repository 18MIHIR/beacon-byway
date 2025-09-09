import { MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChatBot = () => {
  const handleChatBotClick = () => {
    // This would typically open a chat interface
    console.log("ChatBot clicked - opening chat interface");
  };

  return (
    <Card className="fixed bottom-6 right-6 z-30 bg-gradient-hero shadow-emergency hover:scale-105 transition-all duration-300 cursor-pointer">
      <CardContent className="p-3">
        <Button
          onClick={handleChatBotClick}
          className="bg-transparent hover:bg-white/10 text-white border-none shadow-none p-2 text-sm"
        >
          <MessageCircle className="h-4 w-4 mr-1" />
          <span className="font-medium">Chat</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ChatBot;