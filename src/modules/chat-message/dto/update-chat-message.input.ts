import { CreateChatMessageInput } from './create-chat-message.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateChatMessageInput extends PartialType(
  CreateChatMessageInput,
) {
  @Field(() => String)
  id!: string;
}
