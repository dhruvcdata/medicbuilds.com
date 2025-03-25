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
import { Header } from "./header"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
// Sample website data for the showcase grid
const templateShowcases = [
  {
    id: "t1",
    title: "Modern Medical",
    url: "https://medicate.peacefulqode.co.in/",
    description: "A clean, modern template for medical clinics with online booking and patient portal integration.",
    tags: ["General Practice", "Online Booking"],
    category: "Template",
    imageUrl: "/temp/1.png",
  },
  {
    id: "t2",
    title: "Specialist Care",
    url: "https://medicate.peacefulqode.co.in/cardiology/",
    description: "Designed for medical specialists with detailed service pages and before/after galleries.",
    tags: ["Specialists", "Before/After"],
    category: "Template",
    imageUrl: "/temp/2.png",
  },
  {
    id: "t3",
    title: "Optics",
    url: "https://medicate.peacefulqode.co.in/surgery//",
    description: "Child-friendly medical website template with interactive elements and educational resources.",
    tags: ["Pediatrics", "Interactive"],
    category: "Template",
    imageUrl: "/temp/3.png",
  },
  {
    id: "t4",
    title: "Vet Clinic",
    url: "https://vetic.in/pet-clinic-delhi",
    description: "Holistic health and Vet Clinic template with appointment booking and practitioner profiles.",
    tags: ["Wellness", "Holistic"],
    category: "Template",
    imageUrl: "/temp/4.png",
  },
  {
    id: "t5",
    title: "Surgical Practice",
    url: "https://medicate.peacefulqode.co.in/surgery/",
    description: "Professional template for surgical practices with procedure information and patient resources.",
    tags: ["Surgery", "Educational"],
    category: "Template",
    imageUrl: "/temp/5.png",
  },
  {
    id: "t6",
    title: "Mental Health",
    url: "https://medicate.peacefulqode.co.in/psychiatrist/",
    description: "Calming, accessible template for mental health professionals with resources and appointment booking.",
    tags: ["Mental Health", "Resources"],
    category: "Template",
    imageUrl: "/temp/6.png",
  },
];

