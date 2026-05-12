import Link from "next/link";
import { Hexagon, Mail, Phone, MapPin, Globe, MessageCircle, Share2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight text-foreground">Vektor3d</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed text-balance">
              Precision 3D printing and manufacturing solutions for demanding industrial and creative applications.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-foreground">
                <Globe className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-foreground">
                <Share2 className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full bg-muted hover:bg-primary/20 hover:text-primary transition-colors text-foreground">
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Industrial Prototyping</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Dental Models</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Reverse Engineering</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">CAD Design</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:quotes@vektor3d.com" className="hover:text-foreground transition-colors">quotes@vektor3d.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+15551234567" className="hover:text-foreground transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>100 Innovation Way<br />Tech Park, CA 94043</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-foreground font-semibold mb-6">Need it fast?</h3>
            <p className="text-muted-foreground text-sm mb-4">Chat with our engineers instantly via WhatsApp.</p>
            <a 
              href="https://wa.me/15551234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 text-[#25D366] rounded-full border border-[#25D366]/20 hover:bg-[#25D366] hover:text-black transition-colors font-medium text-sm"
            >
              Message on WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Vektor3d Systems. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
