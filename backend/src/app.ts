import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { apiRouter } from './routes/api';

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Роуты
app.use('/api', apiRouter);

export default app;