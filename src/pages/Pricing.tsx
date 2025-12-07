import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "$499",
    period: "/month",
    description: "Perfect for small businesses getting started",
    features: [
      "Unlimited administrator login",
      "Unlimited manager login",
      "Unlimited surveys",
      "AI analysis and recommendations",
      "Report export",
      "Segment your teams",
      "Anonymous comments",
      "Basic support"
    ],
    buttonText: "Select This Plan",
    popular: false
  },
  {
    name: "Pro",
    price: "$999",
    period: "/month",
    description: "Ideal for growing mid-sized companies",
    features: [
      "Everything in Basic",
      "Advanced analytics dashboard",
      "Custom integrations",
      "Priority support",
      "Advanced reporting",
      "API access",
      "White-label options",
      "Dedicated account manager"
    ],
    buttonText: "Select This Plan",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Pro",
      "Custom implementation",
      "On-premise deployment",
      "24/7 dedicated support",
      "Custom training programs",
      "SLA guarantees",
      "Advanced security features",
      "Multi-region support"
    ],
    buttonText: "Contact Us",
    popular: false
  },
];

const featureComparison = [
  { feature: "Administrator Login", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Manager Login", basic: "Unlimited", pro: "Unlimited", enterprise: "Unlimited" },
  { feature: "Unlimited surveys", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "AI analysis and recommendations", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Report export", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Segment your teams", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Anonymous comments", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "Software", basic: "✓", pro: "✓", enterprise: "✓" },
  { feature: "API add-on", basic: "Contact Us", pro: "✓", enterprise: "✓" },
  { feature: "White-label add-on", basic: "Contact Us", pro: "Contact Us", enterprise: "✓" },
  { feature: "Custom integrations", basic: "Contact Us", pro: "✓", enterprise: "✓" },
  { feature: "Dedicated support", basic: "Standard", pro: "Priority", enterprise: "24/7" },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-soft-gradient" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                Pricing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple and Transparent Pricing
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Select the best plan for you, ensuring a perfect match for your business needs.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                    isAnnual ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                      isAnnual ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annual <span className="text-primary">(15% OFF)</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-3xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 text-white border-2 border-transparent'
                      : 'bg-card border border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-purple-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-4 ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.popular ? 'text-white' : 'text-primary'
                        }`} />
                        <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-foreground'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-white text-purple-600 hover:bg-white/90'
                        : 'bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white hover:opacity-90'
                    }`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold text-foreground">Features</th>
                      <th className="text-center p-4 font-semibold text-foreground">Basic</th>
                      <th className="text-center p-4 font-semibold text-foreground">Pro</th>
                      <th className="text-center p-4 font-semibold text-foreground">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((row, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="p-4 text-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.basic}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.pro}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  All prices are excl. VAT. Implementation services available at $5,000-$15,000.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Book a short meeting and see how SILO can streamline your business processes.
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
                Book a Meeting
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

