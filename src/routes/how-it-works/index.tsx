import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Compass, MessageSquare, Search, Smartphone } from "lucide-react"


export const Route = createFileRoute('/how-it-works/')({
  component: HowItWorks,
})


function HowItWorks() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  How CheddarBook Works
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how easy it is to book appointments with your favorite local businesses
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Step 1</div>
                <h2 className="text-3xl font-bold tracking-tighter">Discover local services</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Browse through thousands of local businesses and service providers. Filter by location, category,
                  price, and availability to find exactly what you're looking for.
                </p>
                <ul className="grid gap-2">
                  {["Search by service type", "Filter by location", "Read verified reviews", "Compare prices"].map(
                    (item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-500" />
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <img
                    src="https://dummyimage.com/400x400/cccccc/fff.jpg&text=placeholder"
                    alt="Discover services illustration"
                    // fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex justify-center order-last lg:order-first">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <img
                    src="https://dummyimage.com/400x400/cccccc/fff.jpg&text=placeholder"
                    alt="Book appointment illustration"
                    // fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Step 2</div>
                <h2 className="text-3xl font-bold tracking-tighter">Book your appointment</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Select your preferred date and time from real-time availability. No more back-and-forth calls or
                  waiting for confirmation.
                </p>
                <ul className="grid gap-2">
                  {[
                    "See real-time availability",
                    "Book 24/7, even outside business hours",
                    "Secure your spot instantly",
                    "Add to your calendar with one click",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-rose-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Step 3</div>
                <h2 className="text-3xl font-bold tracking-tighter">Receive reminders</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Get automatic reminders before your appointment so you never miss a booking. Easily reschedule if your
                  plans change.
                </p>
                <ul className="grid gap-2">
                  {[
                    "Email and text reminders",
                    "Calendar integration",
                    "Easy rescheduling options",
                    "Appointment history in your account",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-rose-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <img
                    src="https://dummyimage.com/400x400/cccccc/fff.jpg&text=placeholder"
                    alt="Reminders illustration"
                    // fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex justify-center order-last lg:order-first">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                  <img
                    src="https://dummyimage.com/400x400/cccccc/fff.jpg&text=placeholder"
                    alt="Review illustration"
                    // fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Step 4</div>
                <h2 className="text-3xl font-bold tracking-tighter">Enjoy and review</h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  After your appointment, share your experience with a review to help others find great service
                  providers.
                </p>
                <ul className="grid gap-2">
                  {[
                    "Rate your experience",
                    "Share detailed feedback",
                    "Upload photos",
                    "Help others find great services",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-rose-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Features you'll love</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  CheddarBook makes booking appointments easier than ever
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
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
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to know about using CheddarBook
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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

const features = [
  {
    title: "24/7 Booking",
    description: "Book appointments anytime, day or night, even when businesses are closed.",
    icon: <Clock className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Instant Confirmation",
    description: "Receive immediate confirmation for your bookings without waiting.",
    icon: <Check className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Smart Reminders",
    description: "Get timely notifications so you never miss an appointment.",
    icon: <MessageSquare className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Mobile Friendly",
    description: "Book on the go with our mobile-optimized experience.",
    icon: <Smartphone className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Discover New Places",
    description: "Find new service providers based on verified reviews and ratings.",
    icon: <Compass className="h-8 w-8 text-rose-500" />,
  },
  {
    title: "Smart Search",
    description: "Filter by service type, location, price, and availability.",
    icon: <Search className="h-8 w-8 text-rose-500" />,
  },
]

const faqs = [
  {
    question: "Is CheddarBook free to use?",
    answer:
      "Yes, CheddarBook is completely free for customers to use. You can search for services, book appointments, and manage your bookings without any cost. Service providers may have their own cancellation policies, so be sure to check those before booking.",
  },
  {
    question: "How do I cancel or reschedule an appointment?",
    answer:
      "You can easily cancel or reschedule appointments through your CheddarBook account. Simply log in, go to 'My Appointments', select the booking you want to change, and choose 'Cancel' or 'Reschedule'. Please note that each business has its own cancellation policy, which will be clearly displayed before you confirm any changes.",
  },
  {
    question: "Can I book appointments for someone else?",
    answer:
      "Yes, you can book appointments for friends or family members. During the booking process, you'll have the option to enter the name and contact information of the person who will be attending the appointment.",
  },
  {
    question: "How do I know if my appointment is confirmed?",
    answer:
      "Once you complete a booking, you'll receive an immediate confirmation email. You can also check the status of all your appointments in the 'My Appointments' section of your account. All confirmed appointments will be marked as 'Confirmed'.",
  },
  {
    question: "What happens if a business cancels my appointment?",
    answer:
      "If a business needs to cancel your appointment, you'll be notified immediately via email and text message (if you've opted in for SMS notifications). You'll be given priority to reschedule, and in some cases, businesses may offer a discount on your next service as a courtesy.",
  },
  {
    question: "Can I leave reviews for services I've booked?",
    answer:
      "After your appointment, you'll receive an email inviting you to leave a review. Your feedback helps other users make informed decisions and helps businesses improve their services. You can rate your experience and leave detailed comments about what you liked or what could be improved.",
  },
]

