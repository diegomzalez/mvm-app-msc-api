import { Injectable } from '@nestjs/common';
import {
  CreateRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entity/Representative.entity';

@Injectable()
export class RepresentativesService {
  private representatives: Array<Representative> = [];
  createRepresentative(
    representative: CreateRepresentativeDto,
  ): Representative {
    this.representatives.push(representative);
    return representative;
  }
  getRepresentatives(): Array<Representative> {
    return this.representatives;
  }
  getRepresentative(id: string): Representative {
    return this.representatives.find((representative) => representative);
  }
  updateRepresentative(
    id: string,
    representative: UpdateRepresentativeDto,
  ): Representative {
    const index = this.representatives.findIndex(
      (representative) => representative,
    );

    return this.representatives[index];
  }
  deleteRepresentative(id: string): string {
    const index = this.representatives.findIndex(
      (representative) => representative,
    );
    delete this.representatives[index];
    return `Representative ${id} was deleted`;
  }
}
