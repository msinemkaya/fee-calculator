import { createApp } from './src/fee-calculator/App';

createApp(__dirname).run((fee) => {
  console.log(fee);
});
