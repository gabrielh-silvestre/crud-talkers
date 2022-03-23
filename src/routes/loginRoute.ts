import express from 'express';
import { loginController } from '../useCases/LoginUseCase';

const loginRoute = express.Router();

loginRoute.post('/register', loginController.signUpUser);
loginRoute.post('/', loginController.singInUser);

export { loginRoute };
