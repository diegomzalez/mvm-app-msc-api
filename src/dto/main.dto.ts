import { adultDto } from './adult.dto';
import { customerDto } from './customer.dto';
import { personDto } from './person.dto';
import { thingDto } from './thing.dto';

export default [...thingDto, ...personDto, ...customerDto, ...adultDto];
