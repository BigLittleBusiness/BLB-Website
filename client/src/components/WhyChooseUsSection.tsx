/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Why Choose Us: Highlight key benefits and value propositions
 * Focus on time, money, and effort savings
 */

import { motion } from "framer-motion";
import { Clock, DollarSign, Shield, Zap, HeartHandshake, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Countless Hours",
    description:
      "Eliminate repetitive administrative tasks with automation. What used to take days now takes minutes, freeing your team to focus on high-value work.",
    stat: "Hours",
    statLabel: "saved weekly",
  },
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description:
      "Streamlined processes mean lower overheads. Our platforms are designed to deliver ROI from day one through efficiency gains and reduced manual effort.",
    stat: "Costs",
    statLabel: "reduced significantly",
  },
  {
    icon: Zap,
    title: "Eliminate Complexity",
    description:
      "No more juggling spreadsheets, emails, and disconnected systems. Everything you need in one intuitive platform that your team will actually want to use.",
    stat: "Effort",
    statLabel: "dramatically reduced",
  },
  {
    icon: Shield,
    title: "Built for Government",
    description:
      "Security, compliance, and audit-readiness are built into every platform. Meet your regulatory requirements without the headache.",
    stat: "Compliance",
    statLabel: "made simple",
  },
  {
    icon: HeartHandshake,
    title: "Australian-Made Support",
    description:
      "Local support from people who understand the unique challenges of councils and organisations in Australia and New Zealand.",
    stat: "Support",
    statLabel: "when you need it",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description:
      "Our platforms evolve with your needs. Regular updates and new features ensure you're always equipped with the latest tools.",
    stat: "Innovation",
    statLabel: "built in",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function WhyChooseUsSection() {
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
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6">
            Your time is valuable.{" "}
            <span className="text-gold">We help you protect it.</span>
          </h2>
          <p className="text-lg text-[#666666] leading-relaxed">
            Every feature we build is designed with one goal in mind: helping you 
            save time, reduce costs, and focus on what truly matters—serving your 
            community and supporting your people.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-[#FAFAFA] border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0D0D0D] to-[#333333] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-[#0D0D0D] mb-3">
                {benefit.title}
              </h3>
              <p className="text-[#666666] leading-relaxed mb-6">
                {benefit.description}
              </p>

              {/* Stat Badge */}
              <div className="flex items-center gap-2">
                <span className="text-gold font-bold text-lg">{benefit.stat}</span>
                <span className="text-[#999999] text-sm">{benefit.statLabel}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-[#0D0D0D]/5 border border-[#0D0D0D]/10">
            <span className="text-[#666666]">Ready to transform how you work?</span>
            <a
              href="#contact"
              className="text-gold font-semibold hover:underline"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
