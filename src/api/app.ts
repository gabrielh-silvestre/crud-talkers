import express from 'express';

import { loginRoute } from '../routes/loginRoute';
import { talkerRoute } from '../routes/talkerRoute';

const app = express();

app.use(express.json());

app.use('/talker', talkerRoute);
app.use('/login', loginRoute);

export { app };
