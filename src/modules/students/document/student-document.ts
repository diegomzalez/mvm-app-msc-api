import { Document } from 'mongoose';
import Student from '../entity/student.entity';

type StudentDocument = Student & Document;
export default StudentDocument;
