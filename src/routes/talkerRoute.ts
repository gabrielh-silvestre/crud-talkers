import express from 'express';

import { createTalkerController } from '../modules/talkers/useCases/createTalker';
import { deleteTalkerController } from '../modules/talkers/useCases/deleteTalker';
import { findAllTalkerController } from '../modules/talkers/useCases/findAllTalkers';
import { findTalkerByIdController } from '../modules/talkers/useCases/findTalkerById';
import { searchByTalkerNameController } from '../modules/talkers/useCases/searchByTalkerName';
import { updateTalkerController } from '../modules/talkers/useCases/updateTalker';

import { loginController } from '../modules/users/useCases/LoginUseCase';

const talkerRoute = express.Router();

talkerRoute.get(
  '/search',
  loginController.authUserByToken,
  searchByTalkerNameController.handle
);

talkerRoute.post(
  '/',
  loginController.authUserByToken,
  createTalkerController.handle
);

talkerRoute.put(
  '/:id',
  loginController.authUserByToken,
  updateTalkerController.handle
);

talkerRoute.delete(
  '/:id',
  loginController.authUserByToken,
  deleteTalkerController.handle
);

talkerRoute.get('/', findAllTalkerController.handle);

talkerRoute.get('/:id', findTalkerByIdController.handle);

export { talkerRoute };
