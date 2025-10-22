import type { User, Court, Booking } from './types';
import { PlaceHolderImages } from './placeholder-images';

const courtImages = PlaceHolderImages.filter(p => p.id.startsWith('court-'));
const avatarImages = PlaceHolderImages.filter(p => p.id.startsWith('avatar-'));

export const users: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@syntheticpei.com', role: 'admin', avatarUrl: avatarImages[0]?.imageUrl || '' },
  { id: '2', name: 'Regular User', email: 'user@syntheticpei.com', role: 'user', avatarUrl: avatarImages[1]?.imageUrl || '' },
];

export const courts: Court[] = [
  {
    id: '1',
    name: 'Cancha El Pradito',
    location: 'Av. Las Américas #123',
    pricePerHour: 50000,
    image: { id: 'court-1', url: courtImages[0]?.imageUrl, hint: courtImages[0]?.imageHint },
  },
  {
    id: '2',
    name: 'Fútbol 5 Mundialista',
    location: 'Calle 5 #45-67',
    pricePerHour: 65000,
    image: { id: 'court-2', url: courtImages[1]?.imageUrl, hint: courtImages[1]?.imageHint },
  },
  {
    id: '3',
    name: 'La Bombonera Pereira',
    location: 'Sector La Villa',
    pricePerHour: 55000,
    image: { id: 'court-3', url: courtImages[2]?.imageUrl, hint: courtImages[2]?.imageHint },
  },
  {
    id: '4',
    name: 'El Campín de Cuba',
    location: 'Barrio Cuba',
    pricePerHour: 48000,
    image: { id: 'court-4', url: courtImages[3]?.imageUrl, hint: courtImages[3]?.imageHint },
  },
];

export const bookings: Booking[] = [
  {
    id: '1',
    userId: '2',
    courtId: '1',
    date: '2024-08-15',
    startTime: '18:00',
    endTime: '19:00',
    status: 'confirmed',
    paymentStatus: 'realized',
    totalPrice: 50000,
  },
  {
    id: '2',
    userId: '2',
    courtId: '3',
    date: '2024-08-20',
    startTime: '20:00',
    endTime: '21:00',
    status: 'confirmed',
    paymentStatus: 'pending',
    totalPrice: 55000,
  },
  {
    id: '3',
    userId: '1',
    courtId: '2',
    date: '2024-08-18',
    startTime: '19:00',
    endTime: '20:00',
    status: 'confirmed',
    paymentStatus: 'realized',
    totalPrice: 65000,
  },
];

export const getAvailableTimes = (courtId: string, date: Date): string[] => {
  // Mock function to get available times for a court on a specific date
  const allTimes = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ];
  
  // In a real app, you would check existing bookings for this court and date
  // For this mock, we'll randomly remove some slots
  const seed = date.getDate() + parseInt(courtId);
  return allTimes.filter((_, i) => (seed + i) % 3 !== 0);
};
