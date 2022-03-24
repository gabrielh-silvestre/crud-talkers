import { TalkerModel } from '../../model/TalkerModel';
import { CreateTalkerUseCase } from './CreateTalkerUseCase';
import { CreateTalkerController } from './CreateTalkerController';

const talkerModel = new TalkerModel();
const createTalkerUseCase = new CreateTalkerUseCase(talkerModel);
const createTalkerController = new CreateTalkerController(createTalkerUseCase);

export { createTalkerController };
