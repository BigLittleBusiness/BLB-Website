import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Mail, 
  Shield,
  Users,
  TrendingUp,
  Sparkles,
  Globe,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  Building2,
  UserCheck,
  FileCheck
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: DollarSign,
    title: "Reduce Operational Costs",
    description: "Achieve greater community impact while reducing annual operational expenditure through streamlined processes.",
  },
  {
    icon: Clock,
    title: "Eliminate Admin Burden",
    description: "A modern, intuitive platform that eliminates hours of frustrating administrative work for council staff.",
  },
  {
    icon: Target,
    title: "Digital Transformation",
    description: "Enhance your digital transformation goals with a platform built for modern local government needs.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description: "Empower staff to focus on high-value community engagement instead of paperwork.",
  },
  {
    icon: FileCheck,
    title: "Simple Application Process",
    description: "Provide community applicants with a simple, transparent, and respectful funding process.",
  },
  {
    icon: Sparkles,
    title: "Encourage Participation",
    description: "Create an accessible process that encourages community participation in funding programs.",
  },
];

const benefits = [
  {
    stat: "Less",
    label: "Admin Time",
    description: "Dramatically reduce administrative overhead",
  },
  {
    stat: "Greater",
    label: "Impact",
    description: "Achieve more meaningful community outcomes",
  },
  {
    stat: "Better",
    label: "Experience",
    description: "For staff and community applicants alike",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "For Council Leaders",
    description: "Achieve greater community impact and enhance your digital transformation goals while reducing annual operational expenditure.",
    benefits: [
      "Reduce operational costs significantly",
      "Demonstrate digital transformation progress",
      "Improve community satisfaction",
      "Streamline grant program management",
    ],
  },
  {
    icon: UserCheck,
    title: "For Council Staff",
    description: "Eliminate hours of frustrating administrative work with a modern, intuitive platform that empowers you to focus on high-value community engagement.",
    benefits: [
      "Intuitive, easy-to-use interface",
      "Automated workflows save hours",
      "Focus on community, not paperwork",
      "Clear visibility of all applications",
    ],
  },
  {
    icon: Users,
    title: "For Community Applicants",
    description: "Access funding through a simple, transparent, and respectful process that encourages participation.",
    benefits: [
      "Simple, straightforward applications",
      "Transparent process and criteria",
      "Clear communication throughout",
      "Respectful, accessible experience",
    ],
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Grant Program Management",
    items: [
      "Create and manage multiple grant programs",
      "Customisable application forms",
      "Automated eligibility checking",
      "Multi-stage approval workflows",
    ],
  },
  {
    icon: TrendingUp,
    title: "Reporting & Analytics",
    items: [
      "Real-time program dashboards",
      "Community impact reporting",
      "Budget tracking and forecasting",
      "Compliance and audit reports",
    ],
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    items: [
      "Built-in compliance frameworks",
      "Complete audit trails",
      "Role-based access control",
      "Australian data sovereignty",
    ],
  },
  {
    icon: Lightbulb,
    title: "Applicant Experience",
    items: [
      "Mobile-friendly applications",
      "Save and resume functionality",
      "Status tracking for applicants",
      "Automated notifications",
    ],
  },
];

export default function GrantThrive() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <a 
              href="https://www.grantthrive.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-violet-500 hover:bg-violet-600 text-white font-semibold">
                Visit GrantThrive
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-abstract.png')] bg-cover bg-center opacity-30" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-violet-500" />
              <span className="text-violet-500 text-sm font-medium">Community Impact Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
              Communities That <span className="text-violet-500">Flourish</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              Achieve greater community impact while reducing operational costs. A modern platform that 
              eliminates administrative burden and creates better experiences for everyone.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-violet-500 hover:bg-violet-600 text-white font-semibold">
                  Request a Demo
                </Button>
              </Link>
              <a 
                href="https://www.grantthrive.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  Learn More
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-zinc-950 border-y border-zinc-800">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-violet-500 mb-2">{benefit.stat}</div>
                <div className="text-xl font-semibold text-white mb-1">{benefit.label}</div>
                <div className="text-zinc-400">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Built for Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              GrantThrive delivers value for council leaders, staff, and community applicants alike.
            </p>
          </motion.div>

          <div className="space-y-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-r from-violet-500/10 to-transparent border border-violet-500/20"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                        <audience.icon className="w-6 h-6 text-violet-500" />
                      </div>
                      <h3 className="text-2xl font-semibold text-foreground">{audience.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-lg">{audience.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {audience.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zinc-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Key Features
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Everything you need to manage community grants effectively and efficiently.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-violet-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-violet-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Comprehensive Platform
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful capabilities to transform how your council manages community grants.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-violet-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{capability.title}</h3>
                </div>
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-violet-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Ready to Transform Community Grants?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Join councils across Australia and New Zealand who are achieving greater community impact with GrantThrive.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-violet-500 hover:bg-violet-600 text-white font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Request a Demo
                </Button>
              </Link>
              <a 
                href="https://www.grantthrive.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  Visit GrantThrive
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Big Little Business. All rights reserved.
            </p>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Back to Big Little Business
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
