import { EnvConfig } from './types/EnvConfig';

const config : EnvConfig = {
  CASH_IN_PERCENTAGE:
    process.env.CASH_IN_PERCENTAGE ? parseFloat(process.env.CASH_IN_PERCENTAGE) : 0.03,

  CASH_OUT_PERCENTAGE:
    process.env.CASH_OUT_PERCENTAGE ? parseFloat(process.env.CASH_OUT_PERCENTAGE) : 0.3,

  CASH_IN_MAX_FEE:
    process.env.CASH_IN_MAX_FEE ? parseFloat(process.env.CASH_IN_MAX_FEE) : 5.00,

  NATURAL_WEEK_LIMIT:
    process.env.NATURAL_WEEK_LIMIT ? parseFloat(process.env.NATURAL_WEEK_LIMIT) : 1000,

  JURIDICAL_MIN_FEE:
    process.env.JURIDICAL_MIN_FEE ? parseFloat(process.env.JURIDICAL_MIN_FEE) : 0.50,
};
export default config;
