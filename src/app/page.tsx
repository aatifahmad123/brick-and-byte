"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, LayoutPanelLeft, Building2, Wrench, IndianRupee, Rocket, Palette, Users, Phone, MapPin, Mail, Check } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';



const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

import { useInView } from '@/hooks/use-in-view';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PricingSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section id="home" className="relative h-dvh flex items-center justify-center text-center text-foreground bg-lines-pattern overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="font-headline text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-4 animate-fade-in-down">
          Strong Foundations for Your <span className="text-primary">Digital Presence</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up">
          We build high-quality websites for small businesses, startups, and local brands. Clean design, fast performance, and practical solutions.
        </p>
        <Button asChild size="lg" className="font-bold text-xl px-8 py-3 h-auto animate-glow shimmer-btn">
          <a href="#contact">Get a Website</a>
        </Button>
      </div>
    </section>
  );
}

const pricingPackages = [
  {
    name: 'Starter Website',
    price: '₹5,499',
    description: 'Perfect for small businesses getting online for the first time.',
    features: [
      'Up to 3 Pages (Home, About, Contact)',
      'Mobile Responsive Design',
      'Basic Contact Form',
      'WhatsApp Chat Integration',
      'Basic SEO Setup',
      '3 Days Delivery',
      '1 Revision',
    ],
    bestFor: 'Local shops, tutors, freelancers, small service providers.',
    popular: false,
    color: 'border-green-500',
  },
  {
    name: 'Business Website',
    price: '₹8,499',
    description: 'For businesses that want a strong professional presence.',
    features: [
      'Up to 5 Pages',
      'Custom Modern Design',
      'Mobile + Tablet Optimized',
      'Contact Forms + WhatsApp Integration',
      'Basic Speed Optimization',
      'On-Page SEO Setup',
      'Google Analytics Setup',
      '5–7 Days Delivery',
      '3 Revisions',
    ],
    bestFor: 'Clinics, gyms, consultants, small companies.',
    popular: true,
    color: 'border-blue-500',
  },
  {
    name: 'Growth Website',
    price: '₹12,499',
    description: 'For businesses ready to generate serious leads.',
    features: [
      'Up to 8 Pages',
      'Premium Custom UI Design',
      'Lead Capture Forms',
      'Blog Setup',
      'Speed + Performance Optimization',
      'Advanced SEO Setup',
      'Basic Payment Integration (if needed)',
      '14–18 Days Delivery',
      '5 Revisions',
    ],
    bestFor: 'Startups, agencies, brands running ads.',
    popular: false,
    color: 'border-purple-500',
  },
];

function PricingSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="pricing" className="py-12 lg:py-24 bg-accent">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">Our Website Packages</h2>
          <p className="text-lg text-muted-foreground mt-2">Transparent pricing. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPackages.map((pkg, index) => (
            <Card
              key={index}
              className={`relative flex flex-col justify-between hover:shadow-xl transition-all duration-300 border-2 ${pkg.popular ? 'border-primary shadow-md scale-105 z-10' : 'border-gray-200 shadow-sm'}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  ⭐ Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="font-headline text-2xl font-bold">{pkg.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                </div>
                <CardDescription className="mt-2 text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-sm text-left">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col pt-4 border-t border-border/50 bg-secondary/10">
                <p className="text-sm font-semibold text-muted-foreground mb-1">Best For:</p>
                <p className="text-sm text-center">{pkg.bestFor}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'Custom Web Design',
    description: 'Unique, professional designs tailored to your brand identity. No generic templates, just pixel-perfect layouts.',
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: 'SEO & Performance',
    description: 'Fast-loading websites optimized for search engines to help customers find you and keep them engaged.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Maintenance & Support',
    description: 'We don\'t just build and leave. We provide ongoing support, security updates, and content changes.',
  },
];

function ServicesSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-12 lg:py-24">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2">Everything you need to grow online.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 shadow-sm hover:border-primary">
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="font-headline mt-4 text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyChooseUsItems = [
  {
    icon: <IndianRupee className="w-10 h-10 text-primary" />,
    title: 'Affordable Pricing',
    description: 'Get a professional website without breaking the bank. We offer budget-friendly packages for all needs.',
  },
  {
    icon: <Rocket className="w-10 h-10 text-primary" />,
    title: 'Fast Delivery',
    description: 'We work efficiently to get your website live quickly, so you can start attracting customers sooner.',
  },
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'Modern Design',
    description: 'Clean, beautiful, and user-friendly designs that make a lasting impression on your visitors.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Small-Business Friendly',
    description: 'We understand the unique challenges of small businesses and tailor our solutions to help you succeed.',
  },
];

function WhyChooseUsSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="why-us" className="py-20 lg:py-32 bg-accent">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground mt-2">The Brick & Byte Advantage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsItems.map((item, index) => (
            <Card key={index} className="text-center bg-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-border/40 hover:border-primary">
              <CardHeader className="items-center">
                {item.icon}
                <CardTitle className="font-headline mt-4 text-2xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Arrey, the website they made is just fantastic! My cafe sales have actually gone up. Simple, clean, and exactly what I wanted. Bahut badhiya kaam kiya hai.",
    name: "Aarav Sharma",
    title: "Owner, Sharma's Chai & Snacks",
    avatar: "AS",
  },
  {
    quote: "I was worried about the cost, but these guys are really reasonable. The design is top-notch, bilkul professional. My customers keep asking who made my site!",
    name: "Priya Singh",
    title: "Founder, Style Studio",
    avatar: "PS",
  },
  {
    quote: "Honest advice and quick service. They didn't try to oversell me anything. The landing page is working great for my consultancy. Highly recommend this team.",
    name: "Rohan Mehta",
    title: "Consultant, Mehta Associates",
    avatar: "RM",
  },
];


function TestimonialsSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2">Real stories from satisfied partners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between bg-card">
              <CardContent className="pt-6">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 mt-4">
                <Avatar>
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-12 lg:py-24 bg-accent">
      <div
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 transform ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Ready to build your digital foundation? Contact us today.</p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Phone</h3>
                <a href="tel:+916207392585" className="text-muted-foreground hover:text-primary transition-colors">+91-6207392585</a><br />
                <a href="tel:+916302379590" className="text-muted-foreground hover:text-primary transition-colors">+91-6302379590</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Email</h3>
                <a href="mailto:bricknbytebusiness@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">bricknbytebusiness@gmail.com</a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Office Locations</h3>
                <p className="text-muted-foreground">Gurgaon, Jodhpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
