import Bill from './Bill.entity';

export default class Month {
  bills: Array<Bill>;
  solvent: boolean;
  missing: number;
}
