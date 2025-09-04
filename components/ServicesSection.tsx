import { Home, Building2, Sun, Store, Droplets, Shield } from "lucide-react";
import { Service } from "@/types";

export default function ServicesSection() {
  const services: Service[] = [
    {
      id: "1",
      title: "Fensterreinigung Privat",
      description: "Professionelle Reinigung für Ihr Zuhause",
      icon: "Home",
      features: [
        "Fenster und Rahmen",
        "Rollläden und Jalousien",
        "Fensterbänke",
        "Insektenschutzgitter",
      ],
    },
    {
      id: "2",
      title: "Fensterreinigung Gewerbe",
      description: "Zuverlässiger Service für Büros und Geschäfte",
      icon: "Building2",
      features: [
        "Bürogebäude",
        "Praxen und Kanzleien",
        "Einzelhandel",
        "Regelmäßige Reinigung",
      ],
    },
    {
      id: "3",
      title: "Glasfassadenreinigung",
      description: "Moderne Technik für große Glasflächen",
      icon: "Shield",
      features: [
        "Glasfassaden",
        "Vordächer",
        "Glasdächer",
        "Schwer erreichbare Stellen",
      ],
    },
    {
      id: "4",
      title: "Wintergartenreinigung",
      description: "Gründliche Reinigung innen und außen",
      icon: "Sun",
      features: [
        "Glasdach reinigung",
        "Rahmen und Profile",
        "Markisen",
        "Entwässerungsrinnen",
      ],
    },
    {
      id: "5",
      title: "Schaufensterreinigung",
      description: "Perfekte Präsentation für Ihr Geschäft",
      icon: "Store",
      features: [
        "Schaufenster",
        "Eingangstüren",
        "Werbeschilder",
        "Regelmäßiger Service",
      ],
    },
    {
      id: "6",
      title: "Solaranlagenreinigung",
      description: "Maximale Effizienz durch saubere Module",
      icon: "Droplets",
      features: [
        "Schonende Reinigung",
        "Ertragssteigerung",
        "Langlebigkeit",
        "Umweltfreundlich",
      ],
    },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      Home,
      Building2,
      Sun,
      Store,
      Droplets,
      Shield,
    };
    const IconComponent = icons[iconName];
    return <IconComponent className="h-8 w-8 text-primary" />;
  };

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere <span className="text-primary">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professionelle Reinigungslösungen für jeden Bedarf - 
            zuverlässig, gründlich und zu fairen Preisen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{getIcon(service.icon)}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block text-primary font-semibold hover:underline"
              >
                Angebot anfordern →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}