import { IAnimal } from './IAnimal';

export class Tiger implements IAnimal {
  constructor(public name: string, private age: number) {}

  makeSound(): void {
    console.log(`${this.name} roars`);
  }

  move(): void {
    console.log(`${this.name} is trotting`);
  }

  getAge(): number {
    return this.age;
  }
}
