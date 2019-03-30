import { Module } from '@nestjs/common';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Location } from './location.entity';
import { CommonModule } from '../common/common.module';
import { LocationMappingService } from './location-mapping.service';

@Module({
  controllers: [
    LocationController,
  ],
  imports: [TypeOrmModule.forFeature([Location]), CommonModule],
  providers: [LocationService, LocationMappingService],
})
export class LocationModule {}
