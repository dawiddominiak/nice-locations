import { Module } from '@nestjs/common';
import { LocationModule } from './location/location.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [LocationModule, ConfigModule],
})
export class AppModule {}
