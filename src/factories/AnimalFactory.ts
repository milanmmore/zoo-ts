import { IAnimal } from '../models/IAnimal';
import { Lion } from '../models/Lion';
import { Elephant } from '../models/Elephant';
import { Zebra } from '../models/Zebra';
import { Tiger } from '../models/Tiger';


export function createAnimal(type: string, name: string, age: number): IAnimal {
  switch (type.toLowerCase()) {
    case 'lion':
      return new Lion(name, age);
    case 'elephant':
      return new Elephant(name, age);
    case 'zebra':
          return new Zebra(name, age);
    case 'tiger':
      return new Tiger(name, age);
    default:
      throw new Error(`Animal type "${type}" not supported`);
  }
}
