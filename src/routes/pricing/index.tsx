import {createFileRoute} from '@tanstack/react-router'
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const Route = createFileRoute('/pricing/')({
  component: Pricing,
})

function Pricing() {
  return (
    <>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Simple, transparent pricing
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that's right for your business
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Tabs defaultValue="monthly" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="annually">Annually (Save 20%)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="monthly" className="mt-0">
                    {/* Monthly pricing content is rendered in the cards below */}
                  </TabsContent>
                  <TabsContent value="annually" className="mt-0">
                    {/* Annual pricing content is rendered in the cards below */}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Free</CardTitle>
                  <CardDescription>For individuals just getting started</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-bold tracking-tight">$0</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Up to 50 appointments per month",
                      "Basic online booking",
                      "Email reminders",
                      "Single staff calendar",
                      "Client database",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-rose-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get started</Button>
                </CardFooter>
              </Card>
              <Card className="border-2 border-rose-200 shadow-md">
                <CardHeader>
                  <div className="px-3 py-1 text-xs font-semibold bg-rose-100 text-rose-600 rounded-full w-fit">
                    Most Popular
                  </div>
                  <CardTitle className="mt-4">Professional</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-bold tracking-tight">$29</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Unlimited appointments",
                      "Advanced online booking",
                      "SMS & email reminders",
                      "Up to 5 staff calendars",
                      "Client database & history",
                      "Custom intake forms",
                      "Basic reporting",
                      "Payment processing",
                      "24/7 customer support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-rose-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start free trial</Button>
                </CardFooter>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Business</CardTitle>
                  <CardDescription>For established businesses</CardDescription>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-4xl font-bold tracking-tight">$79</span>
                    <span className="ml-1 text-xl font-semibold">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Everything in Professional",
                      "Unlimited staff calendars",
                      "Advanced reporting & analytics",
                      "Custom branding",
                      "API access",
                      "Membership management",
                      "Resource scheduling",
                      "Multiple location support",
                      "Priority support",
                      "Dedicated account manager",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 shrink-0 text-rose-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start free trial</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Compare plans</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find the perfect plan for your business needs
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                <tr>
                  <th className="py-4 px-6 text-left font-medium text-gray-500">Features</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-500">Free</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-500">Professional</th>
                  <th className="py-4 px-6 text-center font-medium text-gray-500">Business</th>
                </tr>
                </thead>
                <tbody className="divide-y">
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-4 px-6 text-left font-medium">{feature.name}</td>
                    <td className="py-4 px-6 text-center">{renderFeatureValue(feature.free)}</td>
                    <td className="py-4 px-6 text-center">{renderFeatureValue(feature.professional)}</td>
                    <td className="py-4 px-6 text-center">{renderFeatureValue(feature.business)}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently asked questions
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Common questions about our pricing plans
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="grid gap-6">
                {pricingFaqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-500">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-rose-500 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to get started?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Try CheddarBook free for 14 days. No credit card required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-rose-500 hover:bg-gray-100">
                  Start your free trial
                </Button>
                <Button size="lg" variant="outline" className="border-white text-rose-500 hover:bg-gray-100">
                  Contact sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

function renderFeatureValue(value: boolean | string) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-rose-500" />
  } else if (value === false) {
    return <span className="text-gray-300">—</span>
  } else {
    return <span>{value}</span>
  }
}

const comparisonFeatures = [
  {
    name: "Monthly appointments",
    free: "50",
    professional: "Unlimited",
    business: "Unlimited",
  },
  {
    name: "Staff calendars",
    free: "1",
    professional: "5",
    business: "Unlimited",
  },
  {
    name: "Email reminders",
    free: true,
    professional: true,
    business: true,
  },
  {
    name: "SMS reminders",
    free: false,
    professional: true,
    business: true,
  },
  {
    name: "Client database",
    free: true,
    professional: true,
    business: true,
  },
  {
    name: "Custom intake forms",
    free: false,
    professional: true,
    business: true,
  },
  {
    name: "Payment processing",
    free: false,
    professional: true,
    business: true,
  },
  {
    name: "Reporting & analytics",
    free: false,
    professional: "Basic",
    business: "Advanced",
  },
  {
    name: "Custom branding",
    free: false,
    professional: false,
    business: true,
  },
  {
    name: "API access",
    free: false,
    professional: false,
    business: true,
  },
  {
    name: "Multiple locations",
    free: false,
    professional: false,
    business: true,
  },
  {
    name: "Customer support",
    free: "Email only",
    professional: "24/7",
    business: "Priority",
  },
]

const pricingFaqs = [
  {
    question: "Can I change plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be billed the prorated amount for the remainder of your billing cycle. When you downgrade, the new rate will apply at the start of your next billing cycle.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No, all plans are month-to-month or year-to-year with no long-term contracts. You can cancel at any time and your plan will remain active until the end of your current billing period.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. For annual Business plans, we can also accept payment via invoice with bank transfer.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on our Professional and Business plans. No credit card is required to start your trial. At the end of your trial, you can choose to subscribe or downgrade to our Free plan.",
  },
  {
    question: "What happens if I exceed my plan limits?",
    answer:
      "If you're on the Free plan and exceed 50 appointments in a month, you'll be notified and given the option to upgrade to a paid plan. We won't cut off your service immediately, but continued overuse will require an upgrade.",
  },
  {
    question: "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for qualified non-profit organizations and educational institutions. Please contact our sales team for more information and to verify your eligibility.",
  },
]

