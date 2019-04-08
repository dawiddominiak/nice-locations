import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { MappingRegistryService } from '../common/mapping-registry.service';
import { MockHelper } from '../common/mock.helper';
import { GenericFactory } from '../common/generic.factory';
import { LocationMappingService } from './location-mapping.service';
import { Location } from './location.entity';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockLocationService: LocationService;
  let mappingRegistryService: MappingRegistryService;

  beforeEach(async () => {
    mockLocationService = MockHelper.mock<LocationService>({
      list: {
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
    mappingRegistryService = new MappingRegistryService();
    const locationMappingService = new LocationMappingService(mappingRegistryService);
    locationController = new LocationController(mockLocationService, mappingRegistryService);
  });

  describe('root', () => {
    it('should return an array with Locations', () => {
      expect(locationController.listLocations()).resolves.toMatchObject({
        locations: [
          {
            id: '4a7ba206-2376-4ed4-87ac-40e8a2df9341',
            name: 'Location 1',
          },
          {
            id: 'f4000db9-3496-4b42-8bf0-2c336109ab78',
            name: 'Location 2',
          },
        ],
      });
    });
  });
});
