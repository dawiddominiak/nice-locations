import { Injectable } from '@nestjs/common';
import * as config from 'config';

@Injectable()
export class ConfigService {
  public get<T>(key: string): T {
    return config.get<T>(key);
  }
}
