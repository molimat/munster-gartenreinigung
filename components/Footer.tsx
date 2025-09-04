import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kristallklar Fensterreinigung</h3>
            <p className="text-background/80">
              Ihr zuverlässiger Partner für professionelle Fenster- und Glasreinigung in Münster und Umgebung.
            </p>
            <div className="mt-4">
              <p className="text-sm text-background/80">
                Seit 2015 für Sie da!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a href="tel:+4925112345678" className="flex items-center gap-2 text-background/80 hover:text-background">
                <Phone className="h-4 w-4" />
                +49 251 123 456 78
              </a>
              <a href="mailto:info@kristallklar-muenster.de" className="flex items-center gap-2 text-background/80 hover:text-background">
                <Mail className="h-4 w-4" />
                info@kristallklar-muenster.de
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  Beispielstraße 123<br />
                  48143 Münster
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2 text-background/80">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Servicezeiten:</span>
              </div>
              <p>Montag - Freitag: 07:00 - 18:00</p>
              <p>Samstag: 08:00 - 14:00</p>
              <p>Sonntag: Geschlossen</p>
              <p className="text-sm mt-3">
                Notfälle und Sondertermine nach Vereinbarung
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} Kristallklar Fensterreinigung. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <a href="#" className="hover:text-background">Impressum</a>
              <a href="#" className="hover:text-background">Datenschutz</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}