import { createAnimal } from './factories/AnimalFactory';
import { IAnimal } from './models/IAnimal';

const zoo: IAnimal[] = [];

zoo.push(createAnimal('lion', 'Simba', 4));
zoo.push(createAnimal('elephant', 'Dumbo', 10));
zoo.push(createAnimal('zebra', 'Marty', 7));
zoo.push(createAnimal('tiger', 'Shere Khan', 5));

zoo.forEach(animal => {
  animal.makeSound();      // Polymorphism
  animal.move();           // Inherited behavior
  console.log(`${animal.name} is ${animal.getAge()} years old.\n`);
});

