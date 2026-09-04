# TypeScript Development Guidelines

## Architecture & Code Style
- Use modern TypeScript 5.x features: `satisfies` operator, `const` type parameters, decorators, template literal types, and conditional types.
- Always enable strict mode (`strict: true`) in `tsconfig.json`. Avoid `any`; favor `unknown`, generics, or discriminating unions.
- Organize types cleanly using interfaces for open extensibility (object shapes, API contracts) and type aliases for unions, primitives, and mapped types.
- Ensure all functions have explicit parameter types and return type annotations for public APIs.
- Keep components and utilities modular and decoupled.

## Testing & Quality
- Use Vitest for unit testing. Write comprehensive tests covering edge cases, type narrowing, and async behaviors.
- Ensure `npm run build` (`tsc`) passes without compiler errors before committing.
- Format code using Prettier with 2 spaces indentation and single quotes.

## Commits & Releases
- Follow Conventional Commits: `feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`.
