import { mapValues } from 'lodash';
import * as sinon from 'sinon';

interface Resolves {
  resolves: any;
}

interface Returns {
  returns: any;
}

interface Rejects {
  rejects: any;
}

interface Throws {
  throws: any;
}

type Action = Resolves | Returns | Rejects | Throws;

export class MockHelper {
  public static mock<T>(mocks: { [key: string]: Action }) {
    const bluff = MockHelper.bluff<T>(mapValues(mocks, () => new Function()));
    const mock = sinon.mock(bluff);

    for (const key of Object.keys(mocks)) {
      const expectation = mock.expects(key);
      const action = Object.keys(mocks[key]).pop();
      expectation[action](mocks[key][action]);
    }

    return bluff;
  }

  public static bluff<T>(plain: unknown) {
    return plain as unknown as T;
  }
}
