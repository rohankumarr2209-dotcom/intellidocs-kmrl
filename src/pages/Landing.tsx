import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Train, FileText, Brain, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/metro-hero-bg.jpg";
import kmrlLogo from "@/assets/kmrl-logo.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white">
              <img src={kmrlLogo} alt="KMRL Logo" className="h-6 w-auto" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">IntelliDocs AI</h1>
              <p className="text-xs text-muted-foreground">KMRL Smart Assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="gradient" asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 py-20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                AI-Powered Document Intelligence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                IntelliDocs AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Smart Document Assistant for KMRL
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              AI-powered platform to summarize, classify, and route operational documents 
              for Kochi Metro Rail Limited. Streamline your document workflow with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Intelligent Document Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform how KMRL handles operational documents with AI-powered insights and automation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="elevated" className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">AI Summarization</h3>
              <p className="text-sm text-muted-foreground">
                Instantly generate intelligent summaries of complex documents
              </p>
            </Card>
            
            <Card variant="elevated" className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Smart Classification</h3>
              <p className="text-sm text-muted-foreground">
                Automatically categorize and route documents to relevant departments
              </p>
            </Card>
            
            <Card variant="elevated" className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Compliance Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor regulatory compliance and deadline management
              </p>
            </Card>
            
            <Card variant="elevated" className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Train className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Metro Operations</h3>
              <p className="text-sm text-muted-foreground">
                Specialized for railway operations and maintenance workflows
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Document Workflow?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join KMRL teams already using IntelliDocs AI to streamline operations and improve efficiency
          </p>
          <Button variant="glass" size="xl" asChild>
            <Link to="/register">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-white">
                <img src={kmrlLogo} alt="KMRL Logo" className="h-5 w-auto" />
              </div>
              <div>
                <div className="font-semibold">IntelliDocs AI</div>
                <div className="text-sm text-muted-foreground">© 2025 | Built for Smart India Hackathon</div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;