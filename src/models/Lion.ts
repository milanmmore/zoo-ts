import { IAnimal } from './IAnimal';

export class Lion implements IAnimal {
  constructor(public name: string, private age: number) {}

  makeSound(): void {
    console.log(`${this.name} roars`);
  }

  move(): void {
    console.log(`${this.name} pounces`);
  }

  getAge(): number {
    return this.age;
  }
}
