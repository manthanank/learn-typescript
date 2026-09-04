# Learn TypeScript 📘

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Image CI](https://github.com/manthanank/learn-typescript/actions/workflows/docker.yml/badge.svg)](https://github.com/manthanank/learn-typescript/actions/workflows/docker.yml)
[![Releases](https://github.com/manthanank/learn-typescript/actions/workflows/releases.yml/badge.svg)](https://github.com/manthanank/learn-typescript/actions/workflows/releases.yml)
[![TypeScript Version](https://img.shields.io/badge/TypeScript-5.7+-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-green.svg?logo=node.js)](https://nodejs.org/)
[![Tested with Vitest](https://img.shields.io/badge/Tested%20with-Vitest-yellow.svg?logo=vitest)](https://vitest.dev/)

An exhaustive, battle-tested, enterprise-grade curriculum and reference manual for mastering **TypeScript 5.x**, modern type theory, advanced metaprogramming, compiler architecture, and industrial design patterns.

[Getting Started](#-getting-started) • [Compiler & tsconfig.json](#-the-typescript-compiler--tsconfigjson-mastery) • [Generics Deep Dive](#-generics-deep-dive) • [Advanced Metaprogramming](#-advanced-type-system--metaprogramming) • [Interview Questions](#-typescript-interview-questions--answers) • [Cheat Sheet](#-comprehensive-cheat-sheet)

<br/>

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="public/bmc-button.svg" alt="Buy Me A Coffee" width="180">
</a>

</div>

---

## 📋 Table of Contents

1. [Introduction & Philosophy](#-introduction--philosophy)
   - [What is TypeScript?](#what-is-typescript)
   - [Why TypeScript in Modern Software Engineering?](#why-typescript)
   - [The Type Erasure Model & Structural Typing](#the-type-erasure-model)
2. [Getting Started & Tooling Setup](#-getting-started)
   - [Prerequisites](#prerequisites)
   - [Quick Start Installation](#quick-start-installation)
   - [Directory Structure & Architecture](#directory-structure)
   - [Scripts & Development Workflow](#scripts--development-workflow)
3. [The TypeScript Compiler & tsconfig.json Mastery](#-the-typescript-compiler--tsconfigjson-mastery)
   - [Compiler Phases (Parser, Binder, Type Checker, Emitter)](#compiler-phases)
   - [Strict Mode Flags Deep Dive (noImplicitAny, strictNullChecks, etc.)](#strict-mode-flags)
   - [Module & Target Evolution (NodeNext, ES2022, bundler)](#module-resolution-and-targets)
   - [Project References & Incremental Compilation](#project-references)
4. [Primitive & Fundamental Types](#-primitive--fundamental-types)
   - [Primitives: number, string, boolean, bigint, symbol](#primitives)
   - [Top & Bottom Types: any vs unknown vs never vs void](#top-and-bottom-types)
   - [Literal Types & Const Assertions (as const)](#literal-types--const-assertions)
   - [Tuples & Readonly Arrays](#tuples--readonly-arrays)
5. [Objects, Interfaces & Classes](#-objects-interfaces--classes)
   - [Interfaces vs Type Aliases: Architectural Trade-offs](#interfaces-vs-type-aliases)
   - [Structural Subtyping & Excess Property Checks](#structural-subtyping)
   - [Classes: Access Modifiers, Parameter Properties & Getters/Setters](#classes-in-depth)
   - [Abstract Classes & Polymorphic Contracts](#abstract-classes)
   - [Index Signatures & Record Structures](#index-signatures)
6. [Functions & Call Signatures](#-functions--call-signatures)
   - [Function Types & Call Signatures](#function-types)
   - [Function Overloads in Modern TS](#function-overloads)
   - [Rest Parameters & Tuple Arguments](#rest-parameters)
   - [Typing this Contexts](#typing-this-contexts)
7. [Generics Deep Dive](#-generics-deep-dive)
   - [Generic Functions, Interfaces & Classes](#generic-primitives)
   - [Generic Constraints with extends](#generic-constraints)
   - [The keyof Operator & Property Constraints](#keyof-operator)
   - [TypeScript 5 const Type Parameters](#const-type-parameters)
   - [Generic Defaults & Variance](#generic-defaults)
8. [Utility Types in Depth](#-utility-types-in-depth)
   - [Mutation Utilities: Partial, Required, Readonly](#mutation-utilities)
   - [Selection Utilities: Pick, Omit, Extract, Exclude](#selection-utilities)
   - [Type Transformation: Record, NonNullable, Parameters, ReturnType, Awaited](#transformation-utilities)
   - [Instance Utilities: InstanceType, ConstructorParameters](#instance-utilities)
9. [Advanced Type System & Metaprogramming](#-advanced-type-system--metaprogramming)
   - [Mapped Types & Modifier Remapping (+/-, as)](#mapped-types)
   - [Conditional Types & Distributive Law](#conditional-types)
   - [Type Inference with infer](#type-inference-with-infer)
   - [Template Literal Types & String Manipulation](#template-literal-types)
   - [The satisfies Operator: Exact Literal Preservation](#the-satisfies-operator)
   - [Recursive Types & Deep Immutability](#recursive-types)
10. [Type Narrowing, Guards & Control Flow Analysis](#-type-narrowing-guards--control-flow)
    - [Control Flow Analysis (CFA) Mechanisms](#control-flow-analysis)
    - [Standard Guards: typeof, instanceof, in](#standard-guards)
    - [User-Defined Type Predicates (is)](#user-defined-type-predicates)
    - [Assertion Signatures (asserts)](#assertion-signatures)
    - [Discriminated Unions & Exhaustiveness Checking with never](#discriminated-unions)
11. [Modules, Namespaces & Declaration Files](#-modules-namespaces--declaration-files)
    - [ES Modules vs CommonJS in TypeScript](#es-modules-vs-commonjs)
    - [Ambient Declarations & .d.ts Files](#ambient-declarations)
    - [Declaration Merging (Interfaces & Namespaces)](#declaration-merging)
    - [Triple-Slash Directives](#triple-slash-directives)
12. [Modern Decorators (Stage 3 in TS 5)](#-modern-decorators-stage-3)
    - [Class Decorators](#class-decorators)
    - [Method & Accessor Decorators](#method-decorators)
    - [Field & Parameter Decorators](#field-decorators)
13. [Testing & Quality Assurance](#-testing--quality-assurance)
    - [Unit Testing Types with Vitest](#unit-testing-with-vitest)
    - [Type-Level Testing (expectTypeOf, assertType)](#type-level-testing)
14. [Real-World Architectural Patterns](#-real-world-architectural-patterns)
    - [Pattern 1: Strongly-Typed Result / Either Pattern](#pattern-1-result-either)
    - [Pattern 2: Fully-Typed Event Bus](#pattern-2-typed-event-bus)
    - [Pattern 3: Strongly-Typed REST API Client](#pattern-3-rest-client)
15. [TypeScript Interview Questions & Answers](#-typescript-interview-questions--answers)
    - [Beginner Questions (1-10)](#beginner-questions)
    - [Intermediate Questions (11-25)](#intermediate-questions)
    - [Senior & Architectural Questions (26-40)](#senior--architectural-questions)
16. [Comprehensive Cheat Sheet](#-comprehensive-cheat-sheet)
    - [Syntax Quick Reference](#syntax-quick-reference)
    - [Essential tsconfig.json Presets](#essential-tsconfigjson-presets)
17. [Community & Contributing](#-community--contributing)
18. [Author & Sponsorship](#-author--sponsorship)

---

## 🌟 Introduction & Philosophy

### What is TypeScript?

Developed by Anders Hejlsberg (lead architect of C# and Turbo Pascal) at Microsoft, **TypeScript** is an open-source, strongly typed syntactic superset of JavaScript that compiles down to pristine, standard JavaScript running in any browser, Node.js, Deno, or Bun engine.

```
┌──────────────────────────────────────────────┐
│                  TypeScript                  │
│  Static Types, Generics, Decorators, Enums   │
│  ┌────────────────────────────────────────┐  │
│  │               JavaScript               │  │
│  │  Objects, Closures, Promises, Classes  │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

### Why TypeScript?

1. **Elimination of Common Runtime Errors**: Eliminates the notorious `TypeError: Cannot read properties of undefined` and unintended type coercions at compile time.
2. **Self-Documenting Codebase**: Type signatures serve as living, compiler-enforced API contracts that never drift out of sync with actual business logic.
3. **Fearless Refactoring**: Renaming a field or restructuring a function signature updates every reference across millions of lines of code with zero guesswork.
4. **Developer Tooling Powerhouse**: Powers IntelliSense, autocompletion, instant parameter documentation, and jump-to-definition in VS Code, JetBrains IDEs, and modern AI coding agents.

### The Type Erasure Model

TypeScript’s type system is **erased at compile time**. The compiler analyzes your source code, emits type errors if any constraints are violated, and then strips away all interfaces, type aliases, type annotations, and type assertions—leaving behind clean, unencumbered JavaScript.

```
TypeScript Source File (.ts)
           │
           ▼
 [ TypeScript Compiler (tsc) ]
  ├── 1. Parse into AST
  ├── 2. Bind symbols & scope
  ├── 3. Type check & validate constraints
  └── 4. Transform & Erase Types
           │
           ▼
 JavaScript Output (.js) + Type Declarations (.d.ts)
```

> [!NOTE]
> Types have zero runtime overhead! Types do not exist in the compiled JavaScript bundle. At runtime, performance is 100% equivalent to native JavaScript.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have a modern JavaScript runtime installed:
- **Node.js**: Version 20.x or 22.x LTS
- **Package Manager**: `npm` 10+, `pnpm` 9+, or `bun` 1.1+

```bash
# Verify installation
node -v # Expected: >= v20.0.0
npm -v  # Expected: >= 10.0.0
```

### Quick Start Installation

Clone the repository and install all dependencies:

```bash
# Clone the repository
git clone https://github.com/manthanank/learn-typescript.git

# Navigate into the project directory
cd learn-typescript

# Install dependencies
npm install

# Run the showcase application
npm start
```

### Directory Structure

```
learn-typescript/
├── .github/                      # GitHub Actions CI/CD workflows & guidelines
│   ├── workflows/
│   │   ├── docker.yml            # Automated DockerHub builds
│   │   └── releases.yml          # Releases & semantic changelog
│   ├── copilot-instructions.md   # AI agent instructions
│   └── pull_request_template.md  # PR quality checklist
├── .vscode/                      # Editor extensions, tasks, launch configs
├── public/                       # Favicons, sponsorship banners
├── src/                          # TypeScript source code
│   ├── index.ts                  # Core TypeScript 5 showcase implementations
│   └── index.test.ts             # Vitest test suite
├── Dockerfile                    # Containerization recipe
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # Strict compiler options
├── CHANGELOG.md                  # Release version history
├── CODE_OF_CONDUCT.md            # Contributor covenant
├── CONTRIBUTING.md               # How to contribute
├── SECURITY.md                   # Security vulnerability policy
└── README.md                     # Comprehensive technical documentation
```

### Scripts & Development Workflow

| Command | Purpose |
| :--- | :--- |
| `npm run dev` | Executes `src/index.ts` with instant live-reload on save via `tsx watch` |
| `npm run build` | Compiles TypeScript into JavaScript and `.d.ts` declaration files via `tsc` |
| `npm start` | Executes the compiled production bundle via `node dist/index.js` |
| `npm test` | Runs the Vitest test suite with type checks |
| `npm run test:watch` | Runs Vitest in interactive watch mode for TDD |

---

## ⚙️ The TypeScript Compiler & tsconfig.json Mastery

### Compiler Phases

1. **Scanner & Parser**: Converts raw text characters into an Abstract Syntax Tree (AST).
2. **Binder**: Identifies symbols, scopes, declarations, and assigns lexical bindings.
3. **Type Checker**: Evaluates structural type compatibility, computes conditional types, and enforces constraints.
4. **Emitter**: Translates the AST into target JavaScript (`.js`), sourcemaps (`.js.map`), and declarations (`.d.ts`).

### Strict Mode Flags

Enabling `"strict": true` activates a family of fundamental compiler flags that every professional project should enforce:

| Compiler Flag | Behavior when enabled |
| :--- | :--- |
| `noImplicitAny` | Raises an error on any variable or parameter whose type defaults to `any` implicitly. |
| `strictNullChecks` | Distinguishes `null` and `undefined` from other types. They cannot be assigned to string/number without an explicit union. |
| `strictFunctionTypes` | Enforces contravariance for function parameter types. |
| `strictBindCallApply` | Enforces type safety on `call`, `bind`, and `apply` methods. |
| `strictPropertyInitialization` | Requires class instance properties to be initialized in the constructor or declared optional. |
| `noImplicitThis` | Raises an error whenever `this` defaults to `any`. |
| `useUnknownInCatchVariables` | Forces catch clause error variables to be typed as `unknown` instead of `any`. |
| `noUncheckedIndexedAccess` | When accessing array elements by index or dictionary keys, returns `T | undefined` rather than `T`. |

### Recommended Production tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```


## 🧱 Primitive & Fundamental Types

### Primitives

TypeScript natively supports all JavaScript primitives:

```typescript
const age: number = 32;
const name: string = 'TypeScript 5';
const isEnabled: boolean = true;
const bigId: bigint = 9007199254740991n;
const uniqueKey: symbol = Symbol('auth');
```

### Top & Bottom Types

Understanding the hierarchy of types in TypeScript:

```
           unknown  /  any  (Top Types)
                 │
   ┌─────────────┴─────────────┐
   │                           │
 string, number, boolean, Object, etc.
   │                           │
   └─────────────┬─────────────┘
                 │
               never        (Bottom Type)
```

1. **`any`**: Opts out of all type checking. Dangerous in production because it disables compile-time safety and spreads unchecked through calling code.
2. **`unknown`**: The type-safe counterpart of `any`. Any value can be assigned to `unknown`, but **no operations can be performed on it without narrowing first**:
   ```typescript
   function processPayload(data: unknown) {
     // ❌ data.toUpperCase(); // Error: Object is of type 'unknown'
     if (typeof data === 'string') {
       console.log(data.toUpperCase()); // ✅ Narrowed to string!
     }
   }
   ```
3. **`never`**: Represents values that can never occur. Used for functions that never return (e.g. throw error or infinite loop), or unreachable branches in switch statements (exhaustiveness checking).
4. **`void`**: Represents the absence of any returned value from a function.

### Literal Types & Const Assertions (`as const`)

```typescript
// Literal types limit values to exact constants
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
type StatusCode = 200 | 201 | 400 | 404 | 500;

// as const prevents widening from literals to general primitives
const config = {
  endpoint: 'https://api.github.com',
  timeoutMs: 5000,
  roles: ['admin', 'editor']
} as const;

// Type of config:
// {
//   readonly endpoint: "https://api.github.com";
//   readonly timeoutMs: 5000;
//   readonly roles: readonly ["admin", "editor"];
// }
```

### Tuples & Readonly Arrays

A tuple is a fixed-length array where the type of each element is known:

```typescript
// Fixed 3-element tuple
type GeoPoint = [latitude: number, longitude: number, elevation?: number];

const point: GeoPoint = [37.7749, -122.4194];

// Variadic Tuple Types
type StringNumberBooleans = [string, number, ...boolean[]];
const entry: StringNumberBooleans = ['hello', 1, true, false, true];

// Readonly Tuple
const coordinates: readonly [number, number] = [10.5, 42.8];
// coordinates[0] = 20; // ❌ Cannot assign to '0' because it is a read-only property.
```

---

## 🏛️ Objects, Interfaces & Classes

### Interfaces vs Type Aliases

Both can describe the shape of an object, but they differ in critical ways:

| Feature | Interface | Type Alias |
| :--- | :--- | :--- |
| **Declaration Merging** | ✅ Allowed (merged automatically) | ❌ Syntax Error (Duplicate identifier) |
| **Extends / Inheritance** | `interface B extends A` | Intersection: `type B = A & { ... }` |
| **Union & Intersection Primitives** | ❌ Cannot define unions of primitives | ✅ `type ID = string \| number` |
| **Tuple & Mapped Types** | ❌ Cannot express mapped types directly | ✅ Full support |
| **Compiler Performance** | Faster lookup (cached internally by name) | Evaluated recursively |

```typescript
// Interface Declaration Merging (Widely used to extend global libraries like Express)
interface Window {
  myCustomAnalytics: (event: string) => void;
}

// Type Aliases for Union / Computed types
type Status = 'pending' | 'active' | 'archived';
type Tree<T> = { value: T; children: Tree<T>[] };
```

### Structural Subtyping & Excess Property Checks

TypeScript uses **duck typing** (structural typing). If two objects have the same shape, they are treated as having the same type:

```typescript
interface Point2D {
  x: number;
  y: number;
}

function printPoint(p: Point2D) {
  console.log(`x=${p.x}, y=${p.y}`);
}

const point3D = { x: 10, y: 20, z: 30 };
printPoint(point3D); // ✅ Allowed! point3D has 'x' and 'y' (structural subtyping)

// Excess Property Check on fresh object literals:
// printPoint({ x: 10, y: 20, z: 30 }); // ❌ Error: 'z' does not exist in type 'Point2D'
```

### Classes in Depth

```typescript
abstract class DatabaseConnection {
  // Private identifier (ECMAScript private field)
  #secretKey: string;

  // TypeScript parameter properties: declare and initialize in one line
  constructor(
    protected readonly host: string,
    protected readonly port: number,
    secret: string
  ) {
    this.#secretKey = secret;
  }

  // Abstract method must be implemented by subclasses
  abstract connect(): Promise<void>;

  // Public getter
  public get connectionString(): string {
    return `${this.host}:${this.port}`;
  }
}

class PostgresConnection extends DatabaseConnection {
  async connect(): Promise<void> {
    console.log(`Connected to Postgres at ${this.connectionString}`);
  }
}
```

---

## ⚡ Functions & Call Signatures

### Function Types & Overloads

Function overloading allows a single function implementation to support multiple strongly typed calling patterns:

```typescript
// Overload signatures (must precede implementation)
function formatValue(value: string): string;
function formatValue(value: number, precision: number): string;
function formatValue(value: Date): string;

// Implementation signature (compatible with all overloads)
function formatValue(value: string | number | Date, precision?: number): string {
  if (typeof value === 'string') {
    return value.trim();
  }
  if (typeof value === 'number') {
    return value.toFixed(precision ?? 2);
  }
  return value.toISOString();
}

formatValue('  hello  ');     // Returns string
formatValue(42.5678, 2);      // Returns string
formatValue(new Date());      // Returns string
```

### Typing this Contexts

TypeScript allows declaring the expected type of `this` as the first parameter (erased at runtime):

```typescript
interface CardDeck {
  suits: string[];
  cards: number[];
  createPicker(this: CardDeck): () => { suit: string; card: number };
}

const deck: CardDeck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createPicker(this: CardDeck) {
    return () => {
      const pickedCard = Math.floor(Math.random() * 52);
      const pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit]!, card: pickedCard % 13 };
    };
  }
};
```


## 🧬 Generics Deep Dive

Generics enable writing reusable, componentized functions, classes, and interfaces that work across a variety of types while preserving complete type safety.

### Generic Functions, Interfaces & Classes

```typescript
// Generic Identity Function
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);       // number
const str = identity('TypeScript 5');   // inferred as "TypeScript 5"

// Generic Interface
interface ApiResponse<TData, TMeta = Record<string, unknown>> {
  success: boolean;
  data: TData;
  meta?: TMeta;
  timestamp: string;
}

// Generic Class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}
```

### Generic Constraints with `extends`

By default, a generic parameter `T` could be anything. Use `extends` to restrict acceptable types:

```typescript
interface HasId {
  id: string | number;
}

function printId<T extends HasId>(entity: T): void {
  console.log(`Entity ID is: ${entity.id}`);
}

printId({ id: 'user_101', name: 'Alice' }); // ✅ Allowed
// printId({ name: 'Bob' }); // ❌ Property 'id' is missing
```

### The `keyof` Operator & Property Constraints

```typescript
// Safely extract a property from an object ensuring the key exists
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, username: 'manthanank', email: 'me@example.com' };
const username = getProperty(user, 'username'); // string
// getProperty(user, 'nonExistentKey'); // ❌ Argument of type '"nonExistentKey"' is not assignable to keyof user
```

### TypeScript 5 `const` Type Parameters

Prior to TypeScript 5, passing an object literal to a generic function would widen literal types unless `as const` was manually appended. In TypeScript 5, adding `const` to the type parameter infers exact literal tuples automatically:

```typescript
// Without const type parameter: T is inferred as string[]
function getRolesOld<T extends readonly string[]>(roles: T): T {
  return roles;
}
const r1 = getRolesOld(['admin', 'viewer']); // string[]

// With TS 5 const type parameter: T is inferred as readonly ["admin", "viewer"]
function getRolesNew<const T extends readonly string[]>(roles: T): T {
  return roles;
}
const r2 = getRolesNew(['admin', 'viewer']); // readonly ["admin", "viewer"]
```

---

## 🛠️ Utility Types in Depth

TypeScript provides built-in global utility types to facilitate type transformations:

### Mutation Utilities

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
}

// 1. Partial<T> - Makes all properties optional
type UpdateUserDto = Partial<User>;
// { id?: string; name?: string; email?: string; age?: number }

// 2. Required<T> - Makes all properties mandatory
type CompleteUser = Required<User>;
// { id: string; name: string; email: string; age: number }

// 3. Readonly<T> - Freezes all properties from reassignment
type ImmutableUser = Readonly<User>;
```

### Selection Utilities

```typescript
// 4. Pick<T, K> - Constructs a type with only specified keys
type UserCredentials = Pick<User, 'email'>;
// { email: string }

// 5. Omit<T, K> - Constructs a type excluding specified keys
type UserWithoutId = Omit<User, 'id'>;
// { name: string; email: string; age?: number }

// 6. Exclude<UnionType, ExcludedMembers> - Removes types from a union
type AllStatus = 'pending' | 'active' | 'archived' | 'deleted';
type UsableStatus = Exclude<AllStatus, 'archived' | 'deleted'>;
// "pending" | "active"

// 7. Extract<UnionType, Union> - Extracts types from a union
type StringOrNumber = string | number | boolean;
type OnlyString = Extract<StringOrNumber, string>;
// string
```

### Transformation Utilities

```typescript
// 8. Record<Keys, Type> - Constructs an object type with property keys of type Keys and values of Type
type RolePermissions = Record<'admin' | 'user' | 'guest', string[]>;

// 9. NonNullable<T> - Excludes null and undefined from T
type NullableString = string | null | undefined;
type CleanString = NonNullable<NullableString>; // string

// 10. ReturnType<T> - Extracts the return type of a function
function fetchUser() {
  return { id: 1, name: 'Alex', active: true };
}
type UserResponse = ReturnType<typeof fetchUser>;
// { id: number; name: string; active: boolean }

// 11. Parameters<T> - Obtains the parameters of a function type in a tuple
type FetchParams = Parameters<(id: string, cache: boolean) => void>;
// [id: string, cache: boolean]

// 12. Awaited<T> - Recursively unwraps Promises
type AsyncData = Promise<Promise<string[]>>;
type ResolvedData = Awaited<AsyncData>; // string[]
```


## 🔮 Advanced Type System & Metaprogramming

### Mapped Types & Key Remapping

Mapped types iterate over keys of an existing type to produce a transformed structure:

```typescript
// Basic Mapped Type
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Modifiers: Adding and Removing readonly and optional (?)
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]; // Removes readonly modifier
};

type Concrete<T> = {
  [K in keyof T]-?: T[K]; // Removes optional modifier
};

// Key Remapping via 'as' (Template Literal Types in Keys)
interface RawUser {
  name: string;
  age: number;
}

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<RawUser>;
// {
//   getName: () => string;
//   getAge: () => number;
// }
```

### Conditional Types & Distributive Law

Conditional types select one of two possible types based on a subtyping relationship:

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>; // true
type B = IsString<123>;     // false

// Distributivity: When conditional types act on a generic naked type parameter over a union,
// they distribute across the union members:
type ToArray<T> = T extends any ? T[] : never;
type UnionArray = ToArray<string | number>;
// Result: string[] | number[] (NOT (string | number)[])

// Preventing Distributivity using square brackets:
type NonDistributiveToArray<T> = [T] extends [any] ? T[] : never;
type FixedArray = NonDistributiveToArray<string | number>;
// Result: (string | number)[]
```

### Type Inference with `infer`

The `infer` keyword allows deducing a type from within a conditional check:

```typescript
// Unpack the inner element type of an array or Promise
type Flatten<T> = T extends Array<infer U> ? U : T;
type StrElem = Flatten<string[]>; // string
type NonArr = Flatten<number>;   // number

// Extract First Argument of a Function
type FirstArgument<T> = T extends (first: infer A, ...rest: any[]) => any ? A : never;
type F1 = FirstArgument<(name: string, age: number) => void>; // string

// Extract Return Type of a Promise
type UnpackPromise<T> = T extends Promise<infer R> ? R : T;
type P = UnpackPromise<Promise<number>>; // number
```

### Template Literal Types

Template literal types build upon string literal types and can expand into many strings via unions:

```typescript
type Vertical = 'top' | 'bottom';
type Horizontal = 'left' | 'right';
type Alignment = `${Vertical}-${Horizontal}`;
// "top-left" | "top-right" | "bottom-left" | "bottom-right"

// Event listener names
type Entity = 'user' | 'order';
type Action = 'create' | 'update' | 'delete';
type EventKey = `${Entity}:${Action}`;
// "user:create" | "user:update" | "user:delete" | "order:create" | ...

// Intrinsic String Manipulation Types:
// Uppercase<StringType>, Lowercase<StringType>, Capitalize<StringType>, Uncapitalize<StringType>
type Shout = Uppercase<'hello world'>; // "HELLO WORLD"
```

### The `satisfies` Operator

Introduced in TypeScript 4.9 and enhanced in 5.x, the `satisfies` operator validates that an expression matches a type **without widening or changing the resulting type of that expression**:

```typescript
type Palette = Record<string, string | number[]>;

// ❌ OLD APPROACH (Type Annotation):
// Widens properties to string | number[], losing precise methods
const paletteOld: Palette = {
  red: '#ff0000',
  green: [0, 255, 0]
};
// paletteOld.red.toUpperCase(); // ❌ Error: Property 'toUpperCase' does not exist on type 'string | number[]'

// ✅ MODERN APPROACH (satisfies):
// Validates structure against Palette, while preserving exact literal types!
const paletteNew = {
  red: '#ff0000',
  green: [0, 255, 0]
} satisfies Palette;

paletteNew.red.toUpperCase(); // ✅ Works! Type is string!
paletteNew.green.map((v) => v * 2); // ✅ Works! Type is number[]!
```

### Recursive Types & Deep Readonly

```typescript
// Deep Readonly applying immutability to arbitrary nested tree structures
export type DeepReadonly<T> = T extends Function | boolean | number | string | symbol | bigint | null | undefined
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

interface Config {
  server: {
    host: string;
    port: number;
    ssl: {
      cert: string;
    };
  };
}

type LockedConfig = DeepReadonly<Config>;
// lockedConfig.server.ssl.cert = 'new'; // ❌ Error: Cannot assign to 'cert' because it is a read-only property.
```


## 🎯 Type Narrowing, Guards & Control Flow Analysis

TypeScript’s type checker uses **Control Flow Analysis (CFA)** to track the precise type of a variable at every line of code as conditionals and branches are executed.

### Standard Type Guards

```typescript
// 1. typeof Type Guard
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === 'number') {
    return ' '.repeat(padding) + input; // Narrowed to number
  }
  return padding + input; // Narrowed to string
}

// 2. instanceof Type Guard
class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

function handleError(err: unknown) {
  if (err instanceof HttpError) {
    console.error(`Status ${err.statusCode}: ${err.message}`);
  } else if (err instanceof Error) {
    console.error(`Generic error: ${err.message}`);
  }
}

// 3. in Operator Guard
interface Cat {
  meow: () => void;
}
interface Dog {
  bark: () => void;
}

function speak(pet: Cat | Dog) {
  if ('meow' in pet) {
    pet.meow(); // Narrowed to Cat
  } else {
    pet.bark(); // Narrowed to Dog
  }
}
```

### User-Defined Type Predicates (`is`)

When runtime type checks become complex, encapsulate them in custom type guard functions returning `parameter is Type`:

```typescript
interface ApiResponseSuccess<T> {
  status: 'success';
  data: T;
}

interface ApiResponseFailure {
  status: 'error';
  message: string;
}

type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseFailure;

// Custom Type Predicate
function isSuccessResponse<T>(res: ApiResponse<T>): res is ApiResponseSuccess<T> {
  return res.status === 'success' && 'data' in res;
}

function handleResponse(res: ApiResponse<{ userId: string }>) {
  if (isSuccessResponse(res)) {
    console.log(`Success! User: ${res.data.userId}`);
  } else {
    console.error(`Failed with message: ${res.message}`);
  }
}
```

### Assertion Signatures (`asserts`)

Used when a function validates a condition and throws an error if that condition is false, asserting that the variable has narrowed:

```typescript
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new Error(`Expected 'val' to be defined, but received ${val}`);
  }
}

function processUserData(user: { name?: string | null }) {
  assertIsDefined(user.name);
  // From this point onward in the function, user.name is narrowed to string!
  console.log(user.name.toUpperCase());
}
```

### Discriminated Unions & Exhaustiveness Checking with `never`

Discriminated unions (tagged unions) are one of TypeScript's most powerful architectural patterns:

```typescript
export type NetworkState =
  | { state: 'idle' }
  | { state: 'loading' }
  | { state: 'success'; response: string }
  | { state: 'failed'; code: number; reason: string };

export function renderNetworkState(state: NetworkState): string {
  switch (state.state) {
    case 'idle':
      return 'Waiting to initialize...';
    case 'loading':
      return 'Loading data from server...';
    case 'success':
      return `Loaded: ${state.response}`;
    case 'failed':
      return `Error (${state.code}): ${state.reason}`;
    default: {
      // If a new state (e.g. 'retrying') is added to NetworkState,
      // TypeScript emits a compile-time error here immediately!
      const _exhaustiveCheck: never = state;
      throw new Error(`Unhandled state: ${_exhaustiveCheck}`);
    }
  }
}
```


## 📦 Modules, Namespaces & Declaration Files

### ES Modules vs CommonJS in Modern TypeScript

TypeScript 5 supports native ECMAScript Modules via `"module": "NodeNext"`. In this mode, relative import paths must include the `.js` extension, even in `.ts` source files:

```typescript
// Correct modern ESM import
import { calculateArea } from './math.js';
import type { Shape } from './types.js'; // Explicit type import
```

### Ambient Declarations & `.d.ts` Files

Declaration files contain only type information and produce no emitted JavaScript:

```typescript
// globals.d.ts
declare const __API_BASE_URL__: string;
declare const __APP_VERSION__: string;

// Declaring untyped third-party modules or asset files
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
```

### Declaration Merging

Declaration merging occurs when the compiler joins two separate declarations declared with the same name into a single definition:

```typescript
// Original interface (e.g., from an npm package)
interface UserProfile {
  name: string;
}

// In your application code: Extending UserProfile
interface UserProfile {
  roles: string[];
}

// Resulting merged interface:
// interface UserProfile {
//   name: string;
//   roles: string[];
// }
```

---

## 🎨 Modern Decorators (Stage 3 in TS 5)

TypeScript 5 introduced support for the official **ECMAScript Stage 3 Decorators** standard, eliminating the legacy `experimentalDecorators` flag:

```typescript
// Method Logger Decorator
function logExecution(
  target: any,
  context: ClassMethodDecoratorContext
) {
  const methodName = String(context.name);

  return function (this: any, ...args: any[]) {
    console.log(`[EXEC] Calling ${methodName} with args:`, args);
    const start = performance.now();
    const result = target.call(this, ...args);
    const duration = performance.now() - start;
    console.log(`[EXEC] ${methodName} completed in ${duration.toFixed(2)}ms`);
    return result;
  };
}

class PaymentProcessor {
  @logExecution
  processTransaction(amount: number, currency: string) {
    return `Processed ${amount} ${currency}`;
  }
}

const processor = new PaymentProcessor();
processor.processTransaction(250, 'USD');
```

---

## 🏗️ Real-World Architectural Patterns

### Pattern 1: Strongly-Typed Result / Either Pattern

Replace runtime exception throwing with explicit, compiler-checked Success/Failure Result types:

```typescript
export type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E };

export function Ok<T>(value: T): Result<T, never> {
  return { success: true, value };
}

export function Err<E>(error: E): Result<never, E> {
  return { success: false, error };
}

// Usage in Business Logic
function divide(a: number, b: number): Result<number, string> {
  if (b === 0) {
    return Err('Division by zero is undefined');
  }
  return Ok(a / b);
}

const res = divide(10, 2);
if (res.success) {
  console.log(`Calculation: ${res.value}`); // Narrowed to number
} else {
  console.error(`Calculation Failed: ${res.error}`); // Narrowed to string
}
```

### Pattern 2: Fully-Typed Event Bus

```typescript
type EventMap = {
  'user:registered': { userId: string; email: string };
  'order:created': { orderId: string; total: number };
  'system:alert': { level: 'info' | 'warn' | 'error'; message: string };
};

type EventCallback<T> = (payload: T) => void;

export class TypedEventBus<TMap extends Record<string, unknown>> {
  private handlers: { [K in keyof TMap]?: EventCallback<TMap[K]>[] } = {};

  on<K extends keyof TMap>(event: K, handler: EventCallback<TMap[K]>): void {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event]!.push(handler);
  }

  emit<K extends keyof TMap>(event: K, payload: TMap[K]): void {
    const list = this.handlers[event];
    if (list) {
      for (const fn of list) {
        fn(payload);
      }
    }
  }
}

// Instantiation:
const bus = new TypedEventBus<EventMap>();

// Compile-time verified events and payloads!
bus.on('user:registered', (data) => {
  console.log(`Welcome ${data.email} (${data.userId})`);
});

bus.emit('user:registered', { userId: '123', email: 'user@example.com' });
```


## 🎯 TypeScript Interview Questions & Answers

### Beginner Questions

#### 1. What is TypeScript, and how does it relate to JavaScript?
TypeScript is a statically typed syntactic superset of JavaScript developed by Microsoft. All valid JavaScript is valid TypeScript. TypeScript introduces static type definitions that are validated at compile time and completely stripped away (type erasure) to emit standard JavaScript.

#### 2. What are the key primitive types in TypeScript?
`number`, `string`, `boolean`, `bigint`, `symbol`, `null`, and `undefined`.

#### 3. What is the difference between `any` and `unknown`?
- `any` disables all type checking, permitting arbitrary property access and operations without compile-time warnings.
- `unknown` is the type-safe counterpart of `any`. Any value can be assigned to `unknown`, but no properties or operations can be performed on it without narrowing the type first (via `typeof`, `instanceof`, etc.).

#### 4. What is the `never` type?
`never` represents the type of values that never occur. It represents functions that never return (such as infinite loops or functions that unconditionally throw errors) and unreachable conditional branches in exhaustive type checks.

#### 5. What is the difference between an `interface` and a `type` alias?
Interfaces can be merged through declaration merging and are optimized for object shapes with inheritance (`extends`). Type aliases can represent primitives, unions, intersections, tuples, and mapped types, but cannot be reopened or merged.

#### 6. What does `strictNullChecks` do in `tsconfig.json`?
When enabled, `null` and `undefined` are not assignable to other types unless explicitly declared in a union (e.g. `string | null`). This prevents unexpected `TypeError` exceptions at runtime.

#### 7. What is type inference?
Type inference is TypeScript’s ability to automatically deduce the type of an expression when no explicit type annotation is provided (e.g., `let x = 42;` infers `x: number`).

#### 8. How do you define an optional property in an interface?
By appending a question mark `?` after the property name:
```typescript
interface User {
  id: string;
  bio?: string; // Optional
}
```

#### 9. What are union types and intersection types?
- Union types (`A | B`) allow a value to be either type `A` or type `B`.
- Intersection types (`A & B`) combine multiple types into one, requiring all properties from both types.

#### 10. What is type assertion (`as`) and when should it be avoided?
Type assertion (`value as TargetType`) tells the compiler to treat a value as a specific type, overriding the compiler’s deduction. It should be avoided when possible because it bypasses safety checks and can conceal runtime type mismatches.

---

### Intermediate Questions

#### 11. What is structural typing (duck typing)?
Structural typing means type compatibility and equality are determined solely by the shape and members of the type, rather than explicit declarations or nominal class hierarchies. If type `A` has all the members required by type `B`, `A` is assignable to `B`.

#### 12. What are discriminated unions (tagged unions)?
A discriminated union is a union of object types where each member has a common literal property (the "discriminant" or "tag", e.g., `kind: 'circle' | 'square'`). The compiler uses this tag to narrow down the union inside `switch` or `if` statements.

#### 13. How does the `keyof` operator work?
`keyof T` produces a union of string, number, or symbol literal keys belonging to the type `T`.
```typescript
interface Point { x: number; y: number; }
type PointKeys = keyof Point; // "x" | "y"
```

#### 14. What are mapped types?
Mapped types build new object types by iterating over the keys of an existing type using the `[K in Keys]` syntax, allowing modifiers like `readonly` or `?` to be added or removed.

#### 15. What is the `satisfies` operator introduced in TypeScript 4.9?
The `satisfies` operator validates that an expression matches a specified type constraint without widening the resulting type or losing the exact literal inferences of its properties.

#### 16. What does the `as const` assertion do?
`as const` instructs the compiler to infer the narrowest possible literal types, marking all object properties as `readonly` and converting arrays into fixed-length readonly tuples.

#### 17. How do type predicates (`is`) work?
A type predicate has the return signature `parameter is Type`. When a function returning this predicate evaluates to `true`, the TypeScript compiler narrows the inspected variable to that type in following code blocks.

#### 18. What is the difference between `noImplicitAny` and `strict`?
`noImplicitAny` is a single compiler flag that disallows variables defaulting to `any`. `strict` is a parent flag that enables `noImplicitAny` alongside `strictNullChecks`, `strictFunctionTypes`, `strictBindCallApply`, and others.

#### 19. What are utility types like `Pick` and `Omit`?
- `Pick<T, K>` constructs a type by picking only keys `K` from `T`.
- `Omit<T, K>` constructs a type by picking all keys from `T` and dropping keys `K`.

#### 20. How does the `infer` keyword operate in conditional types?
`infer` introduces a temporary type variable within the `extends` clause of a conditional type, allowing the compiler to extract and deduce an internal type component (such as the return type of a function or the inner value of a Promise).

---

### Senior & Architectural Questions

#### 21. Explain variance in TypeScript (Covariance, Contravariance, Invariance, and Bivariance).
- **Covariance**: A type order is preserved: `Dog <: Animal` implies `Array<Dog> <: Array<Animal>` (return types are covariant).
- **Contravariance**: A type order is reversed: with `strictFunctionTypes: true`, function parameter types are contravariant (`(a: Animal) => void <: (d: Dog) => void`).
- **Bivariance**: When `strictFunctionTypes: false`, function parameters were bivariant (both covariant and contravariant).
- **Invariance**: Types cannot be substituted in either direction (read-write generic containers).

#### 22. How do you implement exhaustiveness checking with `never`?
In a `switch` statement over a discriminated union, assign the unhandled state to a variable of type `never`:
```typescript
default: {
  const _exhaustive: never = state;
  throw new Error(`Unhandled variant: ${_exhaustive}`);
}
```
If a new member is added to the union later, the compiler immediately flags an error at this line.

#### 23. What are TypeScript 5 `const` type parameters and why are they significant?
Declaring `<const T>` on a generic parameter causes function arguments to be inferred with `as const` literal precision automatically, eliminating boilerplate calls to `as const` at call sites.

#### 24. How does module resolution differ between `node16` / `nodenext` and `bundler`?
- `NodeNext`: Enforces strict Node.js ECMAScript Module rules, requiring explicit file extensions (`.js`) in relative import paths and honoring `exports` and `type: module` in `package.json`.
- `bundler`: Designed for Vite/Webpack environments where file extensions are optional and resolved by external bundler tools rather than Node.js runtime.

#### 25. What is the performance impact of large complex conditional and recursive types on `tsc`?
Deeply nested recursive conditional types or massive unions can trigger exponential compiler evaluation steps, leading to slow IDE response times and `tsc` memory exhaustion (`JavaScript heap out of memory`). Mitigate by using interface caching, indexing lookups instead of unions, and tail-call optimized conditional types.

---

## 📑 Comprehensive Cheat Sheet

### Syntax Quick Reference

```typescript
// 1. Primitive & Union
type ID = string | number;

// 2. Interface with Generics
interface Entity<T> {
  id: ID;
  data: T;
  createdAt: Date;
}

// 3. Const Type Parameter (TS 5)
function createTuple<const T extends readonly unknown[]>(elements: T): T {
  return elements;
}

// 4. Mapped Type
type ReadonlyRecord<K extends keyof any, T> = {
  readonly [P in K]: T;
};

// 5. Conditional & Infer
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// 6. Discriminated Union
type Result<T, E = Error> =
  | { success: true; data: T }
  | { success: false; error: E };

// 7. Satisfies Operator
const config = {
  timeout: 1000,
  retries: 3
} satisfies Record<string, number>;
```

### Essential tsconfig.json Presets

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "declaration": true,
    "noUncheckedIndexedAccess": true
  }
}
```

---

## 🤝 Community & Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project (`https://github.com/manthanank/learn-typescript/fork`)
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please make sure to read the [Contributing Guide](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 👤 Author & Sponsorship

**Manthan Ankolekar**

- GitHub: [@manthanank](https://github.com/manthanank)
- Website: [manthanank.github.io](https://manthanank.github.io)
- LinkedIn: [Manthan Ankolekar](https://www.linkedin.com/in/manthanank/)

<div align="center">

If this curriculum or project helped you master TypeScript, please consider supporting my work:

<a href="https://www.buymeacoffee.com/manthanank">
  <img src="public/bmc-button.svg" alt="Buy Me A Coffee" width="200">
</a>

<br/><br/>

⭐ **Star this repository** if you found it valuable!

</div>
