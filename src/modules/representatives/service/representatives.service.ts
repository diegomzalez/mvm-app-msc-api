import { Injectable } from '@nestjs/common';
import {
  CreateRepresentativeDto,
  UpdateRepresentativeDto,
} from '../dtos/representatives.dto';
import Representative from '../entities/representative.entity';

@Injectable()
export class RepresentativesService {
  private representatives: Array<Representative> = [
    {
      id: '1',
      name: 'José',
      middleName: 'Luis',
      surname: 'Gallado',
      lastName: 'Pérez',
      ci: '25648965',
      degreeOfInstruction: 'SUP',
      direction: 'AV BOLIVAR VALENCIA CASA 58',
      phone: '0424-584-88-69',
      work: 'ING',
      relationship: 'Madre',
    },
  ];
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
    return this.representatives.find(
      (representative) => representative.id === id,
    );
  }
  updateRepresentative(
    id: string,
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
  deleteRepresentative(id: string): string {
    const index = this.representatives.findIndex(
      (representative) => representative.id === id,
    );
    delete this.representatives[index];
    return `Representative ${id} was deleted`;
  }
}
