import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: this.configService.get<string>('database.url'),
      entities: this.configService.get<string[]>('orm.entities'),
      synchronize: this.configService.get<boolean>('orm.synchronize'),
    };
  }
}
