import { Injectable } from '@nestjs/common';
import { CreateParentDto, UpdateParentDto } from '../dtos/parent.dto';
import Parent from '../entities/parent.entity';

@Injectable()
export class ParentsService {
  private parents: Array<Parent> = [
    {
      id: '1',
      name: 'Dilcia',
      middleName: 'Mariangélis',
      surname: 'Calero',
      lastName: 'Oviedo',
      ci: '1023042',
      degreeOfInstruction: 'TEC',
      direction:
        'AV BOLIVAR CASA NRO 48 SECTOR CASCO DE TACARIGUA CENTRAL TACARIGUA CARABOBO  ZONA POSTAL  2010',
      phone: '0412-441-97-26',
      isAlive: true,
      sex: 'F',
      work: 'cashier',
    },
  ];
  public getParents(): Array<Parent> {
    return this.parents;
  }
  public getParent(id: string): Parent {
    return this.parents.find((user) => user.id === id);
  }
  public createParent(parent: CreateParentDto): Parent {
    this.parents.push(parent);
    return parent;
  }
  public updateParent(id: string, parent: UpdateParentDto): Parent {
    const index = this.parents.findIndex((user) => user.id === id);
    this.parents[index] = {
      ...this.parents[index],
      ...parent,
    };
    return this.parents[index];
  }
  public deleteParent(id: string): string {
    const index = this.parents.findIndex((user) => user.id === id);
    delete this.parents[index];
    return `Parent ${id} deleted`;
  }
}
