import express from 'express';
import cors from 'cors';
import { appRoutes } from './routes/appRoutes.js';

const PORT = 8080;

const app = express();

app.use(cors());

app.use(express.json());

app.use(appRoutes);

app.listen(PORT, () => {
  console.log('APP online');
});
