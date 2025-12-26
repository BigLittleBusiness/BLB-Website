/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Contact: Light section with prominent CTA
 * Gold gradient button for conversion focus
 * Includes math captcha for spam protection
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import MathCaptcha from "./MathCaptcha";
import { toast } from "sonner";

type ProductType = "GrantMaestro" | "Wellness App" | "GrantThrive" | "Multiple Products";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    product: "" as ProductType | "",
    message: "",
  });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = trpc.demo.submit.useMutation({
    onSuccess: (data) => {
      if (data.success) {
        setIsSubmitted(true);
        toast.success(data.message || "Demo request submitted successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          organisation: "",
          product: "",
          message: "",
        });
        setCaptchaVerified(false);
      } else {
        toast.error(data.error || "Failed to submit. Please try again.");
      }
    },
    onError: (error) => {
      toast.error(error.message || "An error occurred. Please try again.");
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaVerified) {
      toast.error("Please complete the security check.");
      return;
    }

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    submitMutation.mutate({
      name: formData.name.trim(),
      email: formData.email.trim(),
      organisation: formData.organisation.trim() || undefined,
      product: formData.product as ProductType || undefined,
      message: formData.message.trim() || undefined,
    });
  };

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
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    Thank You!
                  </h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    Your demo request has been received. We'll be in touch within 24 hours 
                    to schedule your personalised demonstration.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    Book a Demo
                  </h3>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    See our platforms in action. Schedule a personalised demo with 
                    our team and discover how we can help your organisation succeed.
                  </p>

                  {/* Form */}
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name *"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address *"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleInputChange}
                        placeholder="Organisation"
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <select
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-gold transition-colors appearance-none"
                        style={{ color: formData.product ? 'white' : 'rgba(255,255,255,0.5)' }}
                      >
                        <option value="" className="text-gray-900">
                          Interested in...
                        </option>
                        <option value="GrantMaestro" className="text-gray-900">GrantMaestro</option>
                        <option value="Wellness App" className="text-gray-900">Wellness App</option>
                        <option value="GrantThrive" className="text-gray-900">GrantThrive</option>
                        <option value="Multiple Products" className="text-gray-900">Multiple Products</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your needs (optional)"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors resize-none"
                      />
                    </div>

                    {/* Captcha */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <MathCaptcha
                        onVerified={setCaptchaVerified}
                        className="[&_label]:text-white/70 [&_span]:text-white [&_input]:bg-white/10 [&_input]:border-white/20 [&_input]:text-white [&_button]:text-white/50 [&_button:hover]:text-white"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitMutation.isPending || !captchaVerified}
                      className="w-full gold-gradient text-[#0D0D0D] font-semibold py-6 text-lg hover:gold-glow transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Request Demo
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="text-white/40 text-sm mt-6 text-center">
                    We'll get back to you within 24 hours
                  </p>
                </>
              )}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gold/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
