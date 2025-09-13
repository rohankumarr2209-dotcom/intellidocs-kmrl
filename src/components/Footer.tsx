import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import kmrlLogo from "@/assets/kmrl-logo.png";
import heroImage from "@/assets/metro-hero-bg.jpg";

const Footer = () => {
  return (
    <footer className="relative border-t border-border bg-card overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white">
                <img src={kmrlLogo} alt="KMRL Logo" className="h-6 w-auto" />
              </div>
              <div>
                <div className="font-bold text-lg">IntelliDocs AI</div>
                <div className="text-sm text-muted-foreground">KMRL Smart Assistant</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              AI-powered document intelligence platform designed specifically for Kochi Metro Rail Limited operations and management.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/login" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Login</Link>
              <Link to="/register" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Register</Link>
              <Link to="/dashboard" className="block text-sm text-muted-foreground hover:text-primary transition-colors">Dashboard</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">AI Summarization</div>
              <div className="text-sm text-muted-foreground">Smart Classification</div>
              <div className="text-sm text-muted-foreground">Compliance Tracking</div>
              <div className="text-sm text-muted-foreground">Metro Operations</div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="text-sm text-muted-foreground">
                  KMRL Corporate Office<br />
                  Kochi Metro, Kerala, India
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="text-sm text-muted-foreground">
                  +91 484 123 4567
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="text-sm text-muted-foreground">
                  info@intellidocs.kmrl.in
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 IntelliDocs AI | Built for Smart India Hackathon | Powered by KMRL
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;