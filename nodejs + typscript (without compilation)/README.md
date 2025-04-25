# Node.js TypeScript Express Starter (Without Compilation)

This repository provides a basic setup for a Node.js TypeScript project with Express, running directly without TypeScript compilation.

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
npm install express body-parser ts-node
npm install --save-dev nodemon @types/node @types/express
```

## Usage

Run the project:

```bash
npm start # or npm run start
```

## Project Structure

- `src/` - Contains TypeScript source files.
  - `app.ts` - Main application file.
  - `controllers/` - Contains route controllers.
  - `models/` - Contains data models.
  - `public/` - Contains static files.
  - `routes/` - Contains route definitions.

## Configuration

- tsconfig.json - TypeScript configuration file.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](/nodejs%20+%20typscript%20(without%20compilation)/LICENSE).
