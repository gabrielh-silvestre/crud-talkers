import express from 'express';

import { talkerController } from '../useCases/TalkerUseCase';
import { loginController } from '../useCases/LoginUseCase';

const talkerRoute = express.Router();

talkerRoute.get('/', talkerController.getAllTalkers);
talkerRoute.get('/:id', talkerController.getOneTalker);

talkerRoute.post(
  '/',
  loginController.authUserByToken,
  talkerController.createTalker
);

talkerRoute.put(
  '/:id',
  loginController.authUserByToken,
  talkerController.updateTalker
);

export { talkerRoute };
