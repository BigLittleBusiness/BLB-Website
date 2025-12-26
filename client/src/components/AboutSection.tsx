/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * About: Dark section with team image and value propositions
 * High contrast for visual impact
 */

import { motion } from "framer-motion";
import { Shield, Zap, Users, Target } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Built for Government",
    description:
      "Our platforms are designed with the unique requirements of local government in mind—compliance, transparency, and accountability.",
  },
  {
    icon: Zap,
    title: "Efficiency First",
    description:
      "We help organisations do more with less. Our tools streamline workflows and eliminate manual processes.",
  },
  {
    icon: Users,
    title: "People-Centred",
    description:
      "Whether it's grant applicants or employees, we put people at the heart of every solution we build.",
  },
  {
    icon: Target,
    title: "Focused on Impact",
    description:
      "Every feature we build is designed to save time, reduce costs, and help you achieve meaningful outcomes.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold font-medium text-sm mb-6">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Empowering organisations to{" "}
              <span className="text-gold">make a difference</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              Big Little Business was founded with a simple belief: that the right 
              technology can transform how organisations serve their communities. 
              We're on a mission to eliminate administrative burden and help teams 
              focus on what truly matters—making an impact.
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Our three platforms—GrantMaestro, Wellness App, and GrantThrive—are 
              purpose-built for <strong className="text-white">Philanthropic organisations</strong>, <strong className="text-white">Not-For-Profits</strong>, 
              and <strong className="text-white">Councils across Australia and New Zealand</strong>. We understand 
              the unique challenges you face, and we've built solutions to solve them.
            </p>

            {/* Mission Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-display font-bold text-gold">3</p>
                <p className="text-sm text-white/50 mt-1">SaaS Platforms</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">AU & NZ</p>
                <p className="text-sm text-white/50 mt-1">Market Focus</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-white">100%</p>
                <p className="text-sm text-white/50 mt-1">Australian Made</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/team-collaboration.png"
                alt="Team collaboration"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
            </div>
            {/* Floating card - Mission focused */}
            <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-white shadow-2xl max-w-xs">
              <p className="font-display font-bold text-[#0D0D0D] mb-2">
                Our Mission
              </p>
              <p className="text-sm text-[#666666]">
                To help organisations save time, reduce costs, and focus on serving their communities.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {value.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
