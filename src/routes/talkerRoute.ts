import express from 'express';
import { talkerController } from '../useCases/TalkerUseCase';

const talkerRoute = express.Router();

talkerRoute.get('/', talkerController.getAllTalkers);
talkerRoute.get('/:id', talkerController.getOneTalker);

export { talkerRoute };
