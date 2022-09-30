import { Document } from 'mongoose';

import Adult from '../entities/adult.entity';

type AdultDocument = Adult & Document;
export default AdultDocument;
