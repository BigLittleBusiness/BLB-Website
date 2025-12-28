import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  FolderOpen, 
  Mail, 
  Search, 
  Users, 
  Zap,
  Bell,
  BarChart3,
  Shield,
  Cloud
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: FolderOpen,
    title: "Centralised Grant Management",
    description: "Manage every grant application in one place. No more scattered spreadsheets or lost emails—everything organised and accessible.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together in real time so everyone knows grant progress and what's due next. Assign tasks, share notes, and keep your team aligned.",
  },
  {
    icon: BarChart3,
    title: "Clear Reports & Insights",
    description: "Use clear reports and insights to focus your efforts where they matter most. Understand your grant portfolio at a glance.",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Never miss a deadline again. Automate reminders for deadlines, reports, and renewals so nothing slips through the cracks.",
  },
  {
    icon: Search,
    title: "Instant File Search",
    description: "Lost in paperwork? Securely store all grant files and emails for quick, easy access when you need them.",
  },
  {
    icon: Calendar,
    title: "Deadline Tracking",
    description: "Visual calendar view of all upcoming deadlines across your entire grant portfolio. Plan ahead with confidence.",
  },
];

const benefits = [
  {
    stat: "60%",
    label: "Time Saved",
    description: "Reduce time spent on grant administration",
  },
  {
    stat: "100%",
    label: "Deadline Compliance",
    description: "Never miss another grant deadline",
  },
  {
    stat: "3x",
    label: "Team Efficiency",
    description: "Improve collaboration across departments",
  },
];

const capabilities = [
  {
    icon: FileText,
    title: "Application Tracking",
    items: [
      "Track applications from draft to submission",
      "Monitor approval status in real-time",
      "Store all application documents securely",
      "Version control for all submissions",
    ],
  },
  {
    icon: Clock,
    title: "Reporting & Compliance",
    items: [
      "Automated reporting reminders",
      "Compliance tracking dashboards",
      "Audit trail for all activities",
      "Export reports in multiple formats",
    ],
  },
  {
    icon: Shield,
    title: "Security & Access",
    items: [
      "Role-based access control",
      "Secure document storage",
      "Activity logging and audit trails",
      "Data encryption at rest and in transit",
    ],
  },
  {
    icon: Cloud,
    title: "Integration & Access",
    items: [
      "Cloud-based access from anywhere",
      "Mobile-friendly interface",
      "Email integration for notifications",
      "API access for custom integrations",
    ],
  },
];

export default function GrantMaestro() {
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
              href="https://www.grantmaestro.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold">
                Visit GrantMaestro
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">Grant Management Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
              Master Your <span className="text-amber-500">Grants</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              Too many grants, no system? GrantMaestro helps you manage every application in one place, 
              keep your team in sync, and never miss a deadline again.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold">
                  Request a Demo
                </Button>
              </Link>
              <a 
                href="https://www.grantmaestro.com" 
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
                <div className="text-5xl font-bold text-amber-500 mb-2">{benefit.stat}</div>
                <div className="text-xl font-semibold text-white mb-1">{benefit.label}</div>
                <div className="text-zinc-400">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Everything You Need to Manage Grants
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Purpose-built features designed to eliminate administrative burden and help your team focus on securing funding.
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
                className="p-6 rounded-2xl bg-card border border-border hover:border-amber-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section className="py-20 bg-zinc-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Powerful Capabilities
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Comprehensive tools to handle every aspect of grant management.
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
                className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                </div>
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-zinc-950">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Ready to Master Your Grants?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join organisations across Australia and New Zealand who are saving time and never missing deadlines with GrantMaestro.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Request a Demo
                </Button>
              </Link>
              <a 
                href="https://www.grantmaestro.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-border hover:bg-accent">
                  Visit GrantMaestro
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
