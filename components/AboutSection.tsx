import { Award, Users, Clock, Leaf } from "lucide-react";

export default function AboutSection() {
  const stats = [
    {
      icon: Clock,
      value: "8+",
      label: "Jahre Erfahrung",
    },
    {
      icon: Users,
      value: "500+",
      label: "Zufriedene Kunden",
    },
    {
      icon: Award,
      value: "100%",
      label: "Kundenzufriedenheit",
    },
    {
      icon: Leaf,
      value: "Eco",
      label: "Umweltfreundlich",
    },
  ];

  return (
    <section id="about" className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Über <span className="text-primary">Kristallklar</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Seit 2015 sind wir Ihr zuverlässiger Partner für professionelle Fenster- und 
              Glasreinigung in Münster und Umgebung. Mit modernster Technik und umweltfreundlichen 
              Reinigungsmitteln sorgen wir für kristallklare Ergebnisse.
            </p>

            <p className="text-lg text-muted-foreground mb-6">
              Unser erfahrenes Team besteht aus geschulten Fachkräften, die mit Präzision und 
              Sorgfalt arbeiten. Wir legen großen Wert auf Pünktlichkeit, Zuverlässigkeit und 
              absolute Kundenzufriedenheit.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Qualität die überzeugt</h4>
                  <p className="text-muted-foreground">
                    Wir verwenden nur hochwertige, umweltfreundliche Reinigungsmittel und moderne Technik.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Faire Preise</h4>
                  <p className="text-muted-foreground">
                    Transparente Preisgestaltung ohne versteckte Kosten - Sie zahlen nur was vereinbart wurde.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Flexibler Service</h4>
                  <p className="text-muted-foreground">
                    Ob einmalige Reinigung oder regelmäßiger Service - wir passen uns Ihren Bedürfnissen an.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <stat.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-primary text-primary-foreground rounded-lg p-6">
              <h4 className="text-xl font-bold mb-3">Warum Kristallklar?</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Versichert und zertifiziert
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Moderne und umweltfreundliche Technik
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Geschultes Fachpersonal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xl">✓</span>
                  Termingerecht und zuverlässig
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}