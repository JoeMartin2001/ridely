import { registerEnumType } from '@nestjs/graphql';
import { IChatMessage } from './ChatMessage';

export interface IChatRoom {
  id: string;
  rideId: string;
  senderId: string;
  receiverId: string;
  createdAt: Date;
  updatedAt: Date;
  status: ChatRoomStatus;

  messages?: IChatMessage[];
}

export enum ChatRoomStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}

registerEnumType(ChatRoomStatus, {
  name: 'ChatRoomStatus',
  description: 'Chat room status',
});
