import express from 'express';
import { talkerRoute } from './routes/talkerRoute';

const PORT = 3001;
const api = express();

api.use('/talker', talkerRoute);

api.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`));
