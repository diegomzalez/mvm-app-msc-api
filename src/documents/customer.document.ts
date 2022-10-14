import { Document } from 'mongoose';

import Customer from '../entities/customer.entity';

type CustomerDocument = Customer & Document;
export default CustomerDocument;
