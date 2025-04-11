import {createFileRoute} from '@tanstack/react-router'
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin, Phone, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export const Route = createFileRoute('/providers/$providerId')({
  component: ProviderBookingPage,
})


function ProviderBookingPage() {
  const provider = {
    id: "serenity-spa",
    name: "Serenity Spa & Salon",
    rating: 4.8,
    reviewCount: 124,
    image: "https://dummyimage.com/300x300/cccccc/fff.jpg&text=placeholder",
    description:
      "Serenity Spa & Salon offers a tranquil escape from the everyday. Our expert staff provides a range of services from massages and facials to haircuts and styling, all designed to help you look and feel your best.",
    address: "123 Main Street, Anytown, USA",
    phone: "(555) 123-4567",
    hours: "Mon-Fri: 9am-8pm, Sat: 9am-6pm, Sun: 10am-4pm",
  }

  // These would be fetched based on the provider
  const services = [
    {
      id: "haircut",
      name: "Haircut & Style",
      description: "Includes consultation, shampoo, cut, and blow dry styling",
      duration: 60,
      price: 65,
    },
    {
      id: "color",
      name: "Hair Color",
      description: "Full color service including roots and ends",
      duration: 90,
      price: 95,
    },
    {
      id: "massage",
      name: "Swedish Massage",
      description: "Full-body relaxation massage to reduce tension and improve circulation",
      duration: 60,
      price: 85,
    },
    {
      id: "facial",
      name: "Signature Facial",
      description: "Customized facial treatment for your skin type",
      duration: 45,
      price: 75,
    },
    {
      id: "manicure",
      name: "Gel Manicure",
      description: "Long-lasting gel polish application with nail shaping and cuticle care",
      duration: 45,
      price: 45,
    },
  ]

  // Staff members would be fetched based on the provider
  const staff = [
    {
      id: "jennifer",
      name: "Jennifer Lee",
      title: "Senior Stylist",
      image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
    },
    {
      id: "michael",
      name: "Michael Chen",
      title: "Massage Therapist",
      image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
    },
    {
      id: "sarah",
      name: "Sarah Johnson",
      title: "Esthetician",
      image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
    },
    {
      id: "david",
      name: "David Wilson",
      title: "Nail Technician",
      image: "https://dummyimage.com/100x100/cccccc/fff.jpg&text=placeholder",
    },
  ]

  // Generate some fake available time slots
  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]

  return (
    <>
      <main className="flex-1">
        <div className="container mx-auto py-8">
          {/*<Link to="/search" className="inline-flex items-center text-sm text-rose-500 hover:text-rose-600 mb-6">*/}
          {/*  <ChevronLeft className="h-4 w-4 mr-1" />*/}
          {/*  Back to search results*/}
          {/*</Link>*/}

          <div className="grid gap-8 md:grid-cols-3">
            {/* Provider Info */}
            <div className="md:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{provider.name}</h1>
                  <div className="flex items-center mt-1 text-sm">
                    <div className="flex items-center text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 text-gray-900">{provider.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-500">{provider.reviewCount} reviews</span>
                  </div>
                </div>
                <p className="text-gray-600">{provider.description}</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span>{provider.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span>{provider.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-gray-500 mr-2 mt-0.5" />
                    <span>{provider.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="md:col-span-2">
              <Tabs defaultValue="services" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="services">Services</TabsTrigger>
                  <TabsTrigger value="date-time">Date & Time</TabsTrigger>
                  <TabsTrigger value="details">Your Details</TabsTrigger>
                  <TabsTrigger value="review">Review</TabsTrigger>
                </TabsList>

                {/* Step 1: Select Service */}
                <TabsContent value="services" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Select a service</h2>
                      <RadioGroup defaultValue="haircut">
                        {services.map((service) => (
                          <div
                            key={service.id}
                            className="flex items-center space-x-2 border rounded-lg p-4 mb-3 hover:border-rose-200 cursor-pointer"
                          >
                            <RadioGroupItem value={service.id} id={service.id} className="text-rose-500" />
                            <Label
                              htmlFor={service.id}
                              className="flex-1 flex justify-between items-start cursor-pointer"
                            >
                              <div>
                                <div className="font-medium">{service.name}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">${service.price}</div>
                                <div className="text-sm text-gray-500">{service.duration} min</div>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">Select a staff member (optional)</h2>
                      <RadioGroup defaultValue="any">
                        <div className="flex items-center space-x-2 border rounded-lg p-4 mb-3 hover:border-rose-200 cursor-pointer">
                          <RadioGroupItem value="any" id="any-staff" className="text-rose-500" />
                          <Label htmlFor="any-staff" className="flex-1 cursor-pointer">
                            <div className="font-medium">Any available staff member</div>
                          </Label>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          {staff.map((person) => (
                            <div
                              key={person.id}
                              className="flex items-center space-x-3 border rounded-lg p-3 hover:border-rose-200 cursor-pointer"
                            >
                              <RadioGroupItem value={person.id} id={person.id} className="text-rose-500" />
                              <div className="h-10 w-10 relative rounded-full overflow-hidden">
                                <img
                                  src={person.image}
                                  alt={person.name}
                                  // fill
                                  className="object-cover"
                                />
                              </div>
                              <Label htmlFor={person.id} className="cursor-pointer">
                                <div className="font-medium">{person.name}</div>
                                <div className="text-sm text-gray-500">{person.title}</div>
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex justify-end">
                      <Button>Continue to Date & Time</Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Step 2: Select Date & Time */}
                <TabsContent value="date-time" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Select a date</h2>
                      <div className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <Button variant="outline" size="sm">
                            <ChevronLeft className="h-4 w-4" />
                          </Button>
                          <h3 className="font-medium">April 2025</h3>
                          <Button variant="outline" size="sm">
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center">
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                            <div key={day} className="text-xs font-medium text-gray-500 py-1">
                              {day}
                            </div>
                          ))}
                          {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
                            <Button
                              key={date}
                              variant={date === 10 ? "default" : "outline"}
                              className={`h-10 ${date === 10 ? "bg-rose-500 hover:bg-rose-600" : ""}`}
                            >
                              {date}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">Select a time</h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <Button key={time} variant="outline" className="h-12">
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">Back to Services</Button>
                      <Button>Continue to Your Details</Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Step 3: Your Details */}
                <TabsContent value="details" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Your information</h2>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <Input id="first-name" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input id="last-name" placeholder="Doe" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="name@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone number</Label>
                          <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="notes">Special requests or notes (optional)</Label>
                          <Textarea
                            id="notes"
                            placeholder="Any special requests or information the provider should know"
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">Back to Date & Time</Button>
                      <Button>Continue to Review</Button>
                    </div>
                  </div>
                </TabsContent>

                {/* Step 4: Review & Confirm */}
                <TabsContent value="review" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Review your booking</h2>
                      <Card>
                        <CardContent className="p-6 space-y-4">
                          <div className="flex justify-between pb-4 border-b">
                            <div>
                              <h3 className="font-medium">{provider.name}</h3>
                              <p className="text-sm text-gray-500">{provider.address}</p>
                            </div>
                            <div className="h-12 w-12 relative rounded-lg overflow-hidden">
                              <img
                                src={provider.image}
                                alt={provider.name}
                                // fill
                                className="object-cover"
                              />
                            </div>
                          </div>

                          <div className="space-y-3 pb-4 border-b">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                                <span>Wednesday, April 10, 2025</span>
                              </div>
                              <Button variant="link" className="p-0 h-auto text-rose-500">
                                Change
                              </Button>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <Clock className="h-5 w-5 text-gray-500 mr-2" />
                                <span>2:00 PM</span>
                              </div>
                              <Button variant="link" className="p-0 h-auto text-rose-500">
                                Change
                              </Button>
                            </div>
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <Users className="h-5 w-5 text-gray-500 mr-2" />
                                <span>Jennifer Lee (Senior Stylist)</span>
                              </div>
                              <Button variant="link" className="p-0 h-auto text-rose-500">
                                Change
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-2 pb-4 border-b">
                            <div className="flex justify-between">
                              <span>Haircut & Style (60 min)</span>
                              <span>$65.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-500">
                              <span>Service fee</span>
                              <span>$2.00</span>
                            </div>
                            <div className="flex justify-between font-medium pt-2">
                              <span>Total</span>
                              <span>$67.00</span>
                            </div>
                          </div>

                          <div className="text-sm text-gray-500">
                            <p className="font-medium text-gray-900 mb-2">Cancellation Policy</p>
                            <p>
                              Free cancellation up to 24 hours before your appointment. Cancellations within 24 hours
                              may be subject to a fee of 50% of the service price.
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">Back to Your Details</Button>
                      <Button className="bg-rose-500 hover:bg-rose-600">Confirm Booking</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

