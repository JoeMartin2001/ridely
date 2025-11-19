// cache/cache.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule as NestCacheModule } from '@nestjs/cache-manager';
import { Keyv } from 'keyv';
import KeyvRedis from '@keyv/redis';
import { CacheableMemory } from 'cacheable';
import { CacheService } from './cache.service';

@Module({
  imports: [
    ConfigModule,
    NestCacheModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const redisUrl = config.get<string>(
          'REDIS_URL',
          'redis://localhost:6379',
        );
        const ttlMs = config.get<number>('CACHE_TTL_MS', 60_000); // 1 min default
        const lruSize = config.get<number>('CACHE_LRU_SIZE', 5_000);

        const memoryStore = new Keyv({
          store: new CacheableMemory({
            ttl: ttlMs,
            lruSize,
          }),
        });

        // Redis is optional – if URL is empty or something fails, we just use memory
        let redisStore: Keyv | null = null;
        if (redisUrl) {
          redisStore = new Keyv({
            store: new KeyvRedis(redisUrl),
          });
        }

        return {
          // cache-manager will try stores in order
          stores: redisStore ? [memoryStore, redisStore] : [memoryStore],
        };
      },
    }),
  ],
  providers: [CacheService],
  exports: [NestCacheModule, CacheService],
})
export class CacheModule {}
