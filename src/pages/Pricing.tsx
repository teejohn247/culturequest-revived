import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { openCalendly } from "@/lib/calendly";

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
    popular: false,
    color: "#FF7B6B"
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
    popular: true,
    color: "#FFD700"
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
    popular: false,
    color: "#9B59B6"
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-8">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span 
                className="inline-block px-4 py-2 rounded-full bg-primary text-foreground text-sm font-semibold uppercase tracking-wider mb-6 border-2 border-foreground"
              >
                Pricing
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Simple and{" "}
                <span className="inline-block px-3 py-1 rounded-lg bg-primary border-2 border-foreground">
                  Transparent
                </span>{" "}
                Pricing
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 px-4">
                Select the best plan for you, ensuring a perfect match for your business needs.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <span className={`text-sm font-medium ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors border-2 border-foreground ${
                    isAnnual ? 'bg-primary' : 'bg-muted'
                  }`}
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-foreground transition-transform ${
                      isAnnual ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Annual{" "}
                  <span 
                    className="inline-block px-2 py-0.5 rounded-full text-xs font-bold border border-foreground"
                    style={{ backgroundColor: '#40E0D0' }}
                  >
                    15% OFF
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-3xl p-6 md:p-8 border-2 ${
                    plan.popular
                      ? 'border-foreground'
                      : 'border-foreground/20'
                  }`}
                  style={{ 
                    backgroundColor: plan.popular ? plan.color : 'hsl(var(--card))'
                  }}
                >
                  {plan.popular && (
                    <div 
                      className="absolute -top-4 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-sm font-semibold border-2 border-foreground"
                    >
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                    <p className="text-sm mb-4 text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check 
                          className="w-5 h-5 mt-0.5 flex-shrink-0 text-foreground"
                        />
                        <span className="text-sm text-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    onClick={() => openCalendly()}
                  >
                    {plan.buttonText}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border-2 border-foreground/10 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-foreground/10">
                      <th className="text-left p-3 md:p-4 font-bold text-foreground text-sm md:text-base">Features</th>
                      <th className="text-center p-3 md:p-4 font-bold text-foreground text-sm md:text-base">Basic</th>
                      <th className="text-center p-3 md:p-4 font-bold text-foreground text-sm md:text-base">Pro</th>
                      <th className="text-center p-3 md:p-4 font-bold text-foreground text-sm md:text-base">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.map((row, index) => (
                      <tr key={index} className="border-b border-foreground/10 last:border-0">
                        <td className="p-3 md:p-4 text-foreground text-sm md:text-base font-medium">{row.feature}</td>
                        <td className="p-3 md:p-4 text-center text-muted-foreground text-sm md:text-base">{row.basic}</td>
                        <td className="p-3 md:p-4 text-center text-muted-foreground text-sm md:text-base">{row.pro}</td>
                        <td className="p-3 md:p-4 text-center text-muted-foreground text-sm md:text-base">{row.enterprise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t-2 border-foreground/10 text-center">
                <p className="text-sm text-muted-foreground">
                  All prices are excl. VAT. Implementation services available at $5,000-$15,000.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;