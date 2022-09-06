import Adult from '../../../entities/adult.entity';
export default class Representative extends Adult {
  representativeChildren: Array<Array<string | number>>;
}
