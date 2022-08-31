import adultDtos from './adult.dto';
import clientDtos from './client.dto';
import personDtos from './person.dto';

const mainDtos = [...personDtos, ...clientDtos, ...adultDtos];
export default mainDtos;