const clientShowcases = [
  {
    id: "c1",
    title: "Healing Hands Clinic",
    url: "http://healinghorizons.us/",
    description: "Multi-provider family practice offering comprehensive healthcare services across Central Pennsylvania.",
    tags: ["Family Medicine", "Multi-Provider"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
  {
    id: "c2",
    title: "The Pet Specialists",
    url: "http://dranandspetsclinic.com/",
    description: "Comprehensive dental services with multiple locations across Minnesota, offering specialized care.",
    tags: ["Dental", "Multi-Location"],
    category: "Client",
    imageUrl: "./t.jpg",
  },

];

const caseStudies: Website[] = [
  {
    id: "cs1",
    title: "Amaha Health Network Website Redesign",
    url: "https://www.amahahealth.com/?source=topnav&ispm=true",
    description: "Revamped website led to enhanced user experience and marketing effectiveness for a multi-location healthcare provider.",
    tags: ["Case Study", "Website Redesign"],
    category: "Case Study",
    imageUrl: "./t.jpg",
  },
  {
    id: "cs2",
    title: "Apollo Healthcare Website Transformation",
    url: "https://www.apolloclinic.com/",
    description: "Website overhaul resulted in exponential growth in online bookings and improved patient engagement for a Hong Kong-based medical practice.",
    tags: ["Case Study", "Online Bookings"],
    category: "Case Study",
    imageUrl: "./t.jpg",
  },
  {
    id: "cs3",
    title: "Logansport Memorial Hospital Digital Revamp",
    url: "https://blog.tbhcreative.com/case-study-web-redesign-helps-hospital/",
    description: "Redesign improved patient conversion rates and user engagement for a community hospital.",
    tags: ["Case Study", "Patient Conversion"],
    category: "Case Study",
    imageUrl: "./t.jpg",
  },
];


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
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
                  {/* <Image
                    src="/placeholder.svg?height=500&width=800&text=Healthcare+Websites"
                    alt="Medical website showcase"
                    fill
                    className="object-contain"
                    priority
                  /> */}
                  <DotLottieReact
                    src="https://lottie.host/6fb046d4-4465-4bf6-8558-c8c2307753b2/N5SPT1hvT8.lottie"
                    loop
                    autoplay
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

        {/* 
        <section className="w-full py-12 md:py-16 bg-gradient-to-r from-theme-blue to-theme-purple text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">25+</h3>
                <p className="text-white/80">Innovative Solutions</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">90%</h3>
                <p className="text-white/80">Client Recommendation Rate</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-white/80">years of experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-white/80">Dedicated Support</p>
              </div>
            </div>
          </div>
        </section> */}

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
        {/* <section id="showcase" className="w-full py-12 md:py-24 lg:py-32">
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
        </section> */}

        {/* Case Studies Section */}
        {/* <section
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
        </section> */}

        {/* Process Section */}
        {/* <section className="w-full py-16 md:py-28 lg:py-32 bg-theme-blue  text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="rotate-12">
              <defs>
                <pattern id="medical-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M0 30L30 0 60 30 30 60 0 30" fill="rgba(255,255,255,0.08)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#medical-pattern)" />
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="inline-flex items-center rounded-full border-2 border-white/30 bg-white/15 px-6 py-2 text-lg font-medium backdrop-blur-lg transition-all hover:scale-105">
                🏆 Award-Winning Process for Medical Professionals
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                  Crafting Digital Excellence for Healthcare
                </h2>
                <p className="max-w-4xl mx-auto text-lg md:text-xl text-white/90 leading-relaxed">
                  Our 3-phase development process ensures HIPAA-compliant, patient-centric websites that enhance trust and conversion for medical practices.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-7xl relative">
           
              <div className="hidden md:block absolute left-16 right-16 top-24 h-1 bg-white/20 rounded-full">
                <div className="h-full bg-white/80 rounded-full animate-progress-glow" style={{ width: '100%' }} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12">
       
                <div className="relative group">
                  <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-6 rounded-xl bg-white/5 backdrop-blur-lg p-8 border-2 border-white/10 transform transition-all hover:scale-[1.02] hover:border-theme-teal/50">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-theme-teal to-theme-blue shadow-lg">
                      <span className="text-3xl font-bold text-white">1</span>
                      <svg className="absolute -right-3 -top-3 w-8 h-8 text-theme-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-white">
                      Discovery & Strategy
                    </h3>
                    <div className="space-y-3 text-center text-white/85">
                      <ul className="space-y-2 text-left list-disc list-inside marker:text-theme-white">
                        <li>Practice needs analysis</li>
                        <li>Patient journey mapping</li>
                        <li>HIPAA compliance audit</li>
                        <li>Content strategy session</li>
                      </ul>
                    </div>
                    <div className="mt-4 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                      ⏱️ 2-5 Business Days
                    </div>
                  </div>
                </div>

       
                <div className="relative group mt-10 md:mt-0">
                  <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-6 rounded-xl bg-white/5 backdrop-blur-lg p-8 border-2 border-white/10 transform transition-all hover:scale-[1.02] hover:border-theme-purple/50">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-theme-purple to-theme-indigo shadow-lg">
                      <span className="text-3xl font-bold text-white">2</span>
                      <svg className="absolute -right-3 -top-3 w-8 h-8 text-theme-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-white">
                      Medical-Optimized Design
                    </h3>
                    <div className="space-y-3 text-center text-white/85">
                      <ul className="space-y-2 text-left list-disc list-inside marker:text-theme-white">
                        <li>Patient-first UI/UX design</li>
                        <li>Telemedicine integration</li>
                        <li>Appointment scheduling system</li>
                        <li>Medical SEO optimization</li>
                      </ul>
                    </div>
                    <div className="mt-4 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                      ⏱️ 7-14 Business Days
                    </div>
                  </div>
                </div>


                <div className="relative group mt-10 md:mt-0">
                  <div className="absolute -inset-2 bg-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative flex flex-col items-center space-y-6 rounded-xl bg-white/5 backdrop-blur-lg p-8 border-2 border-white/10 transform transition-all hover:scale-[1.02] hover:border-theme-blue/50">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-theme-blue to-theme-teal shadow-lg">
                      <span className="text-3xl font-bold text-white">3</span>
                      <svg className="absolute -right-3 -top-3 w-8 h-8 text-theme-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-white">
                      Secure Launch & Growth
                    </h3>
                    <div className="space-y-3 text-center text-white/85">
                      <ul className="space-y-2 text-left list-disc list-inside marker:text-theme-white">
                        <li>SSL & HIPAA compliance checks</li>
                        <li>Staff training & documentation</li>
                        <li>Ongoing performance monitoring</li>
                        <li>Patient acquisition analytics</li>
                      </ul>
                    </div>
                    <div className="mt-4 px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                      ⏱️ 3-5 Business Days
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
              <button className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-lg border-2 border-white/20 transition-all hover:bg-white/20 hover:border-theme-teal hover:scale-105">
                🚀 Start Your Medical Website Journey
                <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section> */}

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
          className="w-full py-12 md:py-24 lg:py-32 bg-theme-blue  text-white"
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
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/90" asChild>
                  <Link href="/showcase">View Our Portfolio</Link>
                </Button>
              </div>
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
              href="/privacy"
              className="text-sm font-medium text-theme-purple hover:text-theme-purple/80 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
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

