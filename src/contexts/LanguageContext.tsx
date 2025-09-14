import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Translation {
  [key: string]: string;
}

interface Translations {
  en: Translation;
  ml: Translation;
}

const translations: Translations = {
  en: {
    // Navigation
    'nav.title': 'IntelliDocs AI',
    'nav.subtitle': 'KMRL Smart Assistant',
    'nav.login': 'Login',
    'nav.getStarted': 'Get Started',
    
    // Hero Section
    'hero.badge': 'AI-Powered Document Intelligence',
    'hero.title': 'IntelliDocs AI',
    'hero.subtitle': 'Smart Document Assistant for KMRL',
    'hero.description': 'AI-powered platform to summarize, classify, and route operational documents for Kochi Metro Rail Limited. Streamline your document workflow with intelligent automation.',
    'hero.startTrial': 'Start Free Trial',
    'hero.signIn': 'Sign In',
    
    // Features Section
    'features.title': 'Intelligent Document Management',
    'features.description': 'Transform how KMRL handles operational documents with AI-powered insights and automation',
    'features.aiSummarization': 'AI Summarization',
    'features.aiSummarizationDesc': 'Instantly generate intelligent summaries of complex documents',
    'features.smartClassification': 'Smart Classification',
    'features.smartClassificationDesc': 'Automatically categorize and route documents to relevant departments',
    'features.complianceTracking': 'Compliance Tracking',
    'features.complianceTrackingDesc': 'Monitor regulatory compliance and deadline management',
    'features.metroOperations': 'Metro Operations',
    'features.metroOperationsDesc': 'Specialized for railway operations and maintenance workflows',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Document Workflow?',
    'cta.description': 'Join KMRL teams already using IntelliDocs AI to streamline operations and improve efficiency',
    'cta.getStarted': 'Get Started Today',
    
    // Footer
    'footer.description': 'AI-powered document intelligence platform designed specifically for Kochi Metro Rail Limited operations and management.',
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.login': 'Login',
    'footer.register': 'Register',
    'footer.dashboard': 'Dashboard',
    'footer.services': 'Services',
    'footer.aiSummarization': 'AI Summarization',
    'footer.smartClassification': 'Smart Classification',
    'footer.complianceTracking': 'Compliance Tracking',
    'footer.metroOperations': 'Metro Operations',
    'footer.contactInfo': 'Contact Info',
    'footer.address': 'KMRL Corporate Office\nKochi Metro, Kerala, India',
    'footer.phone': '+91 484 123 4567',
    'footer.email': 'info@intellidocs.kmrl.in',
    'footer.copyright': '© 2025 IntelliDocs AI | Built for Smart India Hackathon | Powered by KMRL',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
    'footer.support': 'Support',
  },
  ml: {
    // Navigation
    'nav.title': 'ഇന്റലിഡോക്സ് AI',
    'nav.subtitle': 'കെഎംആർഎൽ സ്മാർട്ട് അസിസ്റ്റന്റ്',
    'nav.login': 'ലോഗിൻ',
    'nav.getStarted': 'ആരംഭിക്കുക',
    
    // Hero Section
    'hero.badge': 'AI-പവർഡ് ഡോക്യുമെന്റ് ഇന്റലിജൻസ്',
    'hero.title': 'ഇന്റലിഡോക്സ് AI',
    'hero.subtitle': 'കെഎംആർഎലിനുള്ള സ്മാർട്ട് ഡോക്യുമെന്റ് അസിസ്റ്റന്റ്',
    'hero.description': 'കൊച്ചി മെട്രോ റെയിൽ ലിമിറ്റഡിന്റെ പ്രവർത്തന ഡോക്യുമെന്റുകൾ സംഗ്രഹിക്കാനും വർഗ്ഗീകരിക്കാനും റൂട്ട് ചെയ്യാനുമുള്ള AI-പവർഡ് പ്ലാറ്റ്ഫോം. ബുദ്ധിപരമായ ഓട്ടോമേഷൻ ഉപയോഗിച്ച് നിങ്ങളുടെ ഡോക്യുമെന്റ് വർക്ക്ഫ്ലോ കാര്യക്ഷമമാക്കുക.',
    'hero.startTrial': 'സൗജന്യ ട്രയൽ ആരംഭിക്കുക',
    'hero.signIn': 'സൈൻ ഇൻ',
    
    // Features Section
    'features.title': 'ബുദ്ധിപരമായ ഡോക്യുമെന്റ് മാനേജ്മെന്റ്',
    'features.description': 'AI-പവർഡ് ഇൻസൈറ്റുകളും ഓട്ടോമേഷനും ഉപയോഗിച്ച് കെഎംആർഎൽ പ്രവർത്തന ഡോക്യുമെന്റുകൾ കൈകാര്യം ചെയ്യുന്ന രീതി മാറ്റുക',
    'features.aiSummarization': 'AI സംഗ്രഹം',
    'features.aiSummarizationDesc': 'സങ്കീർണ്ണമായ ഡോക്യുമെന്റുകളുടെ ബുദ്ധിപരമായ സംഗ്രഹങ്ങൾ തൽക്ഷണം സൃഷ്ടിക്കുക',
    'features.smartClassification': 'സ്മാർട്ട് വർഗ്ഗീകരണം',
    'features.smartClassificationDesc': 'ഡോക്യുമെന്റുകൾ സ്വയമേവ വർഗ്ഗീകരിച്ച് ബന്ധപ്പെട്ട വകുപ്പുകളിലേക്ക് റൂട്ട് ചെയ്യുക',
    'features.complianceTracking': 'കംപ്ലയൻസ് ട്രാക്കിംഗ്',
    'features.complianceTrackingDesc': 'നിയന്ത്രണ പാലനയും സമയപരിധി മാനേജ്മെന്റും നിരീക്ഷിക്കുക',
    'features.metroOperations': 'മെട്രോ പ്രവർത്തനങ്ങൾ',
    'features.metroOperationsDesc': 'റെയിൽവേ പ്രവർത്തനങ്ങളും മെയിന്റനൻസ് വർക്ക്ഫ്ലോകളും വിശേഷവൽക്കരിച്ചത്',
    
    // CTA Section
    'cta.title': 'നിങ്ങളുടെ ഡോക്യുമെന്റ് വർക്ക്ഫ്ലോ പരിവർത്തനം ചെയ്യാൻ തയ്യാറാണോ?',
    'cta.description': 'പ്രവർത്തനങ്ങൾ കാര്യക്ഷമമാക്കാനും കാര്യക്ഷമത മെച്ചപ്പെടുത്താനും ഇതിനകം തന്നെ ഇന്റലിഡോക്സ് AI ഉപയോഗിക്കുന്ന കെഎംആർഎൽ ടീമുകളിൽ ചേരുക',
    'cta.getStarted': 'ഇന്ന് തന്നെ ആരംഭിക്കുക',
    
    // Footer
    'footer.description': 'കൊച്ചി മെട്രോ റെയിൽ ലിമിറ്റഡ് പ്രവർത്തനങ്ങൾക്കും മാനേജ്മെന്റിനുമായി പ്രത്യേകം രൂപകൽപ്പന ചെയ്ത AI-പവർഡ് ഡോക്യുമെന്റ് ഇന്റലിജൻസ് പ്ലാറ്റ്ഫോം.',
    'footer.quickLinks': 'ദ്രുത ലിങ്കുകൾ',
    'footer.home': 'ഹോം',
    'footer.login': 'ലോഗിൻ',
    'footer.register': 'രജിസ്റ്റർ',
    'footer.dashboard': 'ഡാഷ്ബോർഡ്',
    'footer.services': 'സേവനങ്ങൾ',
    'footer.aiSummarization': 'AI സംഗ്രഹം',
    'footer.smartClassification': 'സ്മാർട്ട് വർഗ്ഗീകരണം',
    'footer.complianceTracking': 'കംപ്ലയൻസ് ട്രാക്കിംഗ്',
    'footer.metroOperations': 'മെട്രോ പ്രവർത്തനങ്ങൾ',
    'footer.contactInfo': 'ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ',
    'footer.address': 'കെഎംആർഎൽ കോർപ്പറേറ്റ് ഓഫീസ്\nകൊച്ചി മെട്രോ, കേരളം, ഇന്ത്യ',
    'footer.phone': '+91 484 123 4567',
    'footer.email': 'info@intellidocs.kmrl.in',
    'footer.copyright': '© 2025 ഇന്റലിഡോക്സ് AI | സ്മാർട്ട് ഇന്ത്യ ഹാക്കത്തോണിനായി നിർമ്മിച്ചത് | കെഎംആർഎൽ പവർഡ്',
    'footer.privacyPolicy': 'സ്വകാര്യതാ നയം',
    'footer.termsOfService': 'സേവന നിബന്ധനകൾ',
    'footer.support': 'പിന്തുണ',
  }
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language as keyof Translations]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};