import { createApp } from './src/fee-calculator/App';
import directoryName from './src/fee-calculator/helpers/directoryHelper';

const dirname = directoryName(__dirname);
createApp(dirname).run((fee) => {
  console.log(fee);
});
