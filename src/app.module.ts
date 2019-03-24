import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule],
})
export class AppModule {}
