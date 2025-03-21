"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HospitalIcon as MedicalIcon,
  Globe,
  Sparkles,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Award,
  Stethoscope,
  Microscope,
  Heart,
  Brain,
} from "lucide-react"
import { WebsiteShowcaseGrid, type Website } from "@/components/website-showcase-grid"

// Sample website data for the showcase grid
const templateShowcases: Website[] = [
  {
    id: "t1",
    title: "Modern Medical",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "A clean, modern template for medical clinics with online booking and patient portal integration.",
    tags: ["General Practice", "Online Booking"],
    category: "ortho",
    imageUrl: "./t.jpg",

  },
  {
    id: "t2",
    title: "Specialist Care",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Designed for medical specialists with detailed service pages and before/after galleries.",
    tags: ["Specialists", "Before/After"],
    category: "Template",
    imageUrl: "./t.jpg",

  },
  {
    id: "t3",
    title: "Pediatric Health",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Child-friendly medical website template with interactive elements and educational resources.",
    tags: ["Pediatrics", "Interactive"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t4",
    title: "Wellness Center",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Holistic health and wellness template with appointment booking and practitioner profiles.",
    tags: ["Wellness", "Holistic"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t5",
    title: "Surgical Practice",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Professional template for surgical practices with procedure information and patient resources.",
    tags: ["Surgery", "Educational"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t6",
    title: "Mental Health",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Calming, accessible template for mental health professionals with resources and appointment booking.",
    tags: ["Mental Health", "Resources"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
]

const clientShowcases: Website[] = [
  {
    id: "c1",
    title: "Family Practice Clinic",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Multi-provider family practice with online scheduling and patient resources.",
    tags: ["Family Medicine", "Multi-Provider"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c2",
    title: "Dental Specialists Group",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Specialized dental practice with multiple locations and comprehensive service information.",
    tags: ["Dental", "Multi-Location"],
    category: "Client",
    imageUrl: "./t.jpg",

  },
  {
    id: "c3",
    title: "Veterinary Hospital",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Full-service veterinary hospital with emergency services and pet owner resources.",
    tags: ["Veterinary", "Emergency Care"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c4",
    title: "Dermatology Clinic",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Dermatology practice with service galleries and patient before/after results.",
    tags: ["Dermatology", "Galleries"],
    category: "Client",
    imageUrl: "./t.jpg",

  },
  {
    id: "c5",
    title: "Physical Therapy Center",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Physical therapy practice with treatment information and exercise resources.",
    tags: ["Physical Therapy", "Resources"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c6",
    title: "Cardiology Practice",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Cardiology specialists with patient education and appointment scheduling.",
    tags: ["Cardiology", "Education"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
]

const caseStudies: Website[] = [
  {
    id: "cs1",
    title: "Multi-Location Medical Group",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Increased new patient appointments by 45% through location-specific SEO and streamlined booking.",
    tags: ["Case Study", "Multi-Location"],
    category: "Case Study",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "cs2",
    title: "Telemedicine Integration",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description: "Implemented virtual care platform that reduced no-shows by 35% and expanded patient reach.",
    tags: ["Case Study", "Telemedicine"],
    category: "Case Study",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "cs3",
    title: "Specialty Practice Rebrand",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",

    description:
      "Complete digital rebrand resulting in 60% increase in high-value procedures and improved patient perception.",
    tags: ["Case Study", "Branding"],
    category: "Case Study",
    imageUrl: "./placeholder.svg",

  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MedicalIcon className="h-6 w-6 text-theme-blue" />
            <span className="text-xl font-bold">MedicBuilds</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-theme-blue">
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
            <Link href="/contact" className="text-sm font-medium hover:text-theme-blue">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-blue/20 via-theme-purple/10 to-transparent z-0"></div>

          <div className="absolute inset-0 opacity-10 z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="#0077FF" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-theme-blue/20 bg-white/80 backdrop-blur-sm px-3 py-1 text-sm">
                    <Star className="mr-1 h-3.5 w-3.5 text-theme-blue" />
                    <span className="text-theme-blue font-medium">Trusted by 500+ Healthcare Providers</span>
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Beautiful Websites for Healthcare Professionals
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Showcase your medical practice with a professional, custom website designed specifically for
                    healthcare providers. Stand out online and attract more patients.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-theme-blue text-white hover:bg-theme-blue/90 gap-1" asChild>
                    <Link href="/showcase">
                      View Our Work <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-theme-blue text-theme-blue hover:bg-theme-blue/10"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm">
                  <Image
                    src="/placeholder.svg?height=500&width=800&text=Healthcare+Websites"
                    alt="Medical website showcase"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Specialties Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="inline-flex items-center rounded-full bg-theme-teal/10 px-3 py-1 text-sm font-medium text-theme-teal">
                For All Healthcare Specialties
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Websites for Every Medical Field</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 text-center">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-blue/5 transition-colors">
                <div className="rounded-full bg-theme-blue/10 p-3">
                  <Stethoscope className="h-6 w-6 text-theme-blue" />
                </div>
                <p className="font-medium">General Practice</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-teal/5 transition-colors">
                <div className="rounded-full bg-theme-teal/10 p-3">
                  <MedicalIcon className="h-6 w-6 text-theme-teal" />
                </div>
                <p className="font-medium">Dental Clinics</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-purple/5 transition-colors">
                <div className="rounded-full bg-theme-purple/10 p-3">
                  <Brain className="h-6 w-6 text-theme-purple" />
                </div>
                <p className="font-medium">Mental Health</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-pink/5 transition-colors">
                <div className="rounded-full bg-theme-pink/10 p-3">
                  <Heart className="h-6 w-6 text-theme-pink" />
                </div>
                <p className="font-medium">Cardiology</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-yellow/5 transition-colors">
                <div className="rounded-full bg-theme-yellow/10 p-3">
                  <Microscope className="h-6 w-6 text-theme-yellow" />
                </div>
                <p className="font-medium">Veterinary</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="border-theme-blue text-theme-blue hover:bg-theme-blue/10" asChild>
                <Link href="/showcase">View All Specialties</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-theme-blue to-theme-purple text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-white/80">Medical Websites</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">98%</h3>
                <p className="text-white/80">Client Satisfaction</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">45%</h3>
                <p className="text-white/80">Avg. Patient Increase</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-white/80">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-theme-blue/5 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-theme-blue/10 px-3 py-1 text-sm font-medium text-theme-blue">
                Why Choose MedicBuilds
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Websites Built for Healthcare Success
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in creating stunning websites for medical practices that attract new patients and
                  showcase your services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white card-hover">
                <div className="rounded-full bg-theme-blue/10 p-3">
                  <Globe className="h-6 w-6 text-theme-blue" />
                </div>
                <h3 className="text-xl font-bold">Professional Design</h3>
                <p className="text-center text-muted-foreground">
                  Custom-designed websites that reflect your practice's unique identity and services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white card-hover">
                <div className="rounded-full bg-theme-teal/10 p-3">
                  <Sparkles className="h-6 w-6 text-theme-teal" />
                </div>
                <h3 className="text-xl font-bold">Patient-Focused</h3>
                <p className="text-center text-muted-foreground">
                  User-friendly interfaces that make it easy for patients to book appointments and find information.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white card-hover">
                <div className="rounded-full bg-theme-purple/10 p-3">
                  <Users className="h-6 w-6 text-theme-purple" />
                </div>
                <h3 className="text-xl font-bold">Grow Your Practice</h3>
                <p className="text-center text-muted-foreground">
                  SEO-optimized websites that help new patients find your medical practice online.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white card-hover">
                <div className="rounded-full bg-theme-pink/10 p-3">
                  <Zap className="h-6 w-6 text-theme-pink" />
                </div>
                <h3 className="text-xl font-bold">Fast Performance</h3>
                <p className="text-center text-muted-foreground">
                  Lightning-fast websites that load quickly and provide a smooth user experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white card-hover">
                <div className="rounded-full bg-theme-yellow/10 p-3">
                  <Award className="h-6 w-6 text-theme-yellow" />
                </div>
                <h3 className="text-xl font-bold">Award-Winning</h3>
                <p className="text-center text-muted-foreground">
                  Our healthcare websites have won multiple design awards for their aesthetics and functionality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm bg-white card-hover">
                <div className="rounded-full bg-theme-green/10 p-3">
                  <CheckCircle className="h-6 w-6 text-theme-green" />
                </div>
                <h3 className="text-xl font-bold">Ongoing Support</h3>
                <p className="text-center text-muted-foreground">
                  Dedicated support team to help with updates, maintenance, and any questions you have.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Showcase Section */}
        <section
          id="templates"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5"
        >
          <div className="container px-4 md:px-6">
            <WebsiteShowcaseGrid
              websites={templateShowcases}
              columns={3}
              title="Our Medical Website Templates"
              description="Browse our collection of professionally designed templates for healthcare providers. Each template is fully customizable to match your brand."
            />

            <div className="flex justify-center mt-12">
              <Button className="bg-theme-blue hover:bg-theme-blue/90" asChild>
                <Link href="/showcase">View All Templates</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Client Showcase Section */}
        <section id="showcase" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <WebsiteShowcaseGrid
              websites={clientShowcases}
              columns={3}
              title="Client Website Showcase"
              description="Examples of our work for various healthcare providers. See how we've helped medical practices establish their online presence."
            />

            <div className="flex justify-center mt-12">
              <Button
                variant="outline"
                className="border-theme-purple text-theme-purple hover:bg-theme-purple/10"
                asChild
              >
                <Link href="/showcase">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          id="case-studies"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5"
        >
          <div className="container px-4 md:px-6">
            <WebsiteShowcaseGrid
              websites={caseStudies}
              columns={3}
              title="Healthcare Website Case Studies"
              description="Discover how our websites have helped medical practices grow their patient base and improve their online presence."
            />

            <div className="flex justify-center mt-12">
              <Button className="bg-theme-teal hover:bg-theme-teal/90" asChild>
                <Link href="/case-studies">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-theme-blue to-theme-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circles" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="3" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circles)" />
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                Our Process
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple Steps to Your Perfect Medical Website
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting your healthcare practice online is easy with our streamlined approach.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-theme-purple">
                  1
                </div>
                <h3 className="text-xl font-bold">Consultation</h3>
                <p className="text-center text-white/80">
                  We discuss your healthcare practice's needs, goals, and design preferences to create a tailored plan.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-theme-teal">
                  2
                </div>
                <h3 className="text-xl font-bold">Design & Development</h3>
                <p className="text-center text-white/80">
                  Our team creates a custom website tailored to your medical practice with all the features you need.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-bold text-theme-blue">
                  3
                </div>
                <h3 className="text-xl font-bold">Launch & Support</h3>
                <p className="text-center text-white/80">
                  Your website goes live with ongoing support and maintenance to ensure it continues to perform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-theme-green/10 px-3 py-1 text-sm font-medium text-theme-green">
                Client Testimonials
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Healthcare Providers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from medical professionals who have transformed their online presence with MedicBuilds.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Family Medicine",
                  quote:
                    "MedicBuilds transformed our online presence. Our new website has helped us attract more patients and streamline our booking process.",
                  color: "blue",
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Dental Practice",
                  quote:
                    "The team at MedicBuilds understood exactly what our practice needed. Our website is beautiful and has significantly improved our patient engagement.",
                  color: "teal",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Pediatric Specialist",
                  quote:
                    "Working with MedicBuilds was effortless. They delivered a stunning website that perfectly represents our clinic's values and services.",
                  color: "purple",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-lg border p-6 shadow-sm bg-white card-hover"
                >
                  <div>
                    <div className={`flex items-center gap-1 text-theme-${testimonial.color}`}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className={`rounded-full bg-theme-${testimonial.color}/20 p-1`}>
                      <div className="h-10 w-10 rounded-full bg-theme-blue/20" />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full bg-theme-yellow/10 px-3 py-1 text-sm font-medium text-theme-yellow">
                Flexible Pricing Options
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Choose the Right Plan for Your Practice
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a range of packages to suit healthcare practices of all sizes and specialties.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[
                {
                  title: "Essential",
                  description: "For new medical practices",
                  features: ["Professional design", "Mobile responsive", "Contact form", "Basic SEO setup"],
                  color: "blue",
                },
                {
                  title: "Professional",
                  description: "For established practices",
                  features: ["Everything in Essential", "Online booking", "Patient testimonials", "Service galleries"],
                  popular: true,
                  color: "purple",
                },
                {
                  title: "Premium",
                  description: "For multi-location practices",
                  features: ["Everything in Professional", "Multiple locations", "Patient portal", "Custom features"],
                  color: "teal",
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
                  <div className="mt-8 text-center">
                    <Link href="/pricing" className={`text-theme-${plan.color} font-medium hover:underline`}>
                      Contact for Pricing
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button className="bg-theme-blue hover:bg-theme-blue/90" asChild>
                <Link href="/pricing">View Full Pricing Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-theme-blue to-theme-purple text-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Healthcare Practice's Online Presence?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how we can help your medical practice grow with a professional website.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-theme-blue hover:bg-white/90 gap-1" asChild>
                  <Link href="/contact">
                    Schedule a Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/showcase">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0 bg-gray-50">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <MedicalIcon className="h-5 w-5 text-theme-blue" />
            <p className="text-sm font-medium">© 2025 MedicBuilds. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:text-theme-blue">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-theme-blue">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-theme-blue">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

