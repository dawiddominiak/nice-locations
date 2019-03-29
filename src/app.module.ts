import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [LocationModule, ConfigModule, DatabaseModule, CommonModule],
})
export class AppModule {}
