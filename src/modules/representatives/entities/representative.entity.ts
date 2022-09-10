import Adult from '../../../entity/adult.entity';
export default class Representative extends Adult {
  representativeChildren: Array<Array<string | number>>;
}
