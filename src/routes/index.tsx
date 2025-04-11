import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, Calendar, Clock, Search, Star } from "lucide-react"
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    Book services with ease
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Discover and book appointments with local businesses. From salons to fitness classes, we've got you
                    covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <div className="flex-1">
                    <Input placeholder="What are you looking for?" className="h-12" />
                  </div>
                  <Button size="lg" className="gap-1">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  Popular:
                  <Link to="/" className="text-rose-500 hover:underline">
                    Hair Salon
                  </Link>
                  <Link to="/" className="text-rose-500 hover:underline">
                    Massage
                  </Link>
                  <Link to="/" className="text-rose-500 hover:underline">
                    Yoga
                  </Link>
                  <Link to="/" className="text-rose-500 hover:underline">
                    Nail Salon
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <img
                    src="https://dummyimage.com/500x500/cccccc/fff.jpg&text=placeholder"
                    alt="Booking illustration"
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How it works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Book your next appointment in three simple steps
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                  <Search className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Search</h3>
                <p className="text-gray-500">Find the perfect service from our wide range of providers</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                  <Calendar className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Book</h3>
                <p className="text-gray-500">Select your preferred date and time with real-time availability</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                  <Clock className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Enjoy</h3>
                <p className="text-gray-500">Receive instant confirmation and reminders for your appointment</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our most popular categories
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to="/"
                  className="group flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                    <img
                      src={"https://dummyimage.com/500x500/cccccc/fff.jpg&text=placeholder"}
                      alt={category.name}
                      // fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-center font-medium">{category.name}</h3>
                </Link>
              ))}
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="gap-1">
                View all categories
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What our users say</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col justify-between rounded-lg border bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                    <p className="text-gray-500">{testimonial.text}</p>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <img
                        src={testimonial.avatar || "https://dummyimage.com/300x500/cccccc/fff.jpg&text=placeholder"}
                        alt={testimonial.name}
                        // fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of users who book services online every day
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-rose-500 hover:bg-gray-100">
                  Sign up free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-rose-500 hover:bg-gray-100">
                  For businesses
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const categories = [
  {
    name: "Hair Salon",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Massage",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Nail Salon",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Yoga",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Fitness",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Spa",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Barbershop",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
  {
    name: "Wellness",
    image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    service: "Hair Salon",
    avatar: "https://dummyimage.com/40x40/cccccc/fff.jpg&text=placeholder",
    text: "CheddarBook made it so easy to find a last-minute appointment with a top stylist. The booking process was seamless!",
  },
  {
    name: "Michael Chen",
    service: "Massage Therapy",
    avatar: "https://dummyimage.com/40x40/cccccc/fff.jpg&text=placeholder",
    text: "I love being able to see real-time availability and book my massage appointments without having to call around.",
  },
  {
    name: "Jessica Williams",
    service: "Yoga Studio",
    avatar: "https://dummyimage.com/40x40/cccccc/fff.jpg&text=placeholder",
    text: "As someone who takes multiple fitness classes a week, CheddarBook has simplified my scheduling tremendously.",
  },
]
