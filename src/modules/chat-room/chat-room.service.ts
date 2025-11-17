import { Injectable } from '@nestjs/common';
import { CreateChatRoomInput } from './dto/create-chat-room.input';
import { UpdateChatRoomInput } from './dto/update-chat-room.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatRoom } from './entities/chat-room.entity';

@Injectable()
export class ChatRoomService {
  constructor(
    @InjectRepository(ChatRoom)
    private chatRoomRepository: Repository<ChatRoom>,
  ) {}

  create(createChatRoomInput: CreateChatRoomInput) {
    return this.chatRoomRepository.save(createChatRoomInput);
  }

  findAll() {
    return this.chatRoomRepository.find();
  }

  findOne(id: string) {
    return this.chatRoomRepository.findOne({ where: { id } });
  }

  update(id: string, updateChatRoomInput: UpdateChatRoomInput) {
    return this.chatRoomRepository.update(id, updateChatRoomInput);
  }

  remove(id: string) {
    return this.chatRoomRepository.delete(id);
  }
}
