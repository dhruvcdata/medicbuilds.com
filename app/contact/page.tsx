"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SmileIcon as Tooth, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    clinicName: "",
    website: "",
    subject: "",
    message: "",
    budget: "",
    services: [],
    preferredContact: "email",
    timeframe: "",
    isSubmitting: false,
    isSubmitted: false,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, isSubmitting: true }))

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We've received your message and will contact you shortly.",
    })

    setFormState((prev) => ({
      ...prev,
      isSubmitting: false,
      isSubmitted: true,
      name: "",
      email: "",
      phone: "",
      clinicName: "",
      website: "",
      subject: "",
      message: "",
      budget: "",
      services: [],
      preferredContact: "email",
      timeframe: "",
    }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service) => {
    setFormState((prev) => {
      const services = prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service]
      return { ...prev, services }
    })
  }

  const handleSelectChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Tooth className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">MedicBuilds</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-theme-blue">
              Features
            </Link>
            <Link href="/showcase" className="text-sm font-medium hover:text-theme-blue">
              Showcase
            </Link>
            <Link href="/pricing" className="text-sm font-medium hover:text-theme-blue">
              Pricing
            </Link>
            <Link href="/case-studies" className="text-sm font-medium hover:text-theme-blue">
              Case Studies
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm" className="bg-theme-blue hover:bg-theme-blue/90" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to discuss your dental clinic's website needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within 24 hours to discuss your dental website
                    project.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">contact@medicbuilds.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Office</h3>
                      <p className="text-muted-foreground">
                        123 Dental Plaza, Suite 200
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Map+Location"
                    alt="Office location map"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="rounded-lg border p-6 shadow-sm">
                {formState.isSubmitted ? (
                  <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold">Thank You!</h2>
                    <p className="text-muted-foreground max-w-md">
                      Your message has been received. Our team will contact you shortly to discuss your dental website
                      project.
                    </p>
                    <Button onClick={() => setFormState((prev) => ({ ...prev, isSubmitted: false }))}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Dr. John Smith"
                            required
                            value={formState.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@dentalclinic.com"
                            required
                            value={formState.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(555) 123-4567"
                            value={formState.phone}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="clinicName">Clinic Name</Label>
                          <Input
                            id="clinicName"
                            name="clinicName"
                            placeholder="Bright Smile Dental"
                            value={formState.clinicName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="website">Current Website (if any)</Label>
                        <Input
                          id="website"
                          name="website"
                          placeholder="https://www.yourclinic.com"
                          value={formState.website}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("subject", value)}
                          value={formState.subject}
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-website">New Website Inquiry</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="maintenance">Website Maintenance</SelectItem>
                            <SelectItem value="seo">SEO Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Services Interested In</Label>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {[
                            { id: "website-design", label: "Website Design" },
                            { id: "online-booking", label: "Online Booking System" },
                            { id: "seo-services", label: "SEO Services" },
                            { id: "content-creation", label: "Content Creation" },
                            { id: "maintenance", label: "Website Maintenance" },
                            { id: "hosting", label: "Hosting Services" },
                          ].map((service) => (
                            <div key={service.id} className="flex items-center space-x-2">
                              <Checkbox
                                id={service.id}
                                checked={formState.services.includes(service.id)}
                                onCheckedChange={() => handleServiceToggle(service.id)}
                              />
                              <Label htmlFor={service.id} className="font-normal">
                                {service.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Budget Range</Label>
                        <Select onValueChange={(value) => handleSelectChange("budget", value)} value={formState.budget}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1000">Under $1,000</SelectItem>
                            <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                            <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5000-plus">$5,000+</SelectItem>
                            <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Contact Method</Label>
                        <RadioGroup
                          defaultValue="email"
                          value={formState.preferredContact}
                          onValueChange={(value) => handleSelectChange("preferredContact", value)}
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="contact-email" />
                            <Label htmlFor="contact-email" className="font-normal">
                              Email
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="contact-phone" />
                            <Label htmlFor="contact-phone" className="font-normal">
                              Phone
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2">
                        <Label>Project Timeframe</Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("timeframe", value)}
                          value={formState.timeframe}
                        >
                          <SelectTrigger id="timeframe">
                            <SelectValue placeholder="When do you need this completed?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">As Soon As Possible</SelectItem>
                            <SelectItem value="1-month">Within 1 Month</SelectItem>
                            <SelectItem value="3-months">Within 3 Months</SelectItem>
                            <SelectItem value="6-months">Within 6 Months</SelectItem>
                            <SelectItem value="no-rush">No Rush</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project and specific needs..."
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
                      {formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Frequently Asked Questions</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Find answers to common questions about our dental website services.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl gap-6 py-12 md:gap-8">
                {[
                  {
                    question: "How long does it take to build a dental website?",
                    answer:
                      "Most dental websites take 4-6 weeks from start to finish. This includes the consultation, design, development, and review phases. For more complex websites with custom features, the timeline may extend to 8-10 weeks.",
                  },
                  {
                    question: "Do you provide hosting for dental websites?",
                    answer:
                      "Yes, we offer reliable hosting services specifically optimized for dental websites. Our hosting includes regular backups, security monitoring, and technical support to ensure your website remains fast, secure, and always available to your patients.",
                  },
                  {
                    question: "Can you integrate online appointment booking?",
                    answer:
                      "We can integrate your preferred online booking system or recommend solutions that work best for dental practices. This allows patients to book appointments 24/7, reducing phone calls and improving patient convenience.",
                  },
                  {
                    question: "Do you offer ongoing maintenance?",
                    answer:
                      "Yes, we offer monthly maintenance plans to keep your dental website secure, updated, and performing optimally. This includes security updates, content updates, performance optimization, and technical support when you need it.",
                  },
                  {
                    question: "Will my website be mobile-friendly?",
                    answer:
                      "All our dental websites are fully responsive and mobile-friendly by default. With over 60% of patients searching for dental services on mobile devices, we ensure your website looks great and functions perfectly on smartphones, tablets, and desktop computers.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Tooth className="h-5 w-5 text-primary" />
            <p className="text-sm font-medium">© 2025 MedicBuilds. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

