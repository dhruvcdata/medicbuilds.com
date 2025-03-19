import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SmileIcon as Tooth, CheckCircle, ArrowRight } from "lucide-react"

export default function ShowcasePage() {
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
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/showcase" className="text-sm font-medium text-primary">
              Showcase
            </Link>
            <Link href="/#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </Link>
            <Link href="/#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Dental Website Portfolio
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our collection of custom-designed websites for dental practices of all specialties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl rounded-lg border shadow-md overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Featured Case Study
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Smile Bright Dental Transformation</h2>
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
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button className="w-fit">View Live Website</Button>
                    <Button variant="outline" className="w-fit">
                      Read Full Case Study
                    </Button>
                  </div>
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
          </div>
        </section>

        {/* Detailed Showcase Items */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-6xl space-y-20">
              {/* Bright Smile Dental */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    General Dentistry
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Bright Smile Dental</h2>
                  <p className="text-muted-foreground mb-6">
                    A modern, clean website designed for a general dentistry practice focused on family care. The site
                    features an intuitive appointment booking system and virtual consultation capabilities.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-bold mb-2">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Online Booking System</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Patient Portal</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Service Galleries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Staff Profiles</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Testimonial Carousel</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Insurance Information</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Results:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>43% increase in new patient appointments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>65% of appointments now booked online</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>Top 3 Google ranking for local search terms</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button>View Live Website</Button>
                </div>
                <div className="order-1 md:order-2 aspect-video relative overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Bright+Smile+Dental"
                    alt="Bright Smile Dental website"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Family Dental Care */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video relative overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Family+Dental+Care"
                    alt="Family Dental Care website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Family Dentistry
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Family Dental Care</h2>
                  <p className="text-muted-foreground mb-6">
                    A warm, welcoming website designed for a multi-generational family dental practice. The site
                    emphasizes patient comfort and education with resources for all age groups.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-bold mb-2">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Age-Specific Content</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Educational Resources</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Service Galleries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Family-Friendly Design</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Patient Testimonials</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Blog Integration</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Results:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>38% increase in family appointments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>52% increase in website engagement</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>Improved patient education metrics</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button>View Live Website</Button>
                </div>
              </div>

              {/* Advanced Orthodontics */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Orthodontic Specialty
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Advanced Orthodontics</h2>
                  <p className="text-muted-foreground mb-6">
                    A sophisticated website for an orthodontic practice specializing in modern treatment options. The
                    site showcases before/after results and advanced technology.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-bold mb-2">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Before/After Gallery</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Treatment Comparisons</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>3D Treatment Viewer</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Financing Calculator</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Virtual Consultations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Technology Showcase</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Results:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>57% increase in Invisalign consultations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>42% reduction in appointment cancellations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>Expanded patient geographic reach by 25 miles</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button>View Live Website</Button>
                </div>
                <div className="order-1 md:order-2 aspect-video relative overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Advanced+Orthodontics"
                    alt="Advanced Orthodontics website"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Cosmetic Dental Studio */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-video relative overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Cosmetic+Dental+Studio"
                    alt="Cosmetic Dental Studio website"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Cosmetic Dentistry
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Cosmetic Dental Studio</h2>
                  <p className="text-muted-foreground mb-6">
                    A luxury website for a high-end cosmetic dentistry practice. The design emphasizes beautiful results
                    with an elegant, premium aesthetic that appeals to their target clientele.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-bold mb-2">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Premium Design</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Portfolio Gallery</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Financing Options</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>VIP Appointment Booking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Video Testimonials</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Procedure Animations</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Results:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>68% increase in high-value procedures</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>Average case value increased by 42%</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>Featured in dental industry publications</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button>View Live Website</Button>
                </div>
              </div>

              {/* Pediatric Dental Center */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                    Pediatric Dentistry
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Pediatric Dental Center</h2>
                  <p className="text-muted-foreground mb-6">
                    A fun, engaging website designed specifically for a pediatric dental practice. The site features
                    child-friendly design elements and resources for both children and parents.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-bold mb-2">Key Features:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Interactive Elements</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Parent Resources</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Kid-Friendly Design</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Office Tour Videos</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Educational Games</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>First Visit Preparation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Results:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>53% increase in new family registrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>72% reduction in pre-appointment anxiety</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span>Improved parent satisfaction ratings</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button>View Live Website</Button>
                </div>
                <div className="order-1 md:order-2 aspect-video relative overflow-hidden rounded-lg border">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Pediatric+Dental+Center"
                    alt="Pediatric Dental Center website"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create Your Dental Website?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss how we can help your dental practice grow with a professional website.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1" asChild>
                  <Link href="/contact">
                    Contact Us Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#pricing">View Pricing</Link>
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
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

