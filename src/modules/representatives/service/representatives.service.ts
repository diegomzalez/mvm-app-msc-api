import { Injectable } from '@nestjs/common';
import {
  CreateRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dto/representatives.dto';
import Representative from '../entities/representative.entity';

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
  getRepresentative(id: number): Representative {
    return this.representatives.find(
      (representative) => representative.id === id,
    );
  }
  updateRepresentative(
    id: number,
    representative: UpdateRepresentativeDto,
  ): Representative {
    const index = this.representatives.findIndex(
      (representative) => representative.id === id,
    );
    this.representatives[index] = {
      ...this.representatives[index],
      ...representative,
    };
    return this.representatives[index];
  }
  deleteRepresentative(id: number): string {
    const index = this.representatives.findIndex(
      (representative) => representative.id === id,
    );
    delete this.representatives[index];
    return `Representative ${id} was deleted`;
  }
}
