# Learn TypeScript

This repository contains a list of TypeScript concepts, examples. It is a guide for beginners to learn TypeScript.

![GitHub](https://img.shields.io/github/license/manthanank/learn-javascript)

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Basic Types](#basic-types)
- [Variable Declarations](#variable-declarations)
- [Interfaces](#interfaces)
- [Classes](#classes)
- [Functions](#functions)
- [Generics](#generics)
- [Enums](#enums)
- [Type Inference](#type-inference)
- [Type Compatibility](#type-compatibility)
- [Advanced Types](#advanced-types)
- [Symbols](#symbols)
- [Iterators and Generators](#iterators-and-generators)
- [Modules](#modules)
- [Namespaces](#namespaces)
- [Namespaces and Modules](#namespaces-and-modules)
- [Module Resolution](#module-resolution)
- [Declaration Merging](#declaration-merging)
- [JSX](#jsx)
- [Decorators](#decorators)
- [Mixins](#mixins)
- [Triple-Slash Directives](#triple-slash-directives)
- [Type Checking JavaScript Files](#type-checking-javascript-files)
- [Utility Types](#utility-types)
- [Type Assertions](#type-assertions)
- [Type Guards](#type-guards)
- [Tuple Types](#tuple-types)
- [Index Signatures](#index-signatures)
- [Mapped Types](#mapped-types)
- [Conditional Types](#conditional-types)
- [Union and Intersection Types](#union-and-intersection-types)
- [Type Predicates](#type-predicates)
- [Template Literal Types](#template-literal-types)
- [Keyof Type Operator](#keyof-type-operator)
- [Type Narrowing](#type-narrowing)
- [Call Signatures](#call-signatures)
- [Discriminated Unions](#discriminated-unions)
- [Type Inference in Generic Constraints](#type-inference-in-generic-constraints)
- [Non-null Assertion Operator](#non-null-assertion-operator)
- [Satisfies Operator](#satisfies-operator)
- [Method Signatures](#method-signatures)
- [Abstract Classes](#abstract-classes)

## Introduction

TypeScript is a superset of JavaScript that adds optional types to the language. It is a statically typed language that compiles to plain JavaScript. TypeScript is developed and maintained by Microsoft.

TypeScript is designed for the development of large applications and transcompiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs.

## Installation

To install TypeScript, you need to have Node.js installed on your system. You can install TypeScript using npm, the Node.js package manager.

```bash
npm install -g typescript
```

To check the version of TypeScript installed, run the following command:

```bash
tsc -v
```

## Basic Types

TypeScript supports the following basic types:

- `number`: All numeric values are represented using the `number` type. TypeScript supports both decimal and hexadecimal literals.
- `string`: The `string` type is used to represent textual data.
- `boolean`: The `boolean` type is used to represent a logical value. It can have two values: `true` and `false`.
- `null`: The `null` type is used to represent an intentional absence of an object value.
- `undefined`: The `undefined` type is used to represent a variable that has not been assigned a value.
- `void`: The `void` type is used on function return types to represent a function that does not return a value.
- `any`: The `any` type is used to represent a value of any type. It is used when the type of the variable is not known at compile time.
- `never`: The `never` type is used to represent the type of values that never occur. For example, a function that throws an error or never returns.

```typescript
let num: number = 10;
let str: string = 'Hello, TypeScript';
let isValid: boolean = true;
let n: null = null;
let u: undefined = undefined;
let v: void = undefined;
let a: any = 10;
let nvr: never = (() => {
  throw new Error('An error occurred');
})();
```

## Variable Declarations

TypeScript supports the following variable declarations:

- `var`: The `var` keyword is used to declare a variable. The scope of a variable declared using `var` is the function in which it is declared.
- `let`: The `let` keyword is used to declare a block-scoped variable. The scope of a variable declared using `let` is the block in which it is declared.
- `const`: The `const` keyword is used to declare a block-scoped variable that cannot be reassigned. The value of a variable declared using `const` cannot be changed.

```typescript
var a = 10;
let b = 20;
const c = 30;
```

## Interfaces

An interface in TypeScript is a way to define a contract in your code. It defines the syntax for classes to follow. Interfaces are used to define the structure of an object.

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'John Doe',
  age: 30,
};
```

## Classes

Classes in TypeScript are used to create objects. A class is a blueprint for creating objects. It encapsulates data for the object and methods to manipulate the data.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

let person = new Person('John Doe', 30);
console.log(person.greet());
```

## Functions

Functions in TypeScript are used to define a block of code that can be called and executed later. Functions can take parameters and return values.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);
```

## Generics

Generics in TypeScript allow you to create reusable components. They enable you to write functions, classes, and interfaces that work with any data type.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>('Hello, TypeScript');

console.log(output);
```

## Enums

Enums in TypeScript are used to define a set of named constants. They make it easier to document intent or create a set of distinct cases.

```typescript
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let direction: Direction = Direction.Up;

console.log(direction);
```

## Type Inference

TypeScript has a feature called type inference. It allows you to omit the type annotations in your code. TypeScript automatically infers the type based on the value assigned to the variable.

```typescript
let num = 10;
let str = 'Hello, TypeScript';
let isValid = true;
```

## Type Compatibility

TypeScript uses a structural type system. Type compatibility in TypeScript is based on the shape that values have. If the shape of an object is the same, then the types are compatible.

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: 'John Doe',
  age: 30,
};

let anotherPerson = person;

console.log(anotherPerson);
```

## Advanced Types

TypeScript supports the following advanced types:

- Union Types
- Intersection Types
- Type Guards
- Type Aliases
- Type Assertions
- Literal Types
- Index Types
- Mapped Types
- Conditional Types

```typescript
type StringOrNumber = string | number;

let value: StringOrNumber = 'Hello, TypeScript';
value = 10;

console.log(value);
```

## Symbols

Symbols in TypeScript are a new primitive data type. They are used to create unique identifiers for object properties.

```typescript
let sym1 = Symbol('key');
let sym2 = Symbol('key');

console.log(sym1 === sym2); // false
```

## Iterators and Generators

Iterators and generators are a feature of TypeScript that allows you to define custom iteration behavior.

```typescript
let numbers = [1, 2, 3];
let iterator = numbers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
```

## Modules

Modules in TypeScript are used to organize code. They allow you to split your code into multiple files. Each file is a module that can export and import code.

```typescript
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

// app.ts
import { add } from './math';

let sum = add(10, 20);

console.log(sum);
```

## Namespaces

Namespaces in TypeScript are used to organize code. They allow you to group related code together. Namespaces are a way to create a global object that contains other objects.

```typescript
namespace Math {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

let sum = Math.add(10, 20);

console.log(sum);
```

## Namespaces and Modules

Namespaces and modules are two ways to organize code in TypeScript. Namespaces are used to group related code together, while modules are used to split your code into multiple files.

```typescript
// math.ts
export namespace Math {
  export function add(a: number, b: number): number {
    return a + b;
  }
}

// app.ts
import { Math } from './math';

let sum = Math.add(10, 20);

console.log(sum);
```

## Module Resolution

Module resolution in TypeScript is the process of finding and loading modules. TypeScript supports several module resolution strategies.

```typescript
import { add } from './math';
```

## Declaration Merging

Declaration merging in TypeScript is a feature that allows you to extend the definition of an existing type. It is used to combine multiple declarations into a single definition.

```typescript
interface Person {
  name: string;
}

interface Person {
  age: number;
}

let person: Person = {
  name: 'John Doe',
  age: 30,
};

console.log(person);
```

## JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. TypeScript supports JSX out of the box.

```typescript
let element = <h1>Hello, TypeScript</h1>;

console.log(element);
```

## Decorators

Decorators in TypeScript are a way to add metadata to classes, methods, and properties. They are a feature of TypeScript that allows you to extend the behavior of a class without modifying its code.

```typescript
function log(target: any, key: string) {
  console.log(`${key} was called`);
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

let calc = new Calculator();
calc.add(10, 20);
```

## Mixins

Mixins in TypeScript are a way to add methods and properties from one class to another class. They are a way to extend the functionality of a class without using inheritance.

```typescript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface Loggable {
  log(): void;
}

function LoggableMixin<T extends new (...args: any[]) => any>(Base: T) {
  return class extends Base implements Loggable {
    log() {
      console.log(this.name);
    }
  };
}

const LoggablePerson = LoggableMixin(Person);

let person = new LoggablePerson('John Doe');

person.log();
```

## Triple-Slash Directives

Triple-slash directives in TypeScript are used to declare dependencies between files. They are a way to reference other files in your TypeScript code.

```typescript
/// <reference path="math.ts" />

let sum = Math.add(10, 20);

console.log(sum);
```

## Type Checking JavaScript Files

TypeScript can be used to type-check JavaScript files. You can use JSDoc comments to add type annotations to your JavaScript code.

```typescript

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

function add(a, b) {
  return a + b;
}

let sum = add(10, 20);

console.log(sum);
```

## Utility Types

TypeScript provides a set of utility types that can be used to manipulate and transform types. These utility types are predefined in TypeScript and can be used to create new types.

```typescript
type Person = {
  name: string;
  age: number;
};

type ReadonlyPerson = Readonly<Person>;

let person: ReadonlyPerson = {
  name: 'John Doe',
  age: 30,
};

person.name = 'Jane Doe'; // Error: Cannot assign to 'name' because it is a read-only property
```

## Type Assertions

Type assertions allow you to tell TypeScript that you know more about the type of a value than it does. It's like a type cast but has no runtime impact.

```typescript
let someValue: unknown = "Hello World";
let strLength: number = (someValue as string).length;

// Alternatively using angle bracket syntax
let strLength2: number = (<string>someValue).length;
```

## Type Guards

Type guards are expressions that perform runtime checks to guarantee the type in a certain scope.

```typescript
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function processValue(value: number | string) {
    if (isString(value)) {
        console.log(value.toUpperCase()); // TypeScript knows value is a string
    } else {
        console.log(value.toFixed(2)); // TypeScript knows value is a number
    }
}
```

## Tuple Types

Tuples are arrays with a fixed number of elements whose types are known.

```typescript
let tuple: [string, number] = ["hello", 10];
console.log(tuple[0].substring(1)); // "ello"
console.log(tuple[1].toFixed(1)); // "10.0"
```

## Index Signatures

Index signatures allow you to create objects with flexible property names.

```typescript
interface StringMap {
    [key: string]: string;
}

let map: StringMap = {
    "foo": "bar",
    "baz": "qux"
};
```

## Mapped Types

Mapped types allow you to create new types based on old ones by transforming properties.

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

interface Person {
    name: string;
    age: number;
}

type ReadonlyPerson = Readonly<Person>;
```

## Conditional Types

Conditional types select one of two possible types based on a condition.

```typescript
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<number>;  // "number"
```

## Union and Intersection Types

Union types allow a value to be one of several types, while intersection types combine multiple types into one.

```typescript
// Union type
type StringOrNumber = string | number;
let value: StringOrNumber = "hello";
value = 42; // also valid

// Intersection type
interface HasName { name: string; }
interface HasAge { age: number; }
type Person = HasName & HasAge;

let person: Person = {
    name: "John",
    age: 25
};
```

## Type Predicates

Type predicates are special return type annotations that declare a type guard.

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

let pet: Fish | Bird = getRandomPet();
if (isFish(pet)) {
    pet.swim(); // TypeScript knows pet is Fish
} else {
    pet.fly(); // TypeScript knows pet is Bird
}
```

## Template Literal Types

Template literal types build on string literal types and allow creating complex string patterns.

```typescript
type World = "world";
type Greeting = `hello ${World}`;  // type Greeting = "hello world"

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
```

## Keyof Type Operator

The keyof operator queries the key type of an object type.

```typescript
interface Person {
    name: string;
    age: number;
    location: string;
}

type PersonKeys = keyof Person; // "name" | "age" | "location"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
```

## Type Narrowing

Type narrowing is the process of refining types to more specific ones after type checks.

```typescript
function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; // TypeScript knows padding is number
    }
    return padding + input; // TypeScript knows padding is string
}
```

## Call Signatures

Call signatures define how functions can be called, including parameters and return types.

```typescript
interface CalculatorFunction {
    (x: number, y: number): number;
    mode?: "add" | "subtract";
}

const add: CalculatorFunction = (x, y) => x + y;
add.mode = "add";

console.log(add(5, 3)); // 8
```

## Discriminated Unions

Discriminated unions are a pattern where you use a common property to narrow down the type of an object.

```typescript
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
    }
}
```

## Type Inference in Generic Constraints

TypeScript can infer types in generic constraints based on the usage context.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person = {
    name: "John",
    age: 30
};

const name = getProperty(person, "name"); // TypeScript infers string type
const age = getProperty(person, "age");   // TypeScript infers number type
```

## Non-null Assertion Operator

The non-null assertion operator (!) tells TypeScript that a value cannot be null or undefined.

```typescript
function getValue(): string | undefined {
    return "hello";
}

const value = getValue()!; // TypeScript treats value as string
console.log(value.length); // No error
```

## Satisfies Operator

The satisfies operator ensures a value matches a type without widening its inference.

```typescript
type RGB = readonly [red: number, green: number, blue: number];
type Color = RGB | string;

const palevioletred = [219, 112, 147] satisfies RGB;
// Type is exactly [219, 112, 147], not number[]
```

## Method Signatures

Method signatures define how methods within interfaces or types should be structured.

```typescript
interface DateTime {
    toUTC(): Date;
    toString(format?: string): string;
    compare(other: DateTime): number;
}

class MyDateTime implements DateTime {
    toUTC(): Date {
        return new Date();
    }
    toString(format?: string): string {
        return format ? "formatted date" : "default format";
    }
    compare(other: DateTime): number {
        return 0;
    }
}
```

## Abstract Classes

Abstract classes provide a base class that other classes can extend from, with some implementation details left undefined.

```typescript
abstract class Animal {
    abstract makeSound(): void;
    
    move(): void {
        console.log("Moving...");
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}

// Cannot instantiate abstract class
// const animal = new Animal(); // Error
const dog = new Dog();
dog.makeSound(); // "Woof!"
dog.move();      // "Moving..."
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through the GitHub Sponsor. Your support will help me to continue and bring more exciting projects. Thank you!

[![Buy Me A Coffee](/assets/bmc-button.svg)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green)]([https://](https://github.com/sponsors/manthanank))

---

Show your support by 🌟 the repository.

---
