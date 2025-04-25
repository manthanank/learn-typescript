import express, { type Request, type  Response,  type NextFunction } from 'express';
import bodyParser from 'body-parser';

import todoRoutes from './routes/todos.ts';

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Nodejs + TypeScript Server');
});

app.use('/todos', todoRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
