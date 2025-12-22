/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Testimonials: Light section with client testimonials for social proof
 * Builds trust with target audience
 */

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GrantMaestro has completely transformed how we manage our community grants. The compliance tracking alone has saved us countless hours.",
    author: "Sarah Mitchell",
    role: "Grants Manager",
    organisation: "City of Melbourne",
    type: "council",
  },
  {
    quote:
      "The Wellness App has been a game-changer for our employee engagement. We've seen a 40% increase in participation in wellness activities.",
    author: "James Chen",
    role: "HR Director",
    organisation: "Auckland Council",
    type: "council",
  },
  {
    quote:
      "GrantThrive gives us the visibility we need to track community impact. The mapping features are particularly valuable for our economic development team.",
    author: "Emma Thompson",
    role: "Economic Development Officer",
    organisation: "Sunshine Coast Council",
    type: "council",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold font-medium text-sm mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6">
            Trusted by councils{" "}
            <span className="text-gold">across AU & NZ</span>
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say 
            about working with Big Little Business.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                  <Quote className="w-4 h-4 text-[#0D0D0D]" />
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#333333] leading-relaxed mb-6 mt-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D0D0D] to-[#333333] flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#0D0D0D]">{testimonial.author}</p>
                  <p className="text-sm text-[#666666]">
                    {testimonial.role}, {testimonial.organisation}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-gray-100"
        >
          <p className="text-center text-sm text-[#999999] mb-8">
            Trusted by local governments and organisations including
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "City of Melbourne",
              "Auckland Council",
              "Brisbane City Council",
              "Sunshine Coast Council",
              "Wellington City",
            ].map((org) => (
              <span
                key={org}
                className="text-[#AAAAAA] font-medium text-sm md:text-base"
              >
                {org}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
