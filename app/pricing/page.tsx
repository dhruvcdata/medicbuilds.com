import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HospitalIcon as MedicalIcon, CheckCircle, ArrowRight, HelpCircle } from "lucide-react"
import { Header } from "../header"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-radial from-theme-blue/20 to-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-theme-blue/10 px-3 py-1 text-sm font-medium text-theme-blue">
                Flexible Pricing Options
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transparent Pricing for Medical Websites
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan for your healthcare practice's online presence. All plans include responsive
                  design and SEO optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Essential",
                  description: "Perfect for new medical practices",
                  features: [
                    "Professional website design",
                    "Mobile responsive layout",
                    "Contact form integration",
                    "Basic SEO setup",
                    "5 content pages",
                    "Social media integration",
                    "Google Maps integration",
                    "Basic analytics setup",
                  ],
                  color: "blue",
                  cta: "Contact for Pricing",
                },
                {
                  title: "Professional",
                  description: "Ideal for established practices",
                  features: [
                    "Everything in Essential",
                    "Online appointment booking",
                    "Patient testimonials section",
                    "Service galleries",
                    "Staff profiles",
                    "Blog integration",
                    "Advanced SEO package",
                    "Email newsletter signup",
                    "Content management system",
                  ],
                  popular: true,
                  color: "purple",
                  cta: "Contact for Pricing",
                },
                {
                  title: "Premium",
                  description: "For multi-location practices",
                  features: [
                    "Everything in Professional",
                    "Multiple location support",
                    "Patient portal integration",
                    "Custom animations & graphics",
                    "Virtual tour integration",
                    "Advanced appointment system",
                    "Multilingual support",
                    "Priority support",
                    "Monthly maintenance",
                    "Regular content updates",
                  ],
                  color: "teal",
                  cta: "Contact for Pricing",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border ${plan.popular ? `border-theme-${plan.color} shadow-lg` : "border-border shadow-sm"
                    } p-6 bg-white card-hover`}
                >
                  {plan.popular && (
                    <div
                      className={`mb-4 rounded-full bg-theme-${plan.color}/10 px-3 py-1 text-sm font-medium text-theme-${plan.color} w-fit mx-auto`}
                    >
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 space-y-2 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 text-theme-${plan.color}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 ${plan.popular ? `bg-theme-${plan.color} hover:bg-theme-${plan.color}/90` : `border-theme-${plan.color} text-theme-${plan.color} hover:bg-theme-${plan.color}/10`}`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/contact">{plan.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-theme-blue/10 to-theme-purple/10">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full bg-theme-teal/10 px-3 py-1 text-sm font-medium text-theme-teal">
                  Tailored Solutions
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Custom Healthcare Website Solutions
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Need something specific for your healthcare practice? We offer custom solutions tailored to your
                    unique requirements.
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Specialty-Specific Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                      <div>
                        <span className="font-medium">Telemedicine Integration</span>
                        <p className="text-sm text-muted-foreground">
                          Virtual consultations and appointment systems for remote patient care.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                      <div>
                        <span className="font-medium">Patient Education Portals</span>
                        <p className="text-sm text-muted-foreground">
                          Custom resources and educational content specific to your medical specialty.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                      <div>
                        <span className="font-medium">Interactive Tools</span>
                        <p className="text-sm text-muted-foreground">
                          Symptom checkers, BMI calculators, or other specialty-specific interactive elements.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Additional Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Content Creation</span>
                        <p className="text-sm text-muted-foreground">
                          Professional medical content writing services for your specialty.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Medical SEO Campaigns</span>
                        <p className="text-sm text-muted-foreground">
                          Targeted SEO strategies to help patients find your practice online.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-purple mt-0.5" />
                      <div>
                        <span className="font-medium">Branding & Identity</span>
                        <p className="text-sm text-muted-foreground">
                          Complete branding packages including logo design and brand guidelines.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-5xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full bg-theme-yellow/10 px-3 py-1 text-sm font-medium text-theme-yellow">
                  Frequently Asked Questions
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Common Questions About Our Pricing
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Find answers to common questions about our medical website pricing and services.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "Why don't you list exact prices?",
                    answer:
                      "Each medical practice has unique needs that affect project scope. We provide custom quotes based on your specific requirements to ensure you only pay for what you need.",
                  },

                  {
                    question: "Are there any hidden fees?",
                    answer:
                      "No, we provide transparent pricing with no hidden fees. Your quote will include all costs associated with your website project.",
                  },
                  {
                    question: "Do you offer ongoing maintenance?",
                    answer:
                      "Yes, we offer monthly maintenance plans to keep your medical website secure, updated, and performing optimally.",
                  },
                  {
                    question: "What's included in the base price?",
                    answer:
                      "All our packages include responsive design, basic SEO, contact forms, and mobile optimization as standard features.",
                  },
                  {
                    question: "How long does it take to build a medical website?",
                    answer:
                      "Most medical websites take 4-6 weeks from start to finish. Complex projects with custom features may take 8-10 weeks.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="rounded-lg border bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                      <div>
                        <h3 className="font-bold">{faq.question}</h3>
                        <p className="text-muted-foreground mt-1">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sectionwebhjbehdwsbcn */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-theme-blue to-theme-purple text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Discuss Your Medical Website Project?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today for a free consultation and custom quote tailored to your healthcare practice's
                  needs.
                </p>
              </div>
              <Button size="lg" className="bg-white text-theme-blue hover:bg-white/90 gap-1" asChild>
                <Link href="/contact">
                  Get Your Custom Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gradient-to-r from-theme-blue/10 to-theme-purple/10 border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-4">
            {/* <Tooth className="h-6 w-6 text-theme-blue" /> */}
            <div className="flex flex-col">
              <p className="text-sm font-bold text-theme-blue">MedicBuilds</p>
              <p className="text-xs text-muted-foreground">© 2025 All rights reserved</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm font-medium text-theme-purple hover:text-theme-purple/80 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-theme-purple hover:text-theme-purple/80 transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-theme-blue text-white rounded-full text-sm font-medium hover:bg-theme-blue/90 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

