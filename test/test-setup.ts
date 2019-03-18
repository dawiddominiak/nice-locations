import addJestHbsExtension from 'jest-hbs-extension';
import { resolve } from 'path';

const VIEWS_PATH = resolve(__dirname, '..', 'views');

addJestHbsExtension(VIEWS_PATH);
