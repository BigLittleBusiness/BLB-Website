/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Features: Highlight key benefits that resonate with target audience
 * Government and HR professionals value these specific outcomes
 */

import { motion } from "framer-motion";
import { 
  Clock, 
  Shield, 
  BarChart3, 
  Users, 
  Sparkles, 
  Headphones 
} from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Automate manual processes and reduce administrative burden significantly. Your team can focus on what matters most.",
  },
  {
    icon: Shield,
    title: "Stay Compliant",
    description:
      "Built-in compliance tracking and audit trails ensure you meet all regulatory requirements with confidence.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Comprehensive analytics and reporting give you the insights you need to make informed decisions.",
  },
  {
    icon: Users,
    title: "Engage Your Community",
    description:
      "Whether it's employees or grant applicants, our platforms create better experiences for everyone.",
  },
  {
    icon: Sparkles,
    title: "Modern & Intuitive",
    description:
      "Clean, user-friendly interfaces that your team will actually want to use. No complex training required.",
  },
  {
    icon: Headphones,
    title: "Local Support",
    description:
      "Australia and New Zealand-based support team who understand your unique challenges and requirements.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAFA]">
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
            Key Benefits
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6">
            Built for the way{" "}
            <span className="text-gold">you work</span>
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            Our platforms are designed specifically for local government and HR 
            professionals. We understand your challenges and have built 
            solutions to address them.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-gold/20 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0D0D0D] group-hover:bg-gold transition-colors flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-gold group-hover:text-[#0D0D0D] transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#0D0D0D] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#666666] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#666666] mb-4">
            Ready to see how we can help your organisation?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
          >
            Get in touch today
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
