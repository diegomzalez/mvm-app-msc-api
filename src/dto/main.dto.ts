import { adultDto } from './Adult.dto';
import { clientDto } from './Client.dto';
import { personDto } from './Person.dto';

export default [...personDto, ...clientDto, ...adultDto];
