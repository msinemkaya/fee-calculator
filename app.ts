import createApplication from './src/fee-calculator/App';
import directoryName from './src/fee-calculator/helpers/directoryHelper';

const dirname = directoryName(__dirname);
createApplication(dirname).run((fee) => {
  console.log(fee); // eslint-disable-line
});
