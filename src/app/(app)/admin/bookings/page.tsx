import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bookings, courts, users } from "@/lib/data";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu";

export default function AdminAllBookingsPage() {
  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-headline tracking-tight">Manage Bookings</h1>
        <p className="text-muted-foreground">View and manage all user reservations.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Reservations</CardTitle>
          <CardDescription>A complete list of bookings on the platform.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Court</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => {
                const court = courts.find((c) => c.id === booking.courtId);
                const user = users.find((u) => u.id === booking.userId);
                return (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{user?.name || "N/A"}</TableCell>
                    <TableCell>{court?.name || "N/A"}</TableCell>
                    <TableCell>{new Date(booking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</TableCell>
                    <TableCell>{`${booking.startTime} - ${booking.endTime}`}</TableCell>
                    <TableCell>
                      <Badge variant={booking.paymentStatus === 'realized' ? 'default' : 'secondary'} className={booking.paymentStatus === 'realized' ? 'bg-green-600' : 'bg-yellow-500'}>
                        {booking.paymentStatus.charAt(0).toUpperCase() + booking.paymentStatus.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={booking.status === 'confirmed' ? 'default' : 'destructive'}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button aria-haspopup="true" size="icon" variant="ghost">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuCheckboxItem checked={booking.paymentStatus === 'realized'}>Mark as Realized</DropdownMenuCheckboxItem>
                           <DropdownMenuCheckboxItem checked={booking.paymentStatus === 'pending'}>Mark as Pending</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
