import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
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
  Filter,
  Upload,
  Home,
  Building2,
  Shield,
  BarChart3,
  BookOpen,
  Settings,
  Languages,
  Menu,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import kmrlLogo from "@/assets/kmrl-logo.png";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

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

  const sidebarItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home, current: true },
    { name: "Department Dashboards", href: "/departments", icon: Building2, current: false },
    { name: "Upload Document", href: "/upload", icon: Upload, current: false },
    { name: "Compliance & Alerts", href: "/compliance", icon: Shield, current: false },
    { name: "Reports & Analytics", href: "/reports", icon: BarChart3, current: false },
    { name: "Knowledge Hub", href: "/knowledge", icon: BookOpen, current: false },
    { name: "Settings", href: "/settings", icon: Settings, current: false },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files: FileList) => {
    // Simulate file upload
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-3 p-6 border-b border-border">
            <div className="p-2 rounded-lg bg-white">
              <img src={kmrlLogo} alt="KMRL Logo" className="h-8 w-auto" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">DocuBridge</h1>
              <p className="text-xs text-muted-foreground">KMRL Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.current
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center gap-3 px-3 py-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <User className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Operations Manager</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start mt-2"
              asChild
            >
              <Link to="/">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navigation */}
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              {/* Search */}
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search documents, summaries, alerts..."
                  className="pl-10 pr-4 py-2 w-96 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive text-destructive-foreground rounded-full text-xs flex items-center justify-center">
                  5
                </span>
              </Button>
            </div>
          </div>
        </nav>

        {/* Main Dashboard Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-6 space-y-6">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Welcome back, John!</h2>
              <p className="text-muted-foreground">Here's what's happening with your documents today.</p>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-primary">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">127</p>
                      <p className="text-sm text-muted-foreground">Documents This Week</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-success" />
                        <span className="text-xs text-success">+12%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gradient-secondary">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">45h</p>
                      <p className="text-sm text-muted-foreground">Processing Time Saved</p>
                      <div className="flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3 text-success" />
                        <span className="text-xs text-success">+8%</span>
                      </div>
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
                      <div className="flex items-center gap-1 mt-1">
                        <CheckCircle className="h-3 w-3 text-success" />
                        <span className="text-xs text-success">On track</span>
                      </div>
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
                      <p className="text-sm text-muted-foreground">Urgent Actions</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3 text-warning" />
                        <span className="text-xs text-warning">2 due today</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Upload Widget */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Quick Document Upload
                </CardTitle>
                <CardDescription>
                  Drag and drop your documents for instant AI processing and summarization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                    dragActive ? 'border-primary bg-accent' : 'border-muted-foreground/25'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Drop files here or click to upload</p>
                      <p className="text-sm text-muted-foreground">
                        Supports PDF, Word, Excel, PowerPoint, and image files
                      </p>
                    </div>
                    <Button onClick={onButtonClick} variant="outline">
                      Choose Files
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      onChange={(e) => e.target.files && handleFiles(e.target.files)}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png"
                    />
                  </div>
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-4 space-y-2">
                      <Progress value={uploadProgress} className="w-full" />
                      <p className="text-sm text-muted-foreground">Uploading and processing... {uploadProgress}%</p>
                    </div>
                  )}
                  {uploadProgress === 100 && (
                    <div className="mt-4 p-3 bg-success/10 text-success rounded-lg">
                      <CheckCircle className="h-5 w-5 mx-auto mb-1" />
                      <p className="text-sm font-medium">Processing complete! Document added to your dashboard.</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Document Feed */}
              <div className="lg:col-span-2 space-y-6">
                <Card variant="elevated">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Today's AI Summaries</CardTitle>
                        <CardDescription>Latest processed documents with AI insights</CardDescription>
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
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-foreground">{doc.title}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {doc.department}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{doc.summary}</p>
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
                          <Separator className="my-3" />
                          <div className="flex justify-between items-center">
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
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                  <DialogHeader>
                                    <DialogTitle>{selectedDocument?.title}</DialogTitle>
                                    <DialogDescription>
                                      AI-Generated Summary and Analysis • {selectedDocument?.department}
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="space-y-6">
                                    <div>
                                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        AI Summary
                                      </h4>
                                      <p className="text-muted-foreground leading-relaxed">
                                        {selectedDocument?.summary} This comprehensive document outlines 
                                        the updated protocols and procedures to ensure safe operations 
                                        across all metro facilities. Key changes include enhanced crowd 
                                        management strategies and revised emergency response procedures.
                                      </p>
                                    </div>
                                    
                                    <div>
                                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        Key Action Items
                                      </h4>
                                      <ul className="space-y-2 text-sm">
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-warning rounded-full" />
                                          Review and implement new crowd management protocols
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-primary rounded-full" />
                                          Schedule staff training for emergency procedures
                                        </li>
                                        <li className="flex items-center gap-2">
                                          <div className="w-2 h-2 bg-success rounded-full" />
                                          Update safety signage across all stations
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        Important Deadlines
                                      </h4>
                                      <div className="space-y-2 text-sm">
                                        <div className="flex justify-between p-2 bg-muted/50 rounded">
                                          <span>Implementation review</span>
                                          <span className="text-warning font-medium">March 15, 2025</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-muted/50 rounded">
                                          <span>Staff certification</span>
                                          <span className="text-primary font-medium">April 1, 2025</span>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="flex gap-3 pt-4 border-t">
                                      <Button variant="gradient" size="sm">
                                        <Download className="h-4 w-4 mr-2" />
                                        Download Summary
                                      </Button>
                                      <Button variant="outline" size="sm">
                                        <Globe className="h-4 w-4 mr-2" />
                                        Translate
                                      </Button>
                                      <Button variant="outline" size="sm">
                                        <FileText className="h-4 w-4 mr-2" />
                                        View Source
                                      </Button>
                                    </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
                              <Button variant="ghost" size="sm">
                                <Globe className="h-4 w-4 mr-2" />
                                Translate
                              </Button>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Pending Actions & Deadlines */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      Pending Actions
                    </CardTitle>
                    <CardDescription>Urgent tasks and upcoming deadlines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-destructive">Safety Review Due</p>
                        <Badge variant="destructive" className="text-xs">Today</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Platform safety assessment required</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-warning">Maintenance Schedule</p>
                        <Badge variant="secondary" className="text-xs">2 days</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Q1 maintenance planning deadline</p>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-primary">Compliance Report</p>
                        <Badge variant="secondary" className="text-xs">5 days</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">Environmental standards review</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Notifications */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Recent Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors cursor-pointer">
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
                    <Button variant="outline" size="sm" className="w-full">
                      View All Notifications
                    </Button>
                  </CardContent>
                </Card>

                {/* Analytics Summary */}
                <Card variant="elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Weekly Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Processing Efficiency</span>
                        <span className="font-medium">94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Compliance Score</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Response Time</span>
                        <span className="font-medium">87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      View Full Report
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;