import { registerEnumType } from '@nestjs/graphql';
import { IVehicle } from './Vehicle';
import { PaymentMethod } from './Payment';

// User account
export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  dateOfBirth: Date;
  profilePicture?: string;
  isVerified: boolean;

  createdAt: Date;
  updatedAt: Date;
}

export interface IDriver extends IUser {
  driverLicense?: string;
  licensePlate?: string;
  carDetails?: IVehicle;
  totalTrips: number;
  rating: number;
  isOnline: boolean;
  verificationStatus: VerificationStatus;
}

export interface IPassenger extends IUser {
  preferredPaymentMethod: PaymentMethod;
  totalTrips: number;
  rating: number;
}

export enum VerificationStatus {
  PENDING = 'pending',
  VERIFIED = 'verified',
  REJECTED = 'rejected',
}

registerEnumType(VerificationStatus, {
  name: 'VerificationStatus',
  description: 'Verification status',
});
