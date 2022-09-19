import { Document } from 'mongoose';
import Client from '../entities/Client.entity';

type ClientDocument = Client & Document;
export default ClientDocument;
