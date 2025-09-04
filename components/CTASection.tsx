import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
      <div className="container mx-auto px-4">
        <div className="text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit für kristallklare Fenster?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. 
            Wir melden uns innerhalb von 2 Stunden bei Ihnen!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors duration-200 font-semibold"
            >
              Kostenloses Angebot anfordern
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="tel:+4925112345678"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-primary transition-colors duration-200 font-semibold"
            >
              <Phone className="h-5 w-5" />
              Direkt anrufen: 0251 123 456 78
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Kostenlose Beratung</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Faire Preise</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Schneller Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}