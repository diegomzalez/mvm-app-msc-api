import { Document } from 'mongoose';

import Currency from '../entity/Currency.entity';

type CurrencyDocument = Currency & Document;
export default CurrencyDocument;
