import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Calendar,
  BarChartIcon as ChartBar,
  Clock,
  CreditCard,
  MessageSquare,
  Settings,
  Shield,
  Users,
} from "lucide-react"


export const Route = createFileRoute('/for-businesses/')({
  component: ForBusinesses,
})


function ForBusinesses() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Grow your business with CheddarBook
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    The all-in-one scheduling platform that helps service businesses attract and retain clients, fill
                    their calendar, and increase revenue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule a demo
                  </Button>
                </div>
                <p className="text-sm text-gray-500">No credit card required to start. Free plan available.</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <img
                    src="https://dummyimage.com/500x500/cccccc/fff.jpg&text=placeholder"
                    alt="Business dashboard illustration"
                    // fill
                    className="object-contain"
                    // priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Everything you need to succeed
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CheddarBook gives you powerful tools to manage your business and delight your clients
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {businessFeatures.map((feature, index) => (
                <Card key={index} className="border-2 border-gray-100">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-rose-100">
                      {feature.icon}
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Designed for all service businesses
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're a salon, spa, fitness studio, or any service-based business, CheddarBook has you
                  covered
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <Tabs defaultValue="salon" className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="salon">Salon & Spa</TabsTrigger>
                  <TabsTrigger value="fitness">Fitness</TabsTrigger>
                  <TabsTrigger value="health">Health & Wellness</TabsTrigger>
                  <TabsTrigger value="professional">Professional Services</TabsTrigger>
                </TabsList>
                <TabsContent value="salon" className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Salon & Spa Solutions</h3>
                      <p className="text-gray-500">
                        Manage your salon or spa with ease. From hair stylists to massage therapists, CheddarBook helps
                        you manage appointments, staff schedules, and client relationships all in one place.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Staff scheduling with individual calendars</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Service-specific booking options</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Client profiles with service history</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Automated appointment reminders</span>
                        </li>
                      </ul>
                      <Button className="mt-2">Learn more</Button>
                    </div>
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://dummyimage.com/300x500/cccccc/fff.jpg&text=placeholder"
                        alt="Salon dashboard"
                        // fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="fitness" className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Fitness Studio Solutions</h3>
                      <p className="text-gray-500">
                        Perfect for yoga studios, personal trainers, and fitness centers. Manage class schedules,
                        memberships, and attendance tracking all from one dashboard.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Class capacity management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Membership and package tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Waitlist functionality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Instructor schedule management</span>
                        </li>
                      </ul>
                      <Button className="mt-2">Learn more</Button>
                    </div>
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://dummyimage.com/300x500/cccccc/fff.jpg&text=placeholder"
                        alt="Fitness dashboard"
                        // fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="health" className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Health & Wellness Solutions</h3>
                      <p className="text-gray-500">
                        Designed for therapists, nutritionists, and wellness practitioners. Manage client appointments,
                        intake forms, and follow-ups seamlessly.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>HIPAA-compliant client management</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Custom intake forms</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Session notes and history</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Follow-up scheduling</span>
                        </li>
                      </ul>
                      <Button className="mt-2">Learn more</Button>
                    </div>
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://dummyimage.com/300x500/cccccc/fff.jpg&text=placeholder"
                        alt="Health dashboard"
                        // fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="professional" className="mt-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">Professional Services Solutions</h3>
                      <p className="text-gray-500">
                        Ideal for consultants, coaches, tutors, and other professional service providers. Streamline
                        your booking process and client management.
                      </p>
                      <ul className="grid gap-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Customizable consultation lengths</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Virtual meeting integration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Client document sharing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-rose-500" />
                          <span>Billing and invoicing tools</span>
                        </li>
                      </ul>
                      <Button className="mt-2">Learn more</Button>
                    </div>
                    <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                      <img
                        src="https://dummyimage.com/300x500/cccccc/fff.jpg&text=placeholder"
                        alt="Professional services dashboard"
                        // fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What our business partners say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of businesses that trust CheddarBook
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {businessTestimonials.map((testimonial, index) => (
                <Card key={index} className="border-2 border-gray-100">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <img
                          src={testimonial.avatar || "https://dummyimage.com/48x48/cccccc/fff.jpg&text=placeholder"}
                          alt={testimonial.name}
                          // fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.business}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500">{testimonial.text}</p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">{testimonial.result}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to grow your business?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Join thousands of businesses that use CheddarBook to streamline their scheduling, attract new
                    clients, and increase revenue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Start your free trial
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    View pricing
                  </Button>
                </div>
                <p className="text-sm text-gray-500">No credit card required. 14-day free trial.</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px]">
                  <img
                    src="https://dummyimage.com/400x400/cccccc/fff.jpg&text=placeholder"
                    alt="Business growth illustration"
                    // fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const businessFeatures = [
  {
    title: "Online Booking",
    description:
      "Let clients book appointments 24/7, even when you're closed. Reduce no-shows with automated reminders.",
    icon: <Calendar className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Client Management",
    description: "Build and maintain client relationships with detailed profiles, booking history, and preferences.",
    icon: <Users className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Staff Scheduling",
    description: "Manage your team's availability, services, and schedules all in one place.",
    icon: <Clock className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Business Analytics",
    description: "Gain insights into your business performance with detailed reports and analytics.",
    icon: <ChartBar className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Payment Processing",
    description: "Accept deposits, full payments, and sell packages or memberships online.",
    icon: <CreditCard className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Marketing Tools",
    description: "Attract new clients and keep existing ones coming back with targeted promotions.",
    icon: <MessageSquare className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Customization",
    description: "Tailor CheddarBook to fit your business needs with custom fields, forms, and settings.",
    icon: <Settings className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Secure & Reliable",
    description: "Your data is protected with enterprise-grade security and regular backups.",
    icon: <Shield className="h-6 w-6 text-rose-500" />,
  },
]

const businessTestimonials = [
  {
    name: "Jennifer Lee",
    business: "Serenity Spa & Salon",
    avatar: "https://dummyimage.com/48x48/cccccc/fff.jpg&text=placeholder",
    text: "CheddarBook transformed how we manage appointments. Our clients love the easy online booking, and we've seen a 30% reduction in no-shows thanks to the automated reminders.",
    result: "Increased bookings by 40% in 3 months",
  },
  {
    name: "Marcus Johnson",
    business: "Elite Fitness Studio",
    avatar: "https://dummyimage.com/48x48/cccccc/fff.jpg&text=placeholder",
    text: "As a fitness studio with multiple trainers and classes, scheduling was a nightmare before CheddarBook. Now our entire team is on the same page, and clients can easily book their favorite classes.",
    result: "Saved 15 hours per week on administrative tasks",
  },
  {
    name: "Sophia Rodriguez",
    business: "Wellness Center",
    avatar: "https://dummyimage.com/48x48/cccccc/fff.jpg&text=placeholder",
    text: "The client management features are incredible. We can track client history, preferences, and notes all in one place. It's helped us provide a much more personalized experience.",
    result: "Client retention improved by 25%",
  },
]
