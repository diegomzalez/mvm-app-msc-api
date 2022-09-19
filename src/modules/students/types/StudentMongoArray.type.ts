import { Types } from 'mongoose';

import Student from '../entity/Student.entity';

export type StudentMongoArray = Types.Array<Student>;
