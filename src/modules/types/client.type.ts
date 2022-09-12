import { Document } from 'mongoose';
import Client from '../../entity/Client.entity';

type ClientDocument = Client & Document;
export default ClientDocument;
