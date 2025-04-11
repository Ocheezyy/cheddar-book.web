import {createFileRoute, Link} from '@tanstack/react-router'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const Route = createFileRoute('/forgot-password/')({
  component: ForgotPasswordPage,
})


function ForgotPasswordPage() {
  return (
    <>
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md px-4">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Reset your password</h1>
              <p className="text-gray-500">Enter your email and we'll send you a link to reset your password</p>
            </div>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>
              <Button type="submit" className="w-full">
                Send reset link
              </Button>
            </form>
            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link to="/login" className="text-rose-500 hover:underline">
                Back to login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
