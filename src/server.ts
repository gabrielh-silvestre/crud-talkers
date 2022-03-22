import express from 'express';
import { loginRoute } from './routes/loginRoute';
import { talkerRoute } from './routes/talkerRoute';

const PORT = process.env.PORT || 3001;
const api = express();

api.use('/talker', talkerRoute);
api.use('/login', express.json(), loginRoute);

api.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`));
