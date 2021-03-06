import express from 'express';
import 'express-async-errors';
import '../typeorm';
import cors from 'cors';
import path from 'path';
import { errorHandler } from '../../err/handler';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(
  '/uploads',
  express.static(path.join(__dirname, '..', '..', 'uploads')),
);

app.use(errorHandler);
export default app;
