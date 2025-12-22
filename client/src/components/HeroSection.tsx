/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Hero: Dark background with oversized white typography
 * Gold accents for CTAs, abstract background image
 */

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/images/hero-abstract.png')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-transparent" />

      <div className="container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-sm text-white/80">Trusted by 150+ councils across AU & NZ</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Software that{" "}
              <span className="text-gold">empowers</span>{" "}
              communities
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-xl">
              Three powerful SaaS platforms designed for local government and HR professionals. 
              Streamline grants, boost wellness, and drive community development.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="gold-gradient text-[#0D0D0D] font-semibold text-lg px-8 py-6 hover:gold-glow transition-all group"
                asChild
              >
                <a href="#products">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 bg-transparent"
                asChild
              >
                <a href="#about">
                  <Play className="mr-2 w-5 h-5" />
                  Learn More
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <p className="text-sm text-white/50 mb-4">Serving organisations across</p>
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-display font-bold text-white">AU</span>
                  <span className="text-white/50">Australia</span>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-display font-bold text-white">NZ</span>
                  <span className="text-white/50">New Zealand</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-white/60 text-sm mb-2">Total Grants Managed</p>
              <p className="text-4xl font-display font-bold text-white">$2.4B+</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-white/60 text-sm mb-2">Active Users</p>
              <p className="text-3xl font-display font-bold text-gold">45,000+</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-white/60 text-sm mb-2">Client Satisfaction</p>
              <p className="text-3xl font-display font-bold text-white">98%</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/40 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
