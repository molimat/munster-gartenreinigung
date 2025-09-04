import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types";

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Maria Schmidt",
      rating: 5,
      comment: "Absolut zuverlässig und gründlich! Unsere Fenster waren noch nie so sauber. Kann Kristallklar nur weiterempfehlen!",
      date: "Oktober 2024",
    },
    {
      id: "2",
      name: "Thomas Müller",
      rating: 5,
      comment: "Professioneller Service zu fairen Preisen. Das Team ist pünktlich, freundlich und arbeitet sehr sorgfältig.",
      date: "September 2024",
    },
    {
      id: "3",
      name: "Dr. Anna Weber",
      rating: 5,
      comment: "Wir nutzen den Service für unsere Praxis. Immer termingerecht und die Qualität ist hervorragend!",
      date: "November 2024",
    },
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was unsere <span className="text-primary">Kunden</span> sagen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Über 500 zufriedene Kunden vertrauen auf unseren Service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.comment}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Star className="h-5 w-5 fill-primary" />
            <span className="font-semibold">4.9/5 Bewertung bei Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}