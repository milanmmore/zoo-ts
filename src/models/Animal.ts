import { IAnimal } from './IAnimal';

export abstract class Animal implements IAnimal {
  constructor(public name: string, private age: number) {}

  abstract makeSound(): void;

  move(): void {
    console.log(`${this.name} is moving`);
  }

  getAge(): number {
    return this.age;
  }
}
