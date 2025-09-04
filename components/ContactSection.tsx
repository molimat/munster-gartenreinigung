import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Kontakt</span> aufnehmen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fordern Sie jetzt Ihr kostenloses Angebot an oder kontaktieren Sie uns direkt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Jetzt Anfrage senden</h3>
            <ContactForm />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Direkt kontaktieren</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <a href="tel:+4925112345678" className="text-primary hover:underline">
                    +49 251 123 456 78
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mo-Fr: 07:00 - 18:00 Uhr
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">WhatsApp</h4>
                  <a href="https://wa.me/4925112345678" className="text-primary hover:underline">
                    +49 251 123 456 78
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Schnelle Antwort garantiert
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <a href="mailto:info@kristallklar-muenster.de" className="text-primary hover:underline">
                    info@kristallklar-muenster.de
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">
                    Antwort innerhalb von 24 Stunden
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Adresse</h4>
                  <p className="text-muted-foreground">
                    Beispielstraße 123<br />
                    48143 Münster
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Servicezeiten</h4>
                  <p className="text-muted-foreground">
                    Montag - Freitag: 07:00 - 18:00<br />
                    Samstag: 08:00 - 14:00<br />
                    Sonntag: Geschlossen
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent">
              <h4 className="font-semibold mb-2 text-accent-foreground">
                💡 Tipp: Schnellere Bearbeitung
              </h4>
              <p className="text-sm text-muted-foreground">
                Nutzen Sie unser Kontaktformular für eine schnellere Bearbeitung. 
                Wir melden uns innerhalb von 2 Stunden bei Ihnen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}