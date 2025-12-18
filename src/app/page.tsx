import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, LayoutPanelLeft, Building2, Wrench, CircleDollarSign, Rocket, Palette, Users, Phone, MapPin, Mail } from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ContactForm } from '@/components/contact-form';

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
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
    <section id="home" className="relative h-dvh flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center p-4">
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight mb-4 animate-fade-in-down">
          Strong Foundations for Your <span className="text-primary">Digital Presence</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up">
          We build affordable, high-quality websites for small businesses, startups, and local brands. Clean design, fast performance, and practical solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="font-bold">
            <a href="#services">Get a Website</a>
          </Button>
          <Button asChild size="lg" variant="secondary" className="font-bold">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <CodeXml className="w-10 h-10 text-primary" />,
    title: 'Website Development',
    description: 'Custom-coded websites built from the ground up for optimal performance and unique brand identity.',
  },
  {
    icon: <LayoutPanelLeft className="w-10 h-10 text-primary" />,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive sales for your marketing campaigns.',
  },
  {
    icon: <Building2 className="w-10 h-10 text-primary" />,
    title: 'Business Websites',
    description: 'Professional, multi-page websites to establish your online presence and showcase your services.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-primary" />,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, and security to keep your website running smoothly and securely.',
  },
];

function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2">Practical solutions for growing businesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
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
    icon: <CircleDollarSign className="w-10 h-10 text-primary" />,
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
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground mt-2">The Brick & Byte Advantage</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsItems.map((item, index) => (
            <Card key={index} className="text-center bg-card hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
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
      quote: "Brick & Byte delivered a website that exceeded our expectations. The design is clean, modern, and perfectly represents our brand. The process was seamless and incredibly fast!",
      name: "Aarav Sharma",
      title: "Owner, Local Cafe",
      avatar: "AS",
    },
    {
      quote: "As a startup, we needed a professional and affordable web presence. Brick & Byte was the perfect partner. They understood our vision and brought it to life on a tight budget.",
      name: "Priya Singh",
      title: "Founder, Tech Startup",
      avatar: "PS",
    },
    {
      quote: "The team's attention to detail and commitment to quality is outstanding. Our new landing page has significantly improved our lead generation. Highly recommended!",
      name: "Rohan Mehta",
      title: "Marketing Manager",
      avatar: "RM",
    },
     {
      quote: "I was impressed with their professionalism and skill. They listened to my needs and created a website that's both beautiful and functional. I've already seen an increase in customer inquiries.",
      name: "Anika Verma",
      title: "Freelance Photographer",
      avatar: "AV",
    },
    {
      quote: "Their transparent pricing and quick turnaround time were exactly what my small business needed. A fantastic experience from start to finish.",
      name: "Vikram Reddy",
      title: "Owner, Local Bookstore",
      avatar: "VR",
    },
    {
      quote: "Working with Brick & Byte was a breeze. They are responsive, creative, and truly understand how to build for the web. I couldn't be happier with the final product.",
      name: "Isha Kapoor",
      title: "Yoga Instructor",
      avatar: "IK",
    },
  ]
  

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
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
  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">Ready to build your digital foundation? Contact us today.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Phone</h3>
                <a href="tel:+916207392585" className="text-muted-foreground hover:text-primary transition-colors">+91-6207392585</a><br/>
                <a href="tel:+916302379590" className="text-muted-foreground hover:text-primary transition-colors">+91-6302379590</a>
              </div>
            </div>
             <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Email</h3>
                <a href="mailto:aatifahmad0710@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">aatifahmad0710@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Office Locations</h3>
                <p className="text-muted-foreground">Gurgaon, Jodhpur</p>
              </div>
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
