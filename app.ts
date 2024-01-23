import { createApp } from './src/fee-calculator/App';

createApp(__dirname).run((transaction) => {
  console.log(transaction);
});
