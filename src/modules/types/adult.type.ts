import { Document } from 'mongoose';
import Adult from '../entity/Adult.entity';

type AdultDocument = Adult & Document;
export default AdultDocument;
