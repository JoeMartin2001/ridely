import { Injectable } from '@nestjs/common';
import { CreateChatMessageInput } from './dto/create-chat-message.input';
import { UpdateChatMessageInput } from './dto/update-chat-message.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatMessage } from './entities/chat-message.entity';

@Injectable()
export class ChatMessageService {
  constructor(
    @InjectRepository(ChatMessage)
    private chatMessageRepository: Repository<ChatMessage>,
  ) {}

  create(createChatMessageInput: CreateChatMessageInput) {
    return this.chatMessageRepository.save(createChatMessageInput);
  }

  findAll() {
    return this.chatMessageRepository.find();
  }

  findOne(id: string) {
    return this.chatMessageRepository.findOne({ where: { id } });
  }

  update(id: string, updateChatMessageInput: UpdateChatMessageInput) {
    return this.chatMessageRepository.update(id, updateChatMessageInput);
  }

  remove(id: string) {
    return this.chatMessageRepository.delete(id);
  }
}
