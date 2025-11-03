export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  image?: string;
  identityImageUrl?: string;
  role: string[];
  activeRole: string;
  isConfirmed: boolean;
  isVerified: 'notVerified' | 'pending' | 'verified' | 'rejected';
  createdAt?: string;
}
