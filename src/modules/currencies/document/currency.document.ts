import { Document } from 'mongoose';

import Currency from '../entity/currency.entity';

type CurrencyDocument = Currency & Document;
export default CurrencyDocument;
