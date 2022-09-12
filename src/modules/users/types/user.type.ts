import { Document } from 'mongoose';
import User from '../entity/User.entity';

type UserDocument = User & Document;
export default UserDocument;
