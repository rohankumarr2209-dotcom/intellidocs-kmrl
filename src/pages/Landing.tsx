import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Train, FileText, Brain, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import heroImage from "@/assets/metro-hero-bg.jpg";
import metro1 from "@/assets/metro-1.jpg";
import metro2 from "@/assets/metro-2.jpg";
import metro3 from "@/assets/metro-3.jpg";
import metro4 from "@/assets/metro-4.jpg";
import kmrlLogo from "@/assets/kmrl-logo.png";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Landing = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [metro1, metro2, metro3, metro4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  
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
              <h1 className="text-xl font-bold text-foreground">{t('nav.title')}</h1>
              <p className="text-xs text-muted-foreground">{t('nav.subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button variant="gradient" asChild>
              <Link to="/login">{t('nav.login')}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 py-20">
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('hero.description')}
            </p>
            
            <div className="flex justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/login">{t('hero.signIn')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('features.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/login">
              <Card variant="elevated" className="text-center p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t('features.aiSummarization')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.aiSummarizationDesc')}
                </p>
              </Card>
            </Link>
            
            <Link to="/login">
              <Card variant="elevated" className="text-center p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t('features.smartClassification')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.smartClassificationDesc')}
                </p>
              </Card>
            </Link>
            
            <Link to="/login">
              <Card variant="elevated" className="text-center p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t('features.complianceTracking')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.complianceTrackingDesc')}
                </p>
              </Card>
            </Link>
            
            <Link to="/login">
              <Card variant="elevated" className="text-center p-6 hover:scale-105 transition-transform cursor-pointer">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Train className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{t('features.metroOperations')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('features.metroOperationsDesc')}
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* YouTube Video */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/qmd699rPwn0"
                title="Kochi Metro Official"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                {t('cta.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('cta.description')}
              </p>
              <Button variant="gradient" size="xl" asChild>
                <Link to="/login">{t('cta.getStarted')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;