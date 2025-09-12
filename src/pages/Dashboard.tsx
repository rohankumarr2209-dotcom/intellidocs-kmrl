import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Train, 
  FileText, 
  Bell, 
  Search, 
  User, 
  LogOut, 
  Download,
  Eye,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import kmrlLogo from "@/assets/kmrl-logo.png";

// Mock data
const documents = [
  {
    id: 1,
    title: "Safety Protocol Update - Platform Operations",
    summary: "Updated safety protocols for platform operations including crowd management and emergency procedures.",
    category: "Safety",
    status: "New",
    timestamp: "2 hours ago",
    department: "Operations",
  },
  {
    id: 2,
    title: "Maintenance Schedule - Q1 2025",
    summary: "Quarterly maintenance schedule for rolling stock and infrastructure components.",
    category: "Maintenance",
    status: "Reviewed",
    timestamp: "1 day ago",
    department: "Maintenance",
  },
  {
    id: 3,
    title: "Compliance Report - Environmental Standards",
    summary: "Environmental compliance report for noise levels and energy consumption metrics.",
    category: "Compliance",
    status: "New",
    timestamp: "3 hours ago",
    department: "Engineering",
  },
];

const notifications = [
  { id: 1, message: "New Safety Circular added", time: "5 min ago", type: "info" },
  { id: 2, message: "Compliance deadline in 3 days", time: "1 hour ago", type: "warning" },
  { id: 3, message: "Maintenance report approved", time: "2 hours ago", type: "success" },
];

const Dashboard = () => {
  const [selectedDocument, setSelectedDocument] = useState<any>(null);

  const getStatusColor = (status: string) => {
    return status === "New" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground";
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Safety: "bg-destructive/10 text-destructive",
      Maintenance: "bg-warning/10 text-warning",
      Compliance: "bg-success/10 text-success",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white">
                <img src={kmrlLogo} alt="KMRL Logo" className="h-8 w-auto" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">IntelliDocs AI</h1>
                <p className="text-xs text-muted-foreground">Dashboard</p>
              </div>
            </div>
            
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents..."
                className="pl-10 pr-4 py-2 w-80 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                3
              </span>
            </Button>
            
            {/* User Menu */}
            <Button variant="ghost" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span className="hidden md:inline">John Doe</span>
            </Button>
            
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <LogOut className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">127</p>
                  <p className="text-sm text-muted-foreground">Documents This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-secondary">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">45h</p>
                  <p className="text-sm text-muted-foreground">Processing Time Saved</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-success">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">92%</p>
                  <p className="text-sm text-muted-foreground">Compliance Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card variant="elevated">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-warning">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Pending Actions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Document Feed */}
          <div className="lg:col-span-2">
            <Card variant="elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Documents</CardTitle>
                    <CardDescription>AI-processed documents from your departments</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {documents.map((doc) => (
                  <Card key={doc.id} variant="interactive">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">{doc.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{doc.summary}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge className={getCategoryColor(doc.category)}>
                              {doc.category}
                            </Badge>
                            <Badge className={getStatusColor(doc.status)}>
                              {doc.status}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {doc.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedDocument(doc)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>{selectedDocument?.title}</DialogTitle>
                              <DialogDescription>
                                AI-Generated Summary and Analysis
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold mb-2">AI Summary</h4>
                                <p className="text-muted-foreground">
                                  {selectedDocument?.summary} This comprehensive document outlines 
                                  the updated protocols and procedures to ensure safe operations 
                                  across all metro facilities. Key changes include enhanced crowd 
                                  management strategies and revised emergency response procedures.
                                </p>
                              </div>
                              <div className="flex gap-3">
                                <Button variant="gradient" size="sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  Download Summary
                                </Button>
                                <Button variant="outline" size="sm">
                                  <FileText className="h-4 w-4 mr-2" />
                                  View Source
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      notification.type === 'warning' ? 'bg-warning' : 
                      notification.type === 'success' ? 'bg-success' : 'bg-primary'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search Knowledge Hub
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Compliance Tracker
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;