import { Sparkles, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const benefits = [
    "Kostenlose Erstberatung",
    "Faire und transparente Preise",
    "Umweltfreundliche Reinigungsmittel",
    "Zuverlässig und pünktlich",
  ];

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Professionelle Fensterreinigung</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kristallklare <span className="text-primary">Fenster</span> für Ihr Zuhause und Büro
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Professionelle Fenster- und Glasreinigung in Münster und Umgebung. 
              Zuverlässig, gründlich und zu fairen Preisen.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 text-center font-semibold"
              >
                Kostenloses Angebot anfordern
              </a>
              <a
                href="tel:+4925112345678"
                className="px-8 py-4 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors duration-200 text-center font-semibold"
              >
                Jetzt anrufen: 0251 123 456 78
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              ⭐ Über 500 zufriedene Kunden in Münster
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Sparkles className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-primary">Ihre Fenster</p>
                  <p className="text-xl">in besten Händen</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-lg shadow-lg">
              <p className="font-bold">Seit 2015</p>
              <p className="text-sm">für Sie da!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}