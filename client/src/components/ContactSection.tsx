/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Contact: Light section with prominent CTA
 * Gold gradient button for conversion focus
 */

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold font-medium text-sm mb-6">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
              Ready to transform your{" "}
              <span className="text-gold">organisation?</span>
            </h2>
            <p className="text-lg text-[#666666] mb-10 leading-relaxed">
              Whether you're looking to streamline grant management, boost employee 
              wellness, or drive community development, we're here to help. Get in 
              touch to discuss how our platforms can work for you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#0D0D0D]" />
                </div>
                <div>
                  <p className="font-medium text-[#0D0D0D] mb-1">Email Us</p>
                  <a
                    href="mailto:hello@biglittlebusiness.com"
                    className="text-[#666666] hover:text-gold transition-colors"
                  >
                    hello@biglittlebusiness.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#0D0D0D]" />
                </div>
                <div>
                  <p className="font-medium text-[#0D0D0D] mb-1">Call Us</p>
                  <a
                    href="tel:+61390001234"
                    className="text-[#666666] hover:text-gold transition-colors"
                  >
                    +61 3 9000 1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#0D0D0D]" />
                </div>
                <div>
                  <p className="font-medium text-[#0D0D0D] mb-1">Location</p>
                  <p className="text-[#666666]">
                    Melbourne, Australia
                    <br />
                    Serving AU & NZ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-dark rounded-2xl p-8 lg:p-12">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                Book a Demo
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                See our platforms in action. Schedule a personalised demo with 
                our team and discover how we can help your organisation succeed.
              </p>

              {/* Simple Form */}
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Organisation"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white/50 focus:outline-none focus:border-gold transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Interested in...
                    </option>
                    <option value="grantmaestro">GrantMaestro</option>
                    <option value="wellnessapp">Wellness App</option>
                    <option value="grantthrive">GrantThrive</option>
                    <option value="multiple">Multiple Products</option>
                  </select>
                </div>
                <Button
                  type="submit"
                  className="w-full gold-gradient text-[#0D0D0D] font-semibold py-6 text-lg hover:gold-glow transition-all group"
                >
                  Request Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-white/40 text-sm mt-6 text-center">
                We'll get back to you within 24 hours
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
