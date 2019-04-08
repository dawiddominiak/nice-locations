import { LocationService } from './location.service';
import { Repository } from 'typeorm';
import { Location } from './location.entity';
import { GenericFactory } from '../common/generic.factory';
import { MockHelper } from '../common/mock.helper';

describe('LocationService', () => {
  let service: LocationService;
  let mockRepository: Repository<Location>;

  beforeEach(async () => {
    mockRepository = MockHelper.mock<Repository<Location>>({
      find: {
        resolves: [
          GenericFactory.create<Location>(Location, {
            id: '4a7ba206-2376-4ed4-87ac-40e8a2df9341',
            name: 'Location 1',
          }),
          GenericFactory.create<Location>(Location, {
            id: 'f4000db9-3496-4b42-8bf0-2c336109ab78',
            name: 'Location 2',
          }),
        ],
      },
    });

    service = new LocationService(mockRepository);
  });

  it('should return locations', () => {
    expect(service.list()).resolves.toMatchObject([
      {
        id: '4a7ba206-2376-4ed4-87ac-40e8a2df9341',
        name: 'Location 1',
      },
      {
        id: 'f4000db9-3496-4b42-8bf0-2c336109ab78',
        name: 'Location 2',
      },
    ]);
  });
});
