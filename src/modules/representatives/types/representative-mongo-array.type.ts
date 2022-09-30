import { Types } from 'mongoose';
import { RepresentativeDocument } from '../document/representative.document';

export type RepresentativeMongoArray =
  Types.DocumentArray<RepresentativeDocument>;
