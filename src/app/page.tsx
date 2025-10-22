import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarSearch, LayoutDashboard, CreditCard, Goal } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AppLogo } from '@/components/icons';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

const features = [
  {
    icon: <CalendarSearch className="h-10 w-10 text-primary" />,
    title: 'Find Availability',
    description: 'Easily check for available courts in Pereira with real-time updates.',
  },
  {
    icon: <Goal className="h-10 w-10 text-primary" />,
    title: 'Book Online',
    description: 'Reserve your preferred court, date, and time in just a few clicks.',
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: 'Secure Payments',
    description: 'Pay for your bookings securely through our integrated payment system.',
  },
  {
    icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    title: 'Manage Bookings',
    description: 'View, modify, or cancel your reservations from your personal dashboard.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <AppLogo className="h-8 w-auto text-primary" />
          <span className="sr-only">SyntheticPei</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button asChild variant="ghost">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative w-full h-[70vh] min-h-[400px] flex items-center justify-center text-center">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                quality={100}
                className="object-cover -z-10 brightness-50"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          <div className="container px-4 md:px-6 text-white">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-shadow">
                Your Next Match Awaits
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 text-shadow-sm">
                Discover and book the best synthetic soccer courts in Pereira. Fast, easy, and secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/dashboard">Book a Court Now</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl">Everything You Need to Play</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                SyntheticPei streamlines the process of finding and booking a court, so you can focus on the game.
              </p>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
                  <CardHeader className="flex flex-col items-center text-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    {feature.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 SyntheticPei. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
