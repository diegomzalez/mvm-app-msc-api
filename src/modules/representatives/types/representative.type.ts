import { Document } from 'mongoose';
import Representative from '../entity/Representative.entity';

type RepresentativeDocument = Representative & Document;
export default RepresentativeDocument;
