import Bill from './bill.entity';

export default class Month {
  bills: Array<Bill>;
  solvent: boolean;
  missing: number;
}
