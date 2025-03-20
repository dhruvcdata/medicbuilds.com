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

// Sample website data for the showcase grid
const templateShowcases: Website[] = [
  {
    id: "t1",
    title: "Modern Medical",
    url: "https://templates.hibootstrap.com/grin/default/index-11.html",
    description: "A clean, modern template for medical clinics with online booking and patient portal integration.",
    tags: ["General Practice", "Online Booking"],
    category: "Template",
    imageUrl: "./placeholder.svg",
  },
  {
    id: "t2",
    title: "Specialist Care",
    url: "https://templates.hibootstrap.com/grin/default/index-12.html",
    description: "Designed for medical specialists with detailed service pages and before/after galleries.",
    tags: ["Specialists", "Before/After"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t3",
    title: "Pediatric Health",
    url: "https://templates.hibootstrap.com/grin/default/index.html",
    description: "Child-friendly medical website template with interactive elements and educational resources.",
    tags: ["Pediatrics", "Interactive"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t4",
    title: "Wellness Center",
    url: "https://templates.hibootstrap.com/grin/default/index-10.html",
    description: "Holistic health and wellness template with appointment booking and practitioner profiles.",
    tags: ["Wellness", "Holistic"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t5",
    title: "Surgical Practice",
    url: "https://templates.hibootstrap.com/grin/default/index-2.html",
    description: "Professional template for surgical practices with procedure information and patient resources.",
    tags: ["Surgery", "Educational"],
    category: "Template",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "t6",
    title: "Mental Health",
    url: "https://themetechmount.com/html/zenista/index.html",
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
    url: "https://preview.themeforest.net/item/prohealth-medical-and-healthcare-nextjs-template/full_screen_preview/50745875?_ga=2.267050126.1633410612.1742419465-634426705.1741800722",
    description: "Multi-provider family practice with online scheduling and patient resources.",
    tags: ["Family Medicine", "Multi-Provider"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c2",
    title: "Dental Specialists Group",
    url: "https://templates.hibootstrap.com/grin/default/index-4.html",
    description: "Specialized dental practice with multiple locations and comprehensive service information.",
    tags: ["Dental", "Multi-Location"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c3",
    title: "Veterinary Hospital",
    url: "https://quadcycle.com",
    description: "Full-service veterinary hospital with emergency services and pet owner resources.",
    tags: ["Veterinary", "Emergency Care"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c4",
    title: "Dermatology Clinic",
    url: "http://preview.themeforest.net/item/meditek-health-medical-html-template/full_screen_preview/54786178?_ga=2.267050126.1633410612.1742419465-634426705.1741800722",
    description: "Dermatology practice with service galleries and patient before/after results.",
    tags: ["Dermatology", "Galleries"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c5",
    title: "Physical Therapy Center",
    url: "https://templates.envytheme.com/goldmedi/default/index.html",
    description: "Physical therapy practice with treatment information and exercise resources.",
    tags: ["Physical Therapy", "Resources"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
  {
    id: "c6",
    title: "Cardiology Practice",
    url: "https://preview.themeforest.net/item/medical-dental-healthcare-website-html-template-mindmed/full_screen_preview/53337047?_ga=2.267050126.1633410612.1742419465-634426705.1741800722",
    description: "Cardiology specialists with patient education and appointment scheduling.",
    tags: ["Cardiology", "Education"],
    category: "Client",
    imageUrl: "./placeholder.svg",

  },
]

export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <MedicalIcon className="h-6 w-6 text-theme-blue" />
              <span className="text-xl font-bold">MedicBuilds</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-theme-blue">
              Features
            </Link>
            <Link href="/showcase" className="text-sm font-medium text-theme-blue">
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
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-theme-blue to-theme-purple text-white relative overflow-hidden">
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
                      <span>Integrated online booking system with provider selection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Mobile-optimized patient experience with easy navigation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Provider profiles with credentials and availability</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Patient portal integration for secure communication</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Location-specific content and directions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-theme-blue" />
                      <span>Insurance verification tool for patients</span>
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
                    src="/placeholder.svg?height=600&width=800&text=Medical+Group+Website"
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
                  <h3 className="text-xl font-bold">Appointment Scheduling</h3>
                  <p className="text-muted-foreground">
                    Integrated online booking systems that sync with your practice management software, allowing
                    patients to book appointments 24/7.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Provider selection by specialty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Real-time availability display</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-blue mt-0.5" />
                      <span className="text-sm">Automated reminders and confirmations</span>
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
                  <h3 className="text-xl font-bold">Patient Portal Integration</h3>
                  <p className="text-muted-foreground">
                    Seamless integration with your existing patient portal system, allowing for secure communication and
                    document sharing.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span className="text-sm">Secure login and authentication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span className="text-sm">Mobile-friendly access to records</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span className="text-sm">Prescription refill requests</span>
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
                  <h3 className="text-xl font-bold">Telemedicine Support</h3>
                  <p className="text-muted-foreground">
                    Integration with virtual care platforms that enable secure video consultations and remote patient
                    monitoring.
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span className="text-sm">HIPAA-compliant video integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span className="text-sm">Virtual waiting room functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span className="text-sm">Pre-visit documentation collection</span>
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
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5">
          <div className="container px-4 md:px-6">
            <WebsiteShowcaseGrid
              websites={clientShowcases}
              columns={3}
              title="Client Website Examples"
              description="Examples of our work for various healthcare providers. See how we've helped medical practices establish their online presence."
            />
          </div>
        </section>

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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/case-studies">View Case Studies</Link>
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

