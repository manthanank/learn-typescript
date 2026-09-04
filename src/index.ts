/**
 * Learn TypeScript 5 Showcase
 * Core language features, type mechanics, and design patterns.
 */

// 1. Discriminated Union & Exhaustiveness Checking
export type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'rectangle'; width: number; height: number }
  | { kind: 'square'; size: number };

export function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'rectangle':
      return shape.width * shape.height;
    case 'square':
      return shape.size ** 2;
    default: {
      const _exhaustiveCheck: never = shape;
      throw new Error(`Unhandled shape: ${JSON.stringify(_exhaustiveCheck)}`);
    }
  }
}

// 2. TypeScript 5 "const" Type Parameter
export function asReadonlyTuple<const T extends readonly unknown[]>(values: T): T {
  return values;
}

// 3. Template Literal Types & Event System
export type EventName = `on${'Click' | 'Hover' | 'Focus'}`;

export interface EventBusListener<T = unknown> {
  (payload: T): void;
}

export class TypedEventEmitter {
  private listeners: Map<EventName, EventBusListener[]> = new Map();

  on<T>(event: EventName, listener: EventBusListener<T>): void {
    const existing = this.listeners.get(event) || [];
    existing.push(listener as EventBusListener);
    this.listeners.set(event, existing);
  }

  emit<T>(event: EventName, payload: T): void {
    const handlers = this.listeners.get(event) || [];
    for (const handler of handlers) {
      handler(payload);
    }
  }

  listenerCount(event: EventName): number {
    return this.listeners.get(event)?.length || 0;
  }
}

// 4. Advanced Mapped Types & Deep Readonly
export type DeepReadonly<T> = T extends Function | boolean | number | string | null | undefined
  ? T
  : { readonly [K in keyof T]: DeepReadonly<T[K]> };

// 5. Generic Repository with Type Constraints
export interface Identifiable {
  id: string;
}

export class InMemoryRepository<T extends Identifiable> {
  private items: Map<string, T> = new Map();

  save(item: T): T {
    this.items.set(item.id, item);
    return item;
  }

  findById(id: string): T | undefined {
    return this.items.get(id);
  }

  findAll(): T[] {
    return Array.from(this.items.values());
  }

  delete(id: string): boolean {
    return this.items.delete(id);
  }
}

// 6. Demonstrating the "satisfies" Operator
export interface ThemeConfig {
  primary: string;
  secondary: string;
  [key: string]: string;
}

export const theme = {
  primary: '#0070f3',
  secondary: '#7928ca',
  accent: '#ff0080'
} satisfies ThemeConfig;

// Main Execution
export function main() {
  console.log('🚀 Learn TypeScript 5 Application Initialized');
  const circle: Shape = { kind: 'circle', radius: 5 };
  console.log(`Circle area (r=5): ${calculateArea(circle).toFixed(2)}`);

  const repo = new InMemoryRepository<{ id: string; name: string }>();
  repo.save({ id: 'ts-1', name: 'TypeScript 5 Mastery' });
  console.log(`Repository count: ${repo.findAll().length}`);
}

if (process.env.NODE_ENV !== 'test') {
  main();
}
