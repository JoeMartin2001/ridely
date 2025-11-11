// supabase-db.config.ts
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/modules/user/entities/user.entity';
import { Ride } from 'src/modules/rides/entities/ride.entity';
import { Booking } from 'src/modules/bookings/entities/booking.entity';

export const supabaseDbConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => {
  // Alternative: Get from Supabase connection string
  const databaseUrl = configService.get<string>('app.supabaseDatabaseUrl');

  return {
    type: 'postgres',

    url: databaseUrl,

    // SSL configuration for Supabase
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false, // Required for Supabase
      },
    },

    // Entity configuration
    entities: [
      User,
      Ride,
      Booking,
      // Add all your entities here
    ],

    // Synchronize should be false in production
    synchronize: configService.get<string>('NODE_ENV') === 'development',

    // Logging
    logging: configService.get<string>('NODE_ENV') === 'development',

    // Migrations
    migrations: [__dirname + '/../migrations/*.ts'],
    migrationsRun: true,

    // Other options
    connectTimeoutMS: 10000, // 10 seconds
    maxQueryExecutionTime: 5000, // 5 seconds
  };
};
