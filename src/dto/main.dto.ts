import { adultDto } from './Adult.dto';
import { clientDto } from './Client.dto';
import { personDto } from './Person.dto';
import { stuffDto } from './Stuff.dto';

export default [...stuffDto, ...personDto, ...clientDto, ...adultDto];
