import { Types } from 'mongoose';
import { ParentDocument } from '../document/parent-document.type';

export type ParentMongoArray = Types.DocumentArray<ParentDocument>;
