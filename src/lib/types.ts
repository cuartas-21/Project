export type Court = {
  id: string;
  name: string;
  location: string;
  pricePerHour: number;
  image: {
    id: string;
    url: string;
    hint: string;
  };
};

export type Booking = {
  id: string;
  userId: string;
  courtId: string;
  date: string; 
  startTime: string; 
  endTime: string; 
  status: 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'realized';
  totalPrice: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatarUrl: string;
};
