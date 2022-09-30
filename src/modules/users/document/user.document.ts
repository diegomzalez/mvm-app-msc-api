import { Document } from 'mongoose';
import User from '../entity/user.entity';

type UserDocument = User & Document;
export default UserDocument;
