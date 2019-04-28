import { MappingService } from './mapping.service';
import { MappingRegistryService } from './mapping-registry.service';

// tslint:disable-next-line: max-classes-per-file
class TestClass1 {
  public date: Date;
}

// tslint:disable-next-line: max-classes-per-file
class TestClass2 {
  public month: number;
  public day: number;
  public year: number;
}

// tslint:disable-next-line: max-classes-per-file
class TestMappingService extends MappingService {
  public addMapping(): void {
    automapper.createMap(TestClass1.name, TestClass2.name)
      .convertUsing((context: AutoMapperJs.IResolutionContext) => {
        const date: Date = context.sourceValue.date;
        const object = new TestClass2();

        return Object.assign(object, {
          day: date.getDate(),
          month: date.getMonth(),
          year: date.getFullYear(),
        });
      });
  }
}

describe('MappingRegistryService', () => {
  let mappingRegistryService: MappingRegistryService;

  beforeEach(() => {
    mappingRegistryService = new MappingRegistryService();
    mappingRegistryService.registerMappingService(
      new TestMappingService(mappingRegistryService),
    );
  });

  describe('.map', () => {
    it('should map a class using TestMappingService', () => {
      const testObject1 = new TestClass1();
      testObject1.date = new Date(2019, 4, 1);

      const testObject2 = mappingRegistryService.map<TestClass2>(TestClass1.name, TestClass2.name, testObject1);

      expect(testObject2).toBeInstanceOf(TestClass2);
      expect(testObject2.year).toBe(2019);
      expect(testObject2.month).toBe(4);
      expect(testObject2.day).toBe(1);
    });
  });
});
