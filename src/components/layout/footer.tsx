import Link from 'next/link';
import { Code, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Code className="h-8 w-8 text-primary" />
              <span className="font-headline text-xl font-bold">Brick & Byte</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Building strong, affordable, and high-quality digital foundations for small businesses.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#why-us" className="text-muted-foreground hover:text-primary transition-colors">Why Us</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                    <a href="tel:+916207392585" className="hover:text-primary transition-colors">+91-6207392585</a>, <a href="tel:+916302379590" className="hover:text-primary transition-colors">+91-6302379590</a>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Gurgaon, Jodhpur</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Brick & Byte Web Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
