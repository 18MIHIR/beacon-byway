import { BarChart3, AlertTriangle, Shield, TrendingUp, MapPin, Users, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  // Mock data for dashboard
  const alertData = [
    { id: 1, type: "Weather", location: "Bangkok, Thailand", severity: "medium", time: "2 hours ago" },
    { id: 2, type: "Security", location: "Paris, France", severity: "low", time: "4 hours ago" },
    { id: 3, type: "Health", location: "Mumbai, India", severity: "high", time: "6 hours ago" },
  ];

  const safetyMetrics = [
    { label: "Safe Travelers Today", value: "1,247", change: "+12%", trend: "up" },
    { label: "Active Alerts", value: "23", change: "-8%", trend: "down" },
    { label: "Emergency Response Time", value: "4.2 min", change: "-15%", trend: "down" },
    { label: "Coverage Areas", value: "156", change: "+3%", trend: "up" },
  ];

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
      {/* Header */}
      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Safety Dashboard
              </h1>
              <p className="text-white/90">
                Real-time monitoring and emergency response coordination
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="bg-white/10 text-white border-white/30">
                <Activity className="h-4 w-4 mr-1" />
                Live Status
              </Badge>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {safetyMetrics.map((metric, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                      <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${
                      metric.trend === "up" ? "text-success" : "text-emergency"
                    }`}>
                      <TrendingUp className={`h-4 w-4 ${
                        metric.trend === "down" ? "rotate-180" : ""
                      }`} />
                      {metric.change}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Active Alerts */}
            <div className="lg:col-span-2">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-warning" />
                    Active Safety Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {alertData.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Badge 
                          variant="outline" 
                          className={`border-${getSeverityColor(alert.severity)}/30 text-${getSeverityColor(alert.severity)}`}
                        >
                          {alert.severity.toUpperCase()}
                        </Badge>
                        <div>
                          <p className="font-medium text-foreground">{alert.type} Alert</p>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {alert.location}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{alert.time}</p>
                        <Button size="sm" variant="outline" className="mt-1">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
            
            {/* Safety Index */}
            <div className="space-y-6">
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-success" />
                    Global Safety Index
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-success mb-2">8.7</div>
                    <p className="text-sm text-muted-foreground mb-4">Out of 10.0</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-gradient-accent h-2 rounded-full" style={{ width: "87%" }}></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Updated 5 minutes ago</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border/50 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Emergency Responders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Online</span>
                      <span className="font-medium text-success">342</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">On Duty</span>
                      <span className="font-medium text-warning">89</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Responding</span>
                      <span className="font-medium text-emergency">12</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;