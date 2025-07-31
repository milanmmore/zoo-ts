import { IAnimal } from './IAnimal';

export class Elephant implements IAnimal {
  constructor(public name: string, private age: number) {}

  makeSound(): void {
    console.log(`${this.name} trumpets`);
  }

  move(): void {
    console.log(`${this.name} lumbers`);
  }

  getAge(): number {
    return this.age;
  }
}
