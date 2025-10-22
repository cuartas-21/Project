import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";
import { DollarSign, Users, Calendar, BarChart2 } from "lucide-react";
import { bookings, users } from "@/lib/data";

const totalRevenue = bookings
  .filter(b => b.paymentStatus === 'realized')
  .reduce((sum, b) => sum + b.totalPrice, 0);

const totalBookings = bookings.length;
const totalUsers = users.length;

const monthlyRevenueData = [
    { name: 'Jan', revenue: 400000 }, { name: 'Feb', revenue: 300000 },
    { name: 'Mar', revenue: 500000 }, { name: 'Apr', revenue: 450000 },
    { name: 'May', revenue: 600000 }, { name: 'Jun', revenue: 800000 },
    { name: 'Jul', revenue: 950000 },
];

const bookingsByCourtData = [
    { name: 'El Pradito', bookings: 40 }, { name: 'Mundialista', bookings: 30 },
    { name: 'La Bombonera', bookings: 50 }, { name: 'El Campín', bookings: 25 },
];


export default function AdminOverviewPage() {
  return (
    <div className="container mx-auto space-y-8">
       <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">Admin Overview</h1>
        <p className="text-muted-foreground">A snapshot of your platform's activity.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalRevenue.toLocaleString('es-CO')}</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalBookings}</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{totalUsers}</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Revenue Over Time</CardTitle>
            <CardDescription>Monthly revenue for the last 7 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyRevenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${Number(value) / 1000}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString('es-CO')}`} />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Bookings by Court</CardTitle>
             <CardDescription>Total bookings per court.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bookingsByCourtData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="bookings" fill="hsl(var(--primary))" />
                </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
