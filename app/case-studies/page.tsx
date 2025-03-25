import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  HospitalIcon as MedicalIcon,
  CheckCircle,
  ArrowRight,
  BarChart,
  Users,
  Clock,
  Award,
  Zap,
  Globe,
} from "lucide-react"
import { Header } from "../header"

export default function CaseStudiesPage() {
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
                Success Stories
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Healthcare Website Case Studies
                </h1>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our websites have transformed healthcare practices and improved patient experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-theme-blue/5 to-theme-purple/5 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="inline-flex items-center rounded-full bg-theme-blue/10 px-3 py-1 text-sm font-medium text-theme-blue">
                  Featured Success Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Multi-Specialty Medical Group Transformation
                </h2>
              </div>

              <div className="rounded-lg border shadow-lg overflow-hidden bg-white">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[300px] md:h-auto">
                    <Image
                      src="/newmic.png"
                      alt="Medical Group website showcase"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="inline-block rounded-full bg-theme-blue/10 px-3 py-1 text-sm font-medium text-theme-blue">
                        Multi-Location Practice
                      </div>
                      <h3 className="text-2xl font-bold">The Challenge</h3>
                      <p className="text-muted-foreground">
                        A growing medical group with 5 locations and 15 providers was struggling with an outdated
                        website that wasn't mobile-friendly and lacked online booking capabilities. They were losing
                        potential patients to competitors with better digital presence.
                      </p>

                      <h3 className="text-2xl font-bold">Our Solution</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                          <span>Responsive, modern website design with location-specific pages</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                          <span>Integrated online booking system with provider selection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                          <span>Patient portal with secure messaging and form submission</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-theme-blue mt-0.5" />
                          <span>Location-specific SEO strategy targeting local keywords</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t p-8">
                  <h3 className="text-2xl font-bold mb-6">The Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-theme-blue/10 p-3">
                        <BarChart className="h-6 w-6 text-theme-blue" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-theme-blue">43%</div>
                        <p className="text-sm text-muted-foreground">Increase in new patient appointments</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-theme-teal/10 p-3">
                        <Globe className="h-6 w-6 text-theme-teal" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-theme-teal">65%</div>
                        <p className="text-sm text-muted-foreground">Of appointments now booked online</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-theme-purple/10 p-3">
                        <Users className="h-6 w-6 text-theme-purple" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-theme-purple">3.5x</div>
                        <p className="text-sm text-muted-foreground">Increase in website traffic</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-theme-pink/10 p-3">
                        <Clock className="h-6 w-6 text-theme-pink" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-theme-pink">28%</div>
                        <p className="text-sm text-muted-foreground">Reduction in administrative workload</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-muted/30 p-6 rounded-lg">
                    <blockquote className="italic text-muted-foreground">
                      "The new website has completely transformed our practice. Not only do we look more professional
                      online, but the integrated booking system has streamlined our operations and allowed our staff to
                      focus on patient care rather than phone calls. The return on investment has been remarkable."
                    </blockquote>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-theme-blue/20 mr-3"></div>
                      <div>
                        <p className="font-medium">Dr. James Wilson</p>
                        <p className="text-sm text-muted-foreground">Medical Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Case Studies */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-theme-purple/10 to-theme-blue/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center rounded-full bg-theme-purple/10 px-3 py-1 text-sm font-medium text-theme-purple">
                More Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Transforming Healthcare Practices</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore how our websites have helped healthcare providers across various specialties.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Case Study 1 */}
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <div className="relative h-[500px]">
                  <Image
                    src="/2.png"
                    alt="Telemedicine Integration"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block rounded-full bg-theme-teal/10 px-3 py-1 text-sm font-medium text-theme-teal mb-4">
                    Telemedicine
                  </div>
                  <h3 className="text-xl font-bold mb-2">Virtual Care Platform Integration</h3>
                  <p className="text-muted-foreground mb-4">
                    A primary care practice needed to quickly adapt to offering virtual visits during the pandemic while
                    maintaining their patient experience.
                  </p>
                  <h4 className="font-bold mb-2">Key Improvements:</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-teal mt-0.5" />
                      <span>Seamless telemedicine platform integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-teal mt-0.5" />
                      <span>Patient education resources for virtual visits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-teal mt-0.5" />
                      <span>Streamlined appointment workflow</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-theme-teal" />
                      <span className="text-sm font-medium">35% fewer no-shows</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-theme-teal" />
                      <span className="text-sm font-medium">40% expanded patient reach</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-theme-teal" />
                      <span className="text-sm font-medium">92% patient satisfaction</span>
                    </div>
                  </div>
                  <Button className="w-full bg-theme-teal hover:bg-theme-teal/90">Read Full Case Study</Button>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <div className="relative h-[500px]">
                  <Image
                    src="/3.png"
                    alt="Specialty Practice Rebrand"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block rounded-full bg-theme-pink/10 px-3 py-1 text-sm font-medium text-theme-pink mb-4">
                    Rebranding
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dermatology Practice Digital Transformation</h3>
                  <p className="text-muted-foreground mb-4">
                    An established dermatology practice wanted to update their brand image and attract more cosmetic
                    procedure patients.
                  </p>
                  <h4 className="font-bold mb-2">Key Improvements:</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span>Complete brand identity redesign</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span>Before/after gallery with filtering options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-pink mt-0.5" />
                      <span>Procedure-specific landing pages</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <BarChart className="h-4 w-4 text-theme-pink" />
                      <span className="text-sm font-medium">60% increase in high-value procedures</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4 text-theme-pink" />
                      <span className="text-sm font-medium">4.8/5 average review rating</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-theme-pink" />
                      <span className="text-sm font-medium">52% new patient growth</span>
                    </div>
                  </div>
                  <Button className="w-full bg-theme-pink hover:bg-theme-pink/90">Read Full Case Study</Button>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <div className="relative h-[500px]">
                  <Image
                    src="/4.png"
                    alt="Veterinary Hospital Website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block rounded-full bg-theme-yellow/10 px-3 py-1 text-sm font-medium text-theme-yellow mb-4">
                    Veterinary
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency  Hospital</h3>
                  <p className="text-muted-foreground mb-4">
                    A hospital offering emergency services needed a website that clearly communicated their
                    services and streamlined emergency intake.
                  </p>
                  <h4 className="font-bold mb-2">Key Improvements:</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span>Emergency service prominence and wait time display</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span>Digital intake form for faster processing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-yellow mt-0.5" />
                      <span>Pet owner educational resources</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-theme-yellow" />
                      <span className="text-sm font-medium">45% faster emergency intake</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4 text-theme-yellow" />
                      <span className="text-sm font-medium">75% increase in service area</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-theme-yellow" />
                      <span className="text-sm font-medium">38% increase in emergency cases</span>
                    </div>
                  </div>
                  <Button className="w-full bg-theme-yellow hover:bg-theme-yellow/90 text-white">
                    Read Full Case Study
                  </Button>
                </div>
              </div>

              {/* Case Study 4 */}
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <div className="relative h-[500px]">
                  <Image
                    src="/5.png"
                    alt="Mental Health Practice"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block rounded-full bg-theme-purple/10 px-3 py-1 text-sm font-medium text-theme-purple mb-4">
                    Mental Health
                  </div>
                  <h3 className="text-xl font-bold mb-2">Therapy Practice Online Presence</h3>
                  <p className="text-muted-foreground mb-4">
                    A group therapy practice needed a website that conveyed trust and accessibility while providing
                    resources for potential clients.
                  </p>
                  <h4 className="font-bold mb-2">Key Improvements:</h4>
                  <ul className="space-y-1 mb-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-purple mt-0.5" />
                      <span>Therapist matching quiz for new patients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-purple mt-0.5" />
                      <span>Secure initial assessment forms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-theme-purple mt-0.5" />
                      <span>Resource library with coping strategies</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-theme-purple" />
                      <span className="text-sm font-medium">68% increase in new clients</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4 text-theme-purple" />
                      <span className="text-sm font-medium">95% therapist match satisfaction</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BarChart className="h-4 w-4 text-theme-purple" />
                      <span className="text-sm font-medium">42% reduction in no-shows</span>
                    </div>
                  </div>
                  <Button className="w-full bg-theme-purple hover:bg-theme-purple/90">Read Full Case Study</Button>
                </div>
              </div>
            </div>
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
                  Ready to Transform Your Healthcare Practice?
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

