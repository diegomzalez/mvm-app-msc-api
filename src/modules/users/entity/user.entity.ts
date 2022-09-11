import Person from '../../../entity/person.entity';

export default class User extends Person {
  email: string;
  password: string;
}
