import express from 'express';

import { registerUserController } from '../modules/users/useCases/registerUser';
import { singInUserController } from '../modules/users/useCases/singInUser';

const loginRoute = express.Router();

loginRoute.post('/register', registerUserController.handle);
loginRoute.post('/', singInUserController.handle);

export { loginRoute };
