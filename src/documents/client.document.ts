import { Document } from 'mongoose';

import Client from '../entities/client.entity';

type ClientDocument = Client & Document;
export default ClientDocument;
