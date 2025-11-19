// cache/cache.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get<T = unknown>(key: string): Promise<T | null> {
    const value = await this.cache.get<T>(key);
    return (value ?? null) as T | null;
  }

  async set<T = unknown>(key: string, value: T, ttlMs?: number): Promise<void> {
    // ttl in seconds for cache-manager v5
    const ttl = ttlMs ? Math.round(ttlMs / 1000) : undefined;
    await this.cache.set(key, value as any, ttl);
  }

  async del(key: string): Promise<void> {
    await this.cache.del(key);
  }

  async reset(): Promise<void> {
    await this.cache.clear();
  }
}
