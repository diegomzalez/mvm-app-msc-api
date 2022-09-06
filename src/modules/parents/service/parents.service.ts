import { Injectable } from '@nestjs/common';
import { CreateParentDto, UpdateParentDto } from '../dtos/parent.dto';
import Parent from '../entities/parent.entity';

@Injectable()
export class ParentsService {
  private parents: Array<Parent> = [];
  public getParents(): Array<Parent> {
    return this.parents;
  }
  public getParent(id: number): Parent {
    return this.parents.find((user) => user.id === id);
  }
  public createParent(parent: CreateParentDto): Parent {
    this.parents.push(parent);
    return parent;
  }
  public updateParent(id: number, parent: UpdateParentDto): Parent {
    const index = this.parents.findIndex((user) => user.id === id);
    this.parents[index] = {
      ...this.parents[index],
      ...parent,
    };
    return this.parents[index];
  }
  public deleteParent(id: number): string {
    const index = this.parents.findIndex((user) => user.id === id);
    delete this.parents[index];
    return `Parent ${id} deleted`;
  }
}
