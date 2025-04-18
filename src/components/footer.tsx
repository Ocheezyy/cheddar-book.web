import {Calendar} from "lucide-react";
import {Link} from "@tanstack/react-router";

export default function Footer() {

  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col gap-6 md:flex-row md:gap-8 md:py-8">
        <div className="flex flex-col gap-3 md:w-1/3">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">CheddarBook</span>
          </div>
          <p className="text-sm text-gray-500">The easiest way to book appointments with your favorite businesses.</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-500 hover:text-gray-900">
                  About
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="#" className="text-gray-500 hover:text-gray-900">*/}
              {/*    Careers*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link to="#" className="text-gray-500 hover:text-gray-900">*/}
              {/*    Press*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">For Users</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/how-it-works" className="text-gray-500 hover:text-gray-900">
                  How it works
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="#" className="text-gray-500 hover:text-gray-900">*/}
              {/*    Browse services*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link to="#" className="text-gray-500 hover:text-gray-900">*/}
              {/*    Gift cards*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">For Businesses</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sign-up" className="text-gray-500 hover:text-gray-900">
                  Join as a provider
                </Link>
              </li>
              {/*<li>*/}
              {/*  <Link to="#" className="text-gray-500 hover:text-gray-900">*/}
              {/*    Business resources*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link to="#" className="text-gray-500 hover:text-gray-900">*/}
              {/*    Success stories*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-500 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-500 hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-2 border-t py-4 md:flex-row md:items-center md:justify-between md:py-6">
        <p className="text-xs text-gray-500">© 2025 CheddarBook. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-900">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-xs text-gray-500 hover:text-gray-900">
            Terms of Service
          </Link>
          <Link to="/cookie-policy" className="text-xs text-gray-500 hover:text-gray-900">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}