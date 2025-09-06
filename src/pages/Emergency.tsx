import { Phone, MessageSquare, MapPin, AlertTriangle, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Emergency = () => {
  const emergencyContacts = [
    { name: "Local Police", number: "100", type: "police", available: true },
    { name: "Medical Emergency", number: "112", type: "medical", available: true },
    { name: "Tourist Helpline", number: "1363", type: "tourist", available: true },
    { name: "Women Helpline", number: "1091", type: "embassy", available: true },
  ];

  const recentAlerts = [
    { id: 1, type: "Weather Warning", location: "Downtown Area", time: "15 min ago", severity: "medium" },
    { id: 2, type: "Road Closure", location: "Highway 101", time: "1 hour ago", severity: "low" },
    { id: 3, type: "Security Alert", location: "Tourist District", time: "2 hours ago", severity: "high" },
  ];

  const getContactIcon = (type: string) => {
    switch (type) {
      case "police": return Shield;
      case "medical": return Phone;
      case "tourist": return MapPin;
      case "embassy": return MessageSquare;
      default: return Phone;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "emergency";
      case "medium": return "warning";
      case "low": return "success";
      default: return "muted";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Emergency Header */}
      <section className="bg-gradient-emergency py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="h-8 w-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Emergency Response
            </h1>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            24/7 emergency support and coordination. Get immediate help when you need it most.
          </p>
          
          {/* Quick Actions */}
          <Card className="bg-white/95 backdrop-blur-sm max-w-md mx-auto shadow-emergency">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full h-14 bg-gradient-emergency hover:scale-105 transition-all duration-200 text-lg font-semibold shadow-emergency"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  Call Emergency Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full h-12 border-2 border-emergency/20 hover:bg-emergency/5"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Emergency Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Emergency Contacts */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {emergencyContacts.map((contact, index) => {
                    const ContactIcon = getContactIcon(contact.type);
                    return (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                            <ContactIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{contact.name}</p>
                            <p className="text-sm text-muted-foreground">{contact.number}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge 
                            variant={contact.available ? "default" : "outline"}
                            className={contact.available ? "bg-success text-success-foreground" : ""}
                          >
                            {contact.available ? "Available" : "Unavailable"}
                          </Badge>
                          <Button 
                            size="sm" 
                            disabled={!contact.available}
                            className="bg-gradient-hero"
                          >
                            Call
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
              
              {/* Location Services */}
              <Card className="bg-gradient-card border-border/50 shadow-card mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    Your Location Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">GPS Tracking</p>
                        <p className="text-sm text-muted-foreground">Share location with emergency services</p>
                      </div>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">Emergency Contacts</p>
                        <p className="text-sm text-muted-foreground">3 contacts will be notified</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Manage
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts */}
            <div>
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-3 border border-border/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          variant="outline"
                          className={`border-${getSeverityColor(alert.severity)}/30 text-${getSeverityColor(alert.severity)}`}
                        >
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {alert.time}
                        </div>
                      </div>
                      <p className="font-medium text-sm text-foreground mb-1">{alert.type}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {alert.location}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Emergency;