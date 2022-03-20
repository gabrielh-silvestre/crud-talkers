import express from 'express';
import { loginController } from '../useCases/LoginUseCase';

const loginRoute = express.Router();

loginRoute.post('/', loginController.signUpUser);

export { loginRoute };
