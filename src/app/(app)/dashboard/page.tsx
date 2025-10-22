import { courts } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Available Courts</h1>
        <p className="text-muted-foreground">Browse and book your favorite court.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courts.map((court) => (
          <Card key={court.id} className="overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 flex flex-col">
            <CardHeader className="p-0">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={court.image.url}
                  alt={court.name}
                  fill
                  className="object-cover"
                  data-ai-hint={court.image.hint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <CardTitle className="font-headline text-xl mb-2">{court.name}</CardTitle>
              <div className="flex items-center text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{court.location}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold text-primary">${court.pricePerHour.toLocaleString('es-CO')}</p>
                <p className="text-xs text-muted-foreground">/ hour</p>
              </div>
              <Button asChild>
                <Link href={`/dashboard/book/${court.id}`}>
                  Book Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
