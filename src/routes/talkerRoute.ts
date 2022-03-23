import express from 'express';

import { auth } from '../middleware/auth';
import { talkerController } from '../useCases/TalkerUseCase';

const talkerRoute = express.Router();

talkerRoute.get('/', talkerController.getAllTalkers);
talkerRoute.get('/:id', talkerController.getOneTalker);
talkerRoute.post('/', auth, talkerController.createTalker);

export { talkerRoute };
