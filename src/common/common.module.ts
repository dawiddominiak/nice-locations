import { Module } from '@nestjs/common';
import { MappingRegistryService } from './mapping-registry.service';

@Module({
  providers: [MappingRegistryService],
  exports: [MappingRegistryService],
})
export class CommonModule {}
