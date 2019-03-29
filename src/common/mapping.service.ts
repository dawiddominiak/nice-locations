import { Injectable } from '@nestjs/common';
import { MappingRegistryService } from './mapping-registry.service';

@Injectable()
export abstract class MappingService {
  constructor(mappingRegistryService: MappingRegistryService) {
    mappingRegistryService.registerMappingService(this);
  }

  public abstract addMapping(): void;
}
