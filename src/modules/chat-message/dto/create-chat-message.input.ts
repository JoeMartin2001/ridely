import { InputType, Field } from '@nestjs/graphql';
import {
  ChatMessageStatus,
  ChatMessageType,
  IChatMessage,
} from 'src/common/interfaces';

@InputType()
export class CreateChatMessageInput implements Partial<IChatMessage> {
  @Field(() => String)
  id!: string;

  @Field(() => String)
  chatRoomId!: string;

  @Field(() => String)
  senderId!: string;

  @Field(() => String)
  receiverId!: string;

  @Field(() => String)
  rideId!: string;

  @Field(() => Boolean)
  isRead!: boolean;

  @Field(() => String)
  message!: string;

  @Field(() => ChatMessageStatus)
  status!: ChatMessageStatus;

  @Field(() => ChatMessageType)
  type!: ChatMessageType;
}
