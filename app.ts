import * as path from 'path';
import { createApp } from './src/fee-calculator/App';

let dirname = __dirname;

if (dirname.includes('dist')) {
  dirname = path.join(dirname, '../');
}
createApp(dirname).run((fee) => {
  console.log(fee);
});
