import express from 'express';
import cors from 'cors';
import { appRoutes } from './routes/appRoutes.js';

const PORT = 8080;
const host = '0.0.0.0';

const app = express();

app.use(cors());

app.use(express.json());

app.use(appRoutes);

app.listen(PORT, host, () => {
  console.log('API online');
});
