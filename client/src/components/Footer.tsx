/*
 * DESIGN: Bold Contrast — "Confident Authority"
 * Footer: Dark background with organized links
 * Gold accents for brand consistency
 */

import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { name: "GrantMaestro", url: "https://www.grantmaestro.com" },
  { name: "Wellness App", url: "https://www.wellnessapp.com.au" },
  { name: "GrantThrive", url: "https://www.grantthrive.com" },
];

const companyLinks = [
  { name: "About Us", url: "#about" },
  { name: "Contact", url: "#contact" },
  { name: "Privacy Policy", url: "/privacy" },
  { name: "Terms of Service", url: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/images/blb-logo.png" 
                alt="Big Little Business" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed mb-6">
              Empowering local governments and HR teams across Australia and 
              New Zealand with powerful SaaS solutions.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/40">Serving</span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                Australia
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-white text-sm">
                New Zealand
              </span>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Products</h4>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Big Little Business. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@biglittlebusiness.com"
              className="text-white/40 hover:text-gold text-sm transition-colors"
            >
              hello@biglittlebusiness.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
