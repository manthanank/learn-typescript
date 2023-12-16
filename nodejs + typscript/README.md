# Node.js TypeScript Express Starter

This repository provides a basic setup for a Node.js TypeScript project with Express.

## Installation

Clone the repository or create a new directory:

```bash
git clone <repository_url>
cd project-directory
```

## Initialize the project

```bash
npm init -y
```

Install necessary dependencies:

```bash
npm install express body-parser
npm install --save-dev nodemon @types/node
```

Initialize TypeScript configuration:

```bash
tsc --init
```

## Usage

Start the TypeScript compiler in watch mode to automatically recompile files:

```bash
tsc -w
```

Run the project using nodemon for automatic server restarts:

```bash
npm start
```

## Project Structure

- `src/` - Contains TypeScript source files.
- `dist/` - Compiled JavaScript files (generated automatically by TypeScript).
- `index.ts` - Entry point of the application.

## Configuration

- tsconfig.json - TypeScript configuration file.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](/nodejs%20+%20typscript/LICENSE).
