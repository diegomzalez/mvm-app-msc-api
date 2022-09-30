import { adultDto } from './adult.dto';
import { clientDto } from './client.dto';
import { personDto } from './person.dto';
import { stuffDto } from './stuff.dto';

export default [...stuffDto, ...personDto, ...clientDto, ...adultDto];
