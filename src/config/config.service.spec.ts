import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';
import { resolve } from 'path';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    service = new ConfigService();
  });

  it('should indicate views location', () => {
    const templatePath = resolve(__dirname, '../..', 'views');
    expect(service.get<string>('templates.path')).toEqual(templatePath);
  });
});
