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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
