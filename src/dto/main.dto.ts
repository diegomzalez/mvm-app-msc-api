import { adultDto } from './adult.dto';
import { clientDto } from './client.dto';
import { personDto } from './person.dto';
import { thingDto } from './thing.dto';

export default [...thingDto, ...personDto, ...clientDto, ...adultDto];
