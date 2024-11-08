# Type Guards
Type guards in Typescript are powerful tools that allow you to narrow down the types during execution and provide more type safety. They help developers to prevent errors and improve code quality by ensuring that the operations are performed only on valid types.
### Why are Type Guards Necessary?
- **Type guards** ensure type safety and prevent errors during runtime.
- They help narrow down **union type** to a specific type.
- Developers can write more predictable and maintainable code.
### Types of Type Guards
There are various ways to use **Type Guards** in different scenarios. The following are some of the most common use cases.
### 1. `typeof` Type Guard
The `typeof` operator is ideal for narrow down primitive types. Such as, `number`, `string`, `boolean` etc.
An example of using the `typeof` keyword for type safety follows.
```typescript
function printLength(value: string | number): void {
  if (typeof value === 'string') {
    // Inside this block, TypeScript knows that value is a string
    console.log(value.length); // Safe to access length for strings
  } else {
    // Here, TypeScript knows that value is a number.We can use all number method in this block
    console.log(value.toFixed(2)); 
  }
}

printLength("Hello, TypeScript!"); // 18
printLength(42); // 42.00
```

### 2. `instanceof` Type Guard
`instanceof` type guard is used to check if an object is an instance of a particular class or constructor function. This type of type guard is used to narrow down the type of object created from  classes. 
An example of using the `instanceof` keyword for type safety follows.
```typescript
class Dog {
  breed: string;
  constructor(breed: string) {
    this.breed = breed;
  }
}

class Cat {
  breed: string;
  constructor(breed: string) {
    this.breed = breed;
  }
}

function describeAnimal(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    console.log(`This is a dog of breed: ${animal.breed}`);
  } else if (animal instanceof Cat) {
    console.log(`This is a cat of breed: ${animal.breed}`);
  }
}

const myDog = new Dog("Golden Retriever");
const myCat = new Cat("Persian");

describeAnimal(myDog); // This is a dog of breed: Golden Retriever
describeAnimal(myCat); // This is a cat of breed: Persian
```
### 3. `in` Type Guard
To determine whether an object has a particular property use the `in` operator. This helps distinguish between types that share properties but have different ones. 
An example of using the `in` keyword for type safety follows.
```typescript
type Dog = { type: 'dog'; bark: () => void };
type Cat = { type: 'cat'; meow: () => void };

function interact(animal: Dog | Cat): void {
  if ('bark' in animal) {
    animal.bark(); // TypeScript knows animal is a Dog here
  } else {
    animal.meow(); // TypeScript knows animal is a Cat here
  }
}

const dog: Dog = { type: 'dog', bark: () => console.log('Woof!') };
const cat: Cat = { type: 'cat', meow: () => console.log('Meow!') };

interact(dog); // Woof!
interact(cat); // Meow!

```
