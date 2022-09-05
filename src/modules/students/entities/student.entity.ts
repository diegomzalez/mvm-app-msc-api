import Month from 'src/entities/month.entity';
import Client from '../../../entities/client.entity';

export default class Student extends Client {
  birthday: string;
  birthplace: string;
  municipality: string;
  state: string;
  allergies: string | null;
  liveWith: Array<Array<string> | string>;
  exoneration: number;
  months: Array<Month>;
  debs: Array<string> | null;
}
