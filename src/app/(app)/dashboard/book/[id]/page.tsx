"use client";

import { useState } from "react";
import Image from "next/image";
import { courts, getAvailableTimes } from "@/lib/data";
import { notFound, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Calendar as CalendarIcon, Clock, DollarSign, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { add, format } from "date-fns";

export default function BookCourtPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const court = courts.find((c) => c.id === params.id);

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  if (!court) {
    notFound();
  }

  const availableTimes = date ? getAvailableTimes(court.id, date) : [];
  
  const handleBookingConfirm = () => {
    setShowConfirmDialog(false);
    toast({
      title: "Booking Successful!",
      description: `Your booking for ${court.name} is confirmed.`,
      variant: 'default',
    });
    // In a real app, you would save the booking here
    router.push("/dashboard/bookings");
  }

  const endTime = selectedTime ? format(add(new Date(`1970-01-01T${selectedTime}`), { hours: 1 }), 'HH:mm') : '';

  return (
    <div className="container mx-auto">
      <Button variant="ghost" onClick={() => router.back()} className="mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Courts
      </Button>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="overflow-hidden">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={court.image.url}
                alt={court.name}
                fill
                className="object-cover"
                data-ai-hint={court.image.hint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{court.name}</CardTitle>
              <CardDescription className="flex items-center text-md">
                <MapPin className="h-4 w-4 mr-2" />
                {court.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-lg font-semibold">
                <DollarSign className="h-5 w-5 mr-2 text-primary" />
                <span>{court.pricePerHour.toLocaleString('es-CO')} COP / hour</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Book Your Slot</CardTitle>
              <CardDescription>Select a date and time to reserve the court.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold flex items-center"><CalendarIcon className="mr-2 h-5 w-5" /> Select Date</h3>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(day) => day < new Date(new Date().setHours(0,0,0,0))}
                    className="rounded-md border"
                  />
                </div>
              </div>

              {date && (
                <div className="space-y-2">
                  <h3 className="font-semibold flex items-center"><Clock className="mr-2 h-5 w-5" /> Select Time</h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {selectedTime && (
                <Button className="w-full" size="lg" onClick={() => setShowConfirmDialog(true)}>
                  Confirm Booking
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline">Confirm Your Reservation</DialogTitle>
            <DialogDescription>
              Please review your booking details before confirming.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-4 rounded-md bg-muted">
              <h4 className="font-semibold">{court.name}</h4>
              <p className="text-sm text-muted-foreground">{court.location}</p>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Date:</span>
              <span>{date ? format(date, 'PPP') : 'N/A'}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Time:</span>
              <span>{selectedTime} - {endTime}</span>
            </div>
             <div className="flex justify-between border-t pt-4">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold text-primary">${court.pricePerHour.toLocaleString('es-CO')} COP</span>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
            <Button onClick={handleBookingConfirm}>Pay & Book</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
