import { Types } from 'mongoose';
import StudentDocument from '../document/student-document';

export type StudentMongoArray = Types.DocumentArray<StudentDocument>;
