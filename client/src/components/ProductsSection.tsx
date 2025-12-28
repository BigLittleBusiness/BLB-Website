/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Products: Light background with floating product cards
 * Each product has distinct color accent while maintaining brand consistency
 */

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, FileCheck, Heart, Users, Clock, DollarSign, Target, Bell, FolderSearch, Users2, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const products = [
  {
    name: "GrantMaestro",
    tagline: "Master your grants",
    description:
      "Too many grants, no system? Manage every application in one place and let your team contribute with ease. Never miss a deadline or lose funds again.",
    benefits: [
      { icon: Clock, text: "Save hours on grant administration" },
      { icon: Users2, text: "Keep your team in sync with real-time collaboration" },
      { icon: Target, text: "Focus efforts where they matter most with clear insights" },
      { icon: Bell, text: "Automate reminders for deadlines, reports, and renewals" },
      { icon: FolderSearch, text: "Find any grant file or email in seconds" },
    ],
    url: "https://www.grantmaestro.com",
    internalUrl: "/products/grantmaestro",
    image: "/images/grant-maestro-dashboard.png",
    icon: FileCheck,
    accent: "from-[#0A2540] to-[#1E3A5F]",
    iconBg: "bg-[#0A2540]",
  },
  {
    name: "Wellness App",
    tagline: "Your early warning system for staff wellbeing",
    description:
      "A smoke detector for your staff's state of being. While the app cannot determine the reason for a staff member's wellbeing concerns, it alerts you to issues that may need further attention and care.",
    benefits: [
      { icon: Heart, text: "Engage staff on issues impacting their lives" },
      { icon: Bell, text: "Receive early alerts when staff may need support" },
      { icon: Target, text: "Identify trends before they become problems" },
      { icon: Users2, text: "Build a culture of care and openness" },
      { icon: Sparkles, text: "Empower proactive wellbeing management" },
    ],
    url: "https://www.wellnessapp.com.au",
    internalUrl: "/products/wellnessapp",
    image: "/images/wellness-app-dashboard.png",
    icon: Heart,
    accent: "from-[#0D7377] to-[#14919B]",
    iconBg: "bg-[#0D7377]",
  },
  {
    name: "GrantThrive",
    tagline: "Communities that flourish",
    description:
      "Achieve greater community impact while reducing operational costs. A modern, intuitive platform that eliminates hours of frustrating administrative work.",
    benefits: [
      { icon: DollarSign, text: "Reduce annual operational expenditure" },
      { icon: Clock, text: "Eliminate hours of administrative burden" },
      { icon: Target, text: "Enhance digital transformation goals" },
      { icon: Users2, text: "Empower staff to focus on community engagement" },
      { icon: HandHeart, text: "Simple, transparent process for applicants" },
    ],
    url: "https://www.grantthrive.com",
    internalUrl: "/products/grantthrive",
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
            Our Platforms
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6">
            Save time. Save money.{" "}
            <span className="text-gold">Make an impact.</span>
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            Purpose-built SaaS solutions designed to eliminate administrative burden 
            and help you focus on what matters most—your community, your people, 
            and your mission.
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

                <ul className="space-y-3 mb-8">
                  {product.benefits.map((benefit) => (
                    <li key={benefit.text} className="flex items-center gap-3 text-[#333333]">
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-4 h-4 text-gold" />
                      </div>
                      {benefit.text}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  <Link href={product.internalUrl}>
                    <Button
                      className={`bg-gradient-to-r ${product.accent} text-white font-semibold group`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-[#333333] hover:bg-gray-50 group"
                    asChild
                  >
                    <a href={product.url} target="_blank" rel="noopener noreferrer">
                      Visit {product.name}
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <Link href={product.internalUrl}>
                  <div className="relative cursor-pointer group">
                    {/* Decorative gradient background */}
                    <div
                      className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${product.accent} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
                    />
                    <div className="relative floating-card rounded-2xl overflow-hidden bg-white border border-gray-100 group-hover:border-gray-200 transition-colors">
                      <img
                        src={product.image}
                        alt={`${product.name} Dashboard`}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
