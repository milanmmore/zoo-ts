import { IAnimal } from './IAnimal';

export class Zebra implements IAnimal {
  constructor(public name: string, private age: number) {}

  makeSound(): void {
    console.log(`${this.name} brays`);
  }

  move(): void {
    console.log(`${this.name} gallops on all fours`);
  }

  getAge(): number {
    return this.age;
  }
}
