/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Products: Light background with floating product cards
 * Each product has distinct color accent while maintaining brand consistency
 */

import { motion } from "framer-motion";
import { ArrowUpRight, FileCheck, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "GrantMaestro",
    tagline: "Master your grants",
    description:
      "Comprehensive grant management software built for local government. Streamline applications, track compliance, and maximise funding outcomes.",
    features: ["Application Management", "Compliance Tracking", "Reporting & Analytics", "Audit Ready"],
    url: "https://www.grantmaestro.com",
    image: "/images/grant-maestro-dashboard.png",
    icon: FileCheck,
    accent: "from-[#0A2540] to-[#1E3A5F]",
    iconBg: "bg-[#0A2540]",
  },
  {
    name: "Wellness App",
    tagline: "Empower your people",
    description:
      "Employee wellness platform that drives engagement and improves wellbeing. Build a healthier, happier, more productive workforce.",
    features: ["Health Challenges", "Mental Wellness", "Engagement Analytics", "Team Leaderboards"],
    url: "https://www.wellnessapp.com.au",
    image: "/images/wellness-app-dashboard.png",
    icon: Heart,
    accent: "from-[#0D7377] to-[#14919B]",
    iconBg: "bg-[#0D7377]",
  },
  {
    name: "GrantThrive",
    tagline: "Communities that flourish",
    description:
      "Community development grant platform designed for economic developers. Track impact, visualise outcomes, and grow thriving communities.",
    features: ["Impact Metrics", "Grant Distribution Maps", "Pipeline Management", "Community Reporting"],
    url: "https://www.grantthrive.com",
    image: "/images/grant-thrive-dashboard.png",
    icon: Users,
    accent: "from-[#2D6A4F] to-[#40916C]",
    iconBg: "bg-[#2D6A4F]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[#FAFAFA]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold font-medium text-sm mb-6">
            Our Products
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6">
            Three platforms.{" "}
            <span className="text-gold">One mission.</span>
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            Purpose-built SaaS solutions that help government and HR professionals 
            achieve more with less. Each platform is designed to solve real problems 
            for real organisations.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${product.iconBg} flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-[#0D0D0D]">
                      {product.name}
                    </h3>
                    <p className="text-[#666666]">{product.tagline}</p>
                  </div>
                </div>

                <p className="text-lg text-[#444444] mb-8 leading-relaxed">
                  {product.description}
                </p>

                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-[#333333]">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className={`bg-gradient-to-r ${product.accent} text-white font-semibold group`}
                  asChild
                >
                  <a href={product.url} target="_blank" rel="noopener noreferrer">
                    Visit {product.name}
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative">
                  {/* Decorative gradient background */}
                  <div
                    className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${product.accent} opacity-10 blur-2xl`}
                  />
                  <div className="relative floating-card rounded-2xl overflow-hidden bg-white border border-gray-100">
                    <img
                      src={product.image}
                      alt={`${product.name} Dashboard`}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
