import { Module } from '@nestjs/common';
import { ChatRoomService } from './chat-room.service';
import { ChatRoomResolver } from './chat-room.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './entities/chat-room.entity';

@Module({
  providers: [ChatRoomResolver, ChatRoomService],
  imports: [TypeOrmModule.forFeature([ChatRoom])],
})
export class ChatRoomModule {}
