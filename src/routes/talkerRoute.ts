import express from 'express';

import { createTalkerController } from '../modules/talkers/useCases/createTalker';
import { deleteTalkerController } from '../modules/talkers/useCases/deleteTalker';
import { findAllTalkerController } from '../modules/talkers/useCases/findAllTalkers';
import { findTalkerByIdController } from '../modules/talkers/useCases/findTalkerById';
import { searchByTalkerNameController } from '../modules/talkers/useCases/searchByTalkerName';
import { updateTalkerController } from '../modules/talkers/useCases/updateTalker';

import { findUserByTokenController as auth } from '../modules/users/useCases/findUserByToken';

const talkerRoute = express.Router();

talkerRoute.get(
  '/search',
  auth.handle,
  searchByTalkerNameController.handle
);

talkerRoute.post(
  '/',
  auth.handle,
  createTalkerController.handle
);

talkerRoute.put(
  '/:id',
  auth.handle,
  updateTalkerController.handle
);

talkerRoute.delete(
  '/:id',
  auth.handle,
  deleteTalkerController.handle
);

talkerRoute.get('/', findAllTalkerController.handle);

talkerRoute.get('/:id', findTalkerByIdController.handle);

export { talkerRoute };
