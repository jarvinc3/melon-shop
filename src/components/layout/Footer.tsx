import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="bg-primary text-secondary border-t border-muted">
      <div className="container mx-auto px-4 py-10">
        <div className="">
          <div className="flex flex-col items-center text-center border-b border-muted pb-5">
            <h3 className="text-2xl font-bold text-primary mb-4">ModernShop</h3>
            <p className="mb-4">Your destination for premium products and exceptional shopping experience.</p>
            <div className="flex space-x-4">
              <Link to="#" className="hover:text-info transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-info transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-info transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link to="#" className="hover:text-info transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="flex pt-5 justify-evenly text-center">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 underline underline-offset-4">
                <li>
                  <Link to="/" className="hover:text-info transition-colors ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-info transition-colors ">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="hover:text-info transition-colors ">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-info transition-colors ">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Customer Service</h4>
              <ul className="space-y-2 underline underline-offset-4">
                <li>
                  <Link to="/contact" className="hover:text-info transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-info transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-info transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-info transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">Legal</h4>
              <ul className="space-y-2 underline underline-offset-4">
                <li>
                  <Link to="#" className="hover:text-info transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-info transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-info transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-muted mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ModernShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
