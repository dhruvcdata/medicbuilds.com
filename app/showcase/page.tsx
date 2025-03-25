import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HospitalIcon as MedicalIcon,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Microscope,
  Heart,
  Brain,
  Clipboard,
  Syringe,
  Activity,
  Users,
} from "lucide-react"
import { WebsiteShowcaseGrid, type Website } from "@/components/website-showcase-grid"
import { Header } from "../header"

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
    title: "Family Practice Center, PC",
    url: "https://www.fpcdoctors.com/",
    description: "Multi-provider family practice offering comprehensive healthcare services across Central Pennsylvania.",
    tags: ["Family Medicine", "Multi-Provider"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
  {
    id: "c2",
    title: "The Dental Specialists",
    url: "https://www.thedentalspecialists.com/",
    description: "Comprehensive dental services with multiple locations across Minnesota, offering specialized care.",
    tags: ["Dental", "Multi-Location"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
  {
    id: "c3",
    title: "Family Doctor Clinic",
    url: "https://familydoctorclinic.com/",
    description: "Full-service family healthcare provider with on-call services and same-day appointments in Southeast Louisiana.",
    tags: ["Family Medicine", "Emergency Care"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
  {
    id: "c4",
    title: "Dermatology Clinic",
    url: "https://www.dermatologyclinic.com/",
    description: "Specialized dermatology services offering comprehensive skin care treatments and patient education.",
    tags: ["Dermatology", "Galleries"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
  {
    id: "c5",
    title: "Magnolia Family Medicine",
    url: "https://www.mydocmd.com/",
    description: "Comprehensive family medicine practice open 7 days a week, serving patients of all ages in Texas.",
    tags: ["Family Medicine", "Resources"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
  {
    id: "c6",
    title: "Cardiology Practice",
    url: "https://www.cardiologypractice.com/",
    description: "Specialized cardiology services providing patient education and advanced cardiac care.",
    tags: ["Cardiology", "Education"],
    category: "Client",
    imageUrl: "./t.jpg",
  },
];
export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-theme-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="#ffffff" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur-sm">
                Our Portfolio
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Healthcare Website Showcase
                </h1>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our collection of custom-designed websites for healthcare providers of all specialties.
                </p>
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
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We create custom websites for healthcare providers across all specialties, tailored to your unique
                needs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-blue/5 transition-colors">
                <div className="rounded-full bg-theme-blue/10 p-3">
                  <Stethoscope className="h-6 w-6 text-theme-blue" />
                </div>
                <p className="font-medium">General Practice</p>
                <p className="text-xs text-muted-foreground">Family Medicine, Primary Care</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-teal/5 transition-colors">
                <div className="rounded-full bg-theme-teal/10 p-3">
                  <MedicalIcon className="h-6 w-6 text-theme-teal" />
                </div>
                <p className="font-medium">Dental Clinics</p>
                <p className="text-xs text-muted-foreground">General, Orthodontics, Cosmetic</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-purple/5 transition-colors">
                <div className="rounded-full bg-theme-purple/10 p-3">
                  <Brain className="h-6 w-6 text-theme-purple" />
                </div>
                <p className="font-medium">Mental Health</p>
                <p className="text-xs text-muted-foreground">Therapy, Psychiatry, Counseling</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-pink/5 transition-colors">
                <div className="rounded-full bg-theme-pink/10 p-3">
                  <Heart className="h-6 w-6 text-theme-pink" />
                </div>
                <p className="font-medium">Cardiology</p>
                <p className="text-xs text-muted-foreground">Heart Health, Vascular</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-yellow/5 transition-colors">
                <div className="rounded-full bg-theme-yellow/10 p-3">
                  <Microscope className="h-6 w-6 text-theme-yellow" />
                </div>
                <p className="font-medium">Veterinary</p>
                <p className="text-xs text-muted-foreground">Small Animal, Emergency, Specialty</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-blue/5 transition-colors">
                <div className="rounded-full bg-theme-blue/10 p-3">
                  <Activity className="h-6 w-6 text-theme-blue" />
                </div>
                <p className="font-medium">Physical Therapy</p>
                <p className="text-xs text-muted-foreground">Rehabilitation, Sports Medicine</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-teal/5 transition-colors">
                <div className="rounded-full bg-theme-teal/10 p-3">
                  <Syringe className="h-6 w-6 text-theme-teal" />
                </div>
                <p className="font-medium">Dermatology</p>
                <p className="text-xs text-muted-foreground">Cosmetic, Medical, Surgical</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-theme-purple/5 transition-colors">
                <div className="rounded-full bg-theme-purple/10 p-3">
                  <Clipboard className="h-6 w-6 text-theme-purple" />
                </div>
                <p className="font-medium">Specialty Care</p>
                <p className="text-xs text-muted-foreground">ENT, Ophthalmology, OB/GYN</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Website */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="#0077FF" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-6xl rounded-lg border shadow-lg overflow-hidden bg-white">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block rounded-full bg-theme-blue/10 px-3 py-1 text-sm font-medium text-theme-blue mb-4">
                    Featured Website
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Modern Medical Group Practice</h2>
                  <p className="text-muted-foreground mb-6">
                    This multi-specialty medical group website showcases our ability to create sophisticated,
                    patient-focused websites with advanced functionality.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Custom healthcare website design with modern UI/UX</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>SEO optimization to improve search rankings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Professional facility and staff photoshoots</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Mobile-friendly and fast-loading websites</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Clear service pages with engaging content</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Secure and HIPAA-compliant website setup</span>
                    </li>
                  </ul>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button className="w-fit bg-theme-blue hover:bg-theme-blue/90">View Live Website</Button>
                    <Button
                      variant="outline"
                      className="w-fit border-theme-blue text-theme-blue hover:bg-theme-blue/10"
                      asChild
                    >
                      <Link href="/case-studies">View Case Studies</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative min-h-[300px] md:min-h-full">
                  <Image
                    src="/case.jpg"
                    alt="Medical Group website showcase"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-theme-purple/10 to-theme-blue/10">
          <div className="container px-4 md:px-6">
            <WebsiteShowcaseGrid
              websites={templateShowcases}
              columns={4}
              title="Our Healthcare Website Templates"
              description="Browse our collection of professionally designed templates for medical practices. Each template is fully customizable to match your brand."
            />
          </div>
        </section>

        {/* Features Highlight */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-theme-teal/10 px-3 py-1 text-sm font-medium text-theme-teal">
                Advanced Features
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Powerful Healthcare Website Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our websites include specialized features designed specifically for healthcare providers.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg border bg-gradient-to-br from-theme-blue/5 to-transparent p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-full bg-theme-blue/10 p-3 w-fit">
                    <Clipboard className="h-6 w-6 text-theme-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Custom Website Development</h3>
                  <p className="text-muted-foreground">
                    High-performance websites tailored for healthcare professionals, optimized for speed, security, and user engagement.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Fast-loading, mobile-responsive design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Clean and intuitive navigation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">HIPAA-compliant security measures</span>
                    </li>
                  </ul>
                </div>
              </div>


              {/* Feature 2 */}
              <div className="rounded-lg border bg-gradient-to-br from-theme-purple/5 to-transparent p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-full bg-theme-purple/10 p-3 w-fit">
                    <Users className="h-6 w-6 text-theme-purple" />
                  </div>
                  <h3 className="text-xl font-bold">Staff Profiles & Headshots</h3>
                  <p className="text-muted-foreground">
                    Professional provider profiles that showcase your team's expertise, credentials, and approachable
                    personalities.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-purple mt-0.5" />
                      <span className="text-sm">Professional headshot photography</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-purple mt-0.5" />
                      <span className="text-sm">Credential and specialty highlighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-purple mt-0.5" />
                      <span className="text-sm">Direct booking links for each provider</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="rounded-lg border bg-gradient-to-br from-theme-teal/5 to-transparent p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-full bg-theme-teal/10 p-3 w-fit">
                    <MedicalIcon className="h-6 w-6 text-theme-teal" />
                  </div>
                  <h3 className="text-xl font-bold">Facility Photoshoots</h3>
                  <p className="text-muted-foreground">
                    High-quality photography of your medical facility that showcases your environment and helps patients
                    feel comfortable before their visit.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-teal mt-0.5" />
                      <span className="text-sm">Professional interior and exterior shots</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-teal mt-0.5" />
                      <span className="text-sm">Virtual tour integration options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-teal mt-0.5" />
                      <span className="text-sm">Equipment and technology highlights</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="rounded-lg border bg-gradient-to-br from-theme-pink/5 to-transparent p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-full bg-theme-pink/10 p-3 w-fit">
                    <Activity className="h-6 w-6 text-theme-pink" />
                  </div>
                  <h3 className="text-xl font-bold">SEO & Performance Optimization</h3>
                  <p className="text-muted-foreground">
                    Get found by more patients with strategic SEO, fast website speeds, and content optimized for search engines.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span className="text-sm">Keyword-optimized content for ranking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span className="text-sm">Page speed and mobile performance tuning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span className="text-sm">Local SEO strategies for clinics</span>
                    </li>
                  </ul>
                </div>
              </div>


              {/* Feature 5 */}
              <div className="rounded-lg border bg-gradient-to-br from-theme-yellow/5 to-transparent p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-full bg-theme-yellow/10 p-3 w-fit">
                    <Stethoscope className="h-6 w-6 text-theme-yellow" />
                  </div>
                  <h3 className="text-xl font-bold">UI/UX Design & Branding</h3>
                  <p className="text-muted-foreground">
                    Crafting visually appealing and easy-to-navigate healthcare websites that enhance user experience and brand identity.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span className="text-sm">User-friendly interface with accessibility focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span className="text-sm">Custom branding and color schemes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span className="text-sm">Conversion-focused layouts for patient engagement</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="rounded-lg border bg-gradient-to-br from-theme-blue/5 to-transparent p-6 shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="rounded-full bg-theme-blue/10 p-3 w-fit">
                    <Brain className="h-6 w-6 text-theme-blue" />
                  </div>
                  <h3 className="text-xl font-bold">Patient Education Resources</h3>
                  <p className="text-muted-foreground">
                    Comprehensive libraries of educational content specific to your specialty, helping patients
                    understand conditions and treatments.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Condition-specific content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Procedure explanations and videos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Downloadable pre/post care instructions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Showcase Section */}
        {/* <section className="w-full py-12 md:py-24 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5">
          <div className="container px-4 md:px-6">
            <WebsiteShowcaseGrid
              websites={clientShowcases}
              columns={3}
              title="Client Website Examples"
              description="Examples of our work for various healthcare providers. See how we've helped medical practices establish their online presence."
            />
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-theme-blue to-theme-purple text-white relative overflow-hidden">
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
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create Your Healthcare Website?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how we can help your medical practice grow with a professional website.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-theme-blue hover:bg-white/90 gap-1" asChild>
                  <Link href="/contact">
                    Contact Us Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/90" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
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

