import { describe, it, expect } from 'vitest';
import {
  calculateArea,
  asReadonlyTuple,
  TypedEventEmitter,
  InMemoryRepository,
  theme,
  type Shape
} from './index.js';

describe('TypeScript 5 Core Feature Suite', () => {
  describe('calculateArea (Discriminated Unions & Exhaustiveness)', () => {
    it('calculates circle area correctly', () => {
      const circle: Shape = { kind: 'circle', radius: 10 };
      expect(calculateArea(circle)).toBeCloseTo(314.159, 2);
    });

    it('calculates rectangle area correctly', () => {
      const rect: Shape = { kind: 'rectangle', width: 4, height: 7 };
      expect(calculateArea(rect)).toBe(28);
    });

    it('calculates square area correctly', () => {
      const sq: Shape = { kind: 'square', size: 5 };
      expect(calculateArea(sq)).toBe(25);
    });
  });

  describe('asReadonlyTuple (TypeScript 5 const type parameters)', () => {
    it('preserves literal tuple values at runtime', () => {
      const tuple = asReadonlyTuple(['admin', 'editor', 'viewer'] as const);
      expect(tuple).toEqual(['admin', 'editor', 'viewer']);
      expect(tuple.length).toBe(3);
    });
  });

  describe('TypedEventEmitter (Template Literal Types & Event Bus)', () => {
    it('subscribes and emits strongly typed events', () => {
      const emitter = new TypedEventEmitter();
      let clickedPayload = '';

      emitter.on<string>('onClick', (payload) => {
        clickedPayload = payload;
      });

      expect(emitter.listenerCount('onClick')).toBe(1);
      emitter.emit('onClick', 'button-submit');
      expect(clickedPayload).toBe('button-submit');
    });
  });

  describe('InMemoryRepository (Generic Constraints)', () => {
    interface User {
      id: string;
      name: string;
      role: string;
    }

    it('performs CRUD operations with generic types', () => {
      const repo = new InMemoryRepository<User>();
      const user: User = { id: 'u1', name: 'Alice', role: 'Engineer' };

      repo.save(user);
      expect(repo.findById('u1')).toEqual(user);
      expect(repo.findAll()).toHaveLength(1);

      const deleted = repo.delete('u1');
      expect(deleted).toBe(true);
      expect(repo.findById('u1')).toBeUndefined();
    });
  });

  describe('satisfies operator', () => {
    it('maintains exact property literal types while adhering to interface', () => {
      expect(theme.primary).toBe('#0070f3');
      expect(theme.secondary).toBe('#7928ca');
      expect(theme.accent).toBe('#ff0080');
    });
  });
});
