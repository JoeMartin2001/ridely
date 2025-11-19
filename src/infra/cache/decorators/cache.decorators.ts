// cache/cache.decorators.ts
import { SetMetadata } from '@nestjs/common';

export const CACHE_TTL_KEY = 'cache:ttl';

export const Cached = (ttlMs: number) => SetMetadata(CACHE_TTL_KEY, ttlMs);
