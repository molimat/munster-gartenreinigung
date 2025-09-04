"use client";

import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Startseite", href: "#home" },
    { name: "Leistungen", href: "#services" },
    { name: "Über uns", href: "#about" },
    { name: "Galerie", href: "#gallery" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-center sm:justify-end items-center gap-6 text-sm">
          <a href="tel:+4925112345678" className="flex items-center gap-2 hover:opacity-80">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+49 251 123 456 78</span>
            <span className="sm:hidden">Anrufen</span>
          </a>
          <a href="mailto:info@kristallklar-muenster.de" className="flex items-center gap-2 hover:opacity-80">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">info@kristallklar-muenster.de</span>
            <span className="sm:hidden">E-Mail</span>
          </a>
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-primary">
              Kristallklar
            </a>
          </div>

          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200"
            >
              Angebot anfordern
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Angebot anfordern
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}