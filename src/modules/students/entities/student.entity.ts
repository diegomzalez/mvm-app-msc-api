import Client from '../../../entities/client.entity';

export default class Student extends Client {
  birthday: string;
  birthplace: string;
  municipality: string;
  state: string;
  liveWith: Array<Array<string> | string>;
}
