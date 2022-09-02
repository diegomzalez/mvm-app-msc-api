import Person from '../../../entities/person.entity';

export default class User extends Person {
  email: string;
  password: string;
}
