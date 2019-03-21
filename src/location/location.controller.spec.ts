import { LocationController } from './location.controller';
import { LocationService } from './location.service';

describe('LocationController', () => {
  let locationController: LocationController;

  beforeEach(async () => {
    const locationService = {
      list: () => [
        'Returned from location service',
      ],
    } as LocationService;
    locationController = new LocationController(locationService);
  });

  describe('root', () => {
    it('should return an array with elemen "Returned from location service"', () => {
      expect(locationController.listLocations()).toMatchObject({
        locations: [
          'Returned from location service',
        ],
      });
    });
  });
});
