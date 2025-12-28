import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Heart, 
  Mail, 
  Shield,
  Bell,
  BarChart3,
  Users,
  Activity,
  TrendingUp,
  MessageCircle,
  Lock,
  Smartphone,
  LineChart
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Activity,
    title: "Early Warning System",
    description: "Like a smoke detector for staff wellbeing. Get alerted to potential issues before they become serious problems.",
  },
  {
    icon: Heart,
    title: "Wellbeing Check-ins",
    description: "Simple, regular check-ins that help staff reflect on their state of being without intrusive questioning.",
  },
  {
    icon: TrendingUp,
    title: "Trend Identification",
    description: "Identify patterns and trends across your organisation to address systemic issues proactively.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Receive timely notifications when staff may need additional support or attention, enabling proactive care.",
  },
  {
    icon: MessageCircle,
    title: "Open Communication",
    description: "Build a culture of care and openness where staff feel comfortable sharing how they're doing.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Staff privacy is paramount. Aggregated insights protect individual responses while enabling organisational awareness.",
  },
];

const benefits = [
  {
    stat: "Early",
    label: "Detection",
    description: "Identify wellbeing concerns before they escalate",
  },
  {
    stat: "Better",
    label: "Culture",
    description: "Build a workplace where people feel supported",
  },
  {
    stat: "Proactive",
    label: "Care",
    description: "Move from reactive to proactive staff support",
  },
];

const capabilities = [
  {
    icon: Smartphone,
    title: "Staff Engagement",
    items: [
      "Simple, intuitive mobile interface",
      "Quick daily or weekly check-ins",
      "Anonymous feedback options",
      "Personal wellbeing tracking",
    ],
  },
  {
    icon: LineChart,
    title: "Manager Insights",
    items: [
      "Team wellbeing dashboards",
      "Trend analysis over time",
      "Department comparisons",
      "Early warning indicators",
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Security",
    items: [
      "Individual responses kept confidential",
      "Aggregated reporting only",
      "Role-based access controls",
      "Australian data sovereignty",
    ],
  },
  {
    icon: Users,
    title: "Organisational Health",
    items: [
      "Organisation-wide wellbeing metrics",
      "Identify areas needing attention",
      "Track improvement over time",
      "Support WHS compliance",
    ],
  },
];

const useCases = [
  {
    title: "For Council Leaders",
    description: "Gain visibility into organisational health and demonstrate duty of care to your workforce.",
    icon: BarChart3,
  },
  {
    title: "For HR Teams",
    description: "Proactively identify and support staff who may be struggling, before issues escalate.",
    icon: Users,
  },
  {
    title: "For Managers",
    description: "Understand your team's wellbeing and create a supportive environment for everyone.",
    icon: Heart,
  },
];

export default function WellnessApp() {
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
              href="https://www.wellnessapp.com.au" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                Visit Wellness App
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Heart className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-500 text-sm font-medium">Staff Wellbeing Platform</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-display">
              Your Early Warning System for <span className="text-emerald-500">Staff Wellbeing</span>
            </h1>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl">
              Like a smoke detector for your staff's state of being. While the app cannot determine the reason 
              for concerns, it alerts you to issues that may need further attention and care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                  Request a Demo
                </Button>
              </Link>
              <a 
                href="https://www.wellnessapp.com.au" 
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
                <div className="text-5xl font-bold text-emerald-500 mb-2">{benefit.stat}</div>
                <div className="text-xl font-semibold text-white mb-1">{benefit.label}</div>
                <div className="text-zinc-400">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
              Built for Everyone in Your Organisation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From leadership to frontline staff, Wellness App helps everyone engage on the important issues that impact their lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                  <useCase.icon className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
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
              Features That Make a Difference
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Simple yet powerful tools designed to help you support your staff's wellbeing.
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
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-500" />
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
              Comprehensive Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build a culture of care and support staff wellbeing.
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
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">{capability.title}</h3>
                </div>
                <ul className="space-y-3">
                  {capability.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
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
              Ready to Support Your Staff?
            </h2>
            <p className="text-lg text-zinc-400 mb-8">
              Join organisations across Australia and New Zealand who are building healthier, more supportive workplaces with Wellness App.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Request a Demo
                </Button>
              </Link>
              <a 
                href="https://www.wellnessapp.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                  Visit Wellness App
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
