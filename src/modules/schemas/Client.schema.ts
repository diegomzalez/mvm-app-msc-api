import { SchemaFactory } from '@nestjs/mongoose';

import Client from '../../entity/Client.entity';

export default SchemaFactory.createForClass(Client);
