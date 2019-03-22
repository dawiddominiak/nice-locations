import { resolve } from 'path';

export default {
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
};
