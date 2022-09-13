import { Document } from 'mongoose';
import Student from '../entity/Student.entity';

type StudentDocument = Student & Document;
export default StudentDocument;
