import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SmileIcon as Tooth, Globe, Sparkles, Users, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Tooth className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">MedicBuilds</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/showcase" className="text-sm font-medium hover:text-primary">
              Showcase
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Beautiful Websites for Dental Clinics
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Showcase your dental practice with a professional, custom website designed specifically for
                    dentists.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    View Our Work <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full md:h-[450px] lg:h-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Dental website showcase"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose MedicBuilds?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We specialize in creating stunning websites for dental clinics that attract new patients and showcase
                  your services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Professional Design</h3>
                <p className="text-center text-muted-foreground">
                  Custom-designed websites that reflect your clinic's unique identity and services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Sparkles className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Patient-Focused</h3>
                <p className="text-center text-muted-foreground">
                  User-friendly interfaces that make it easy for patients to book appointments and find information.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Grow Your Practice</h3>
                <p className="text-center text-muted-foreground">
                  SEO-optimized websites that help new patients find your dental clinic online.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Section */}
        <section id="showcase" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Dental Website Showcase
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our portfolio of beautiful dental websites we've created for clinics like yours.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Bright+Smile+Dental"
                    alt="Bright Smile Dental website"
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Bright Smile Dental</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern website with online booking and virtual consultations
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Online Booking
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Patient Portal
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Responsive
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary">View Website</Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Family+Dental+Care"
                    alt="Family Dental Care website"
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Family Dental Care</h3>
                  <p className="text-sm text-muted-foreground">
                    Family-friendly design with service galleries and testimonials
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Service Gallery
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Testimonials
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Blog
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary">View Website</Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Advanced+Orthodontics"
                    alt="Advanced Orthodontics website"
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Advanced Orthodontics</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialist orthodontic practice with before/after galleries
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Before/After
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      3D Tours
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Animations
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary">View Website</Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Cosmetic+Dental+Studio"
                    alt="Cosmetic Dental Studio website"
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Cosmetic Dental Studio</h3>
                  <p className="text-sm text-muted-foreground">
                    Luxury cosmetic dentistry with portfolio and financing options
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Portfolio
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Financing
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary">View Website</Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Pediatric+Dental+Center"
                    alt="Pediatric Dental Center website"
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Pediatric Dental Center</h3>
                  <p className="text-sm text-muted-foreground">
                    Child-friendly design with interactive elements and parent resources
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Interactive
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Resources
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Fun Design
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary">View Website</Button>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border shadow-sm">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Dental+Implant+Specialists"
                    alt="Dental Implant Specialists website"
                    width={500}
                    height={300}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">Dental Implant Specialists</h3>
                  <p className="text-sm text-muted-foreground">
                    Specialized implant practice with educational content and case studies
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Case Studies
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Educational
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                      Multi-location
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                  <Button variant="secondary">View Website</Button>
                </div>
              </div>
            </div>

            {/* Featured Case Study */}
            <div className="mx-auto max-w-6xl mt-16 rounded-lg border shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Featured Case Study
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smile Bright Dental Transformation</h3>
                  <p className="text-muted-foreground mb-6">
                    Dr. Sarah Johnson's practice saw a 43% increase in new patient appointments within 3 months of
                    launching their new website.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Integrated online booking system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Mobile-optimized patient experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>SEO strategy targeting local keywords</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Virtual consultation feature</span>
                    </li>
                  </ul>
                  <Button className="w-fit">Read Full Case Study</Button>
                </div>
                <div className="relative min-h-[300px] md:min-h-full">
                  <Image
                    src="/placeholder.svg?height=600&width=800&text=Smile+Bright+Dental+Before+and+After"
                    alt="Smile Bright Dental website before and after"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Website Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dental Website Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our dental websites come packed with features designed specifically for dental practices.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Online Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Allow patients to book appointments directly through your website, 24/7.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Staff Profiles</h3>
                <p className="text-sm text-muted-foreground">
                  Showcase your dental team with professional profiles to build patient trust.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Service Galleries</h3>
                <p className="text-sm text-muted-foreground">
                  Display your dental services with beautiful galleries and detailed information.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Patient Forms</h3>
                <p className="text-sm text-muted-foreground">
                  Digital intake forms that patients can complete before their appointment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Virtual Tours</h3>
                <p className="text-sm text-muted-foreground">
                  Give patients a virtual tour of your dental practice to ease anxiety.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Tooth className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Before & After</h3>
                <p className="text-sm text-muted-foreground">
                  Showcase your best dental work with before and after galleries.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">SEO Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Built-in SEO features to help patients find your dental practice online.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Testimonials</h3>
                <p className="text-sm text-muted-foreground">
                  Display patient reviews and testimonials to build trust with new patients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Simple Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting your dental clinic online is easy with our streamlined approach.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Consultation</h3>
                <p className="text-center text-muted-foreground">
                  We discuss your dental practice's needs, goals, and design preferences.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Design & Development</h3>
                <p className="text-center text-muted-foreground">
                  Our team creates a custom website tailored to your dental practice.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Launch & Support</h3>
                <p className="text-center text-muted-foreground">
                  Your website goes live with ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Dental Clinics Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from dental professionals who have transformed their online presence with MedicBuilds.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Smile Bright Dental",
                  quote:
                    "MedicBuilds transformed our online presence. Our new website has helped us attract more patients and streamline our booking process.",
                },
                {
                  name: "Dr. Michael Chen",
                  role: "Family Dental Care",
                  quote:
                    "The team at MedicBuilds understood exactly what our practice needed. Our website is beautiful and has significantly improved our patient engagement.",
                },
                {
                  name: "Dr. Emily Rodriguez",
                  role: "Advanced Dental Solutions",
                  quote:
                    "Working with MedicBuilds was effortless. They delivered a stunning website that perfectly represents our dental clinic's values and services.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                  <div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <CheckCircle key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="rounded-full bg-muted p-1">
                      <div className="h-10 w-10 rounded-full bg-primary/20" />
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

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the perfect plan for your dental clinic's online presence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              {[
                {
                  title: "Starter",
                  price: "$999",
                  description: "Perfect for new dental practices",
                  features: [
                    "Professional website design",
                    "Mobile responsive",
                    "Contact form",
                    "Basic SEO setup",
                    "3 content pages",
                  ],
                },
                {
                  title: "Professional",
                  price: "$1,999",
                  description: "Ideal for established clinics",
                  features: [
                    "Everything in Starter",
                    "Online appointment booking",
                    "Patient testimonials section",
                    "Service galleries",
                    "Blog integration",
                    "Advanced SEO package",
                  ],
                  popular: true,
                },
                {
                  title: "Premium",
                  price: "$2,999",
                  description: "For multi-location practices",
                  features: [
                    "Everything in Professional",
                    "Multiple location support",
                    "Staff profiles",
                    "Patient portal integration",
                    "Custom animations",
                    "Priority support",
                    "Monthly maintenance",
                  ],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`flex flex-col rounded-lg border ${plan.popular ? "border-primary shadow-lg" : "border-border shadow-sm"
                    } p-6`}
                >
                  {plan.popular && (
                    <div className="mb-4 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit mx-auto">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="ml-1 text-muted-foreground">one-time</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 ${plan.popular ? "" : "variant-outline"}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Dental Clinic's Online Presence?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how we can help your dental practice grow with a professional website.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Schedule a Consultation <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  View Our Portfolio
                </Button>
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
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

