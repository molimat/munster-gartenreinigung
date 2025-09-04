"use client";

import { useState } from "react";
import { Camera } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "Alle Projekte" },
    { id: "residential", name: "Privathaushalte" },
    { id: "commercial", name: "Gewerbe" },
    { id: "special", name: "Spezialreinigung" },
  ];

  const galleryItems = [
    {
      id: "1",
      category: "residential",
      title: "Einfamilienhaus Gievenbeck",
      description: "Komplette Fensterreinigung",
    },
    {
      id: "2",
      category: "commercial",
      title: "Bürogebäude Hafen",
      description: "Glasfassadenreinigung",
    },
    {
      id: "3",
      category: "residential",
      title: "Wintergarten Hiltrup",
      description: "Innen- und Außenreinigung",
    },
    {
      id: "4",
      category: "commercial",
      title: "Einzelhandel Innenstadt",
      description: "Schaufensterreinigung",
    },
    {
      id: "5",
      category: "special",
      title: "Solaranlage Roxel",
      description: "Professionelle Modulreinigung",
    },
    {
      id: "6",
      category: "residential",
      title: "Mehrfamilienhaus Kinderhaus",
      description: "Treppenhausreinigung",
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Unsere <span className="text-primary">Referenzen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Camera className="h-12 w-12 text-primary/30" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                Vorher/Nachher
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Möchten Sie Ihr Projekt hier sehen?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
          >
            Jetzt Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}