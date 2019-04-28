import { GenericFactory } from './generic.factory';

class Test {
  private foo: string;

  public getFoo() {
    return this.foo;
  }
}

describe('GenericFactory', () => {
  describe('.create', () => {
    it('should create a Test class instance', () => {
      const test = GenericFactory.create<Test>(Test, {
        foo: 'bar',
      });

      expect(test).toBeInstanceOf(Test);
      expect(test.getFoo()).toBe('bar');
    });
  });
});
