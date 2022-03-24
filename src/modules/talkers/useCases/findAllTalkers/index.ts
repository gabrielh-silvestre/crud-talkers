import { TalkerModel } from '../../model/TalkerModel';
import { FindAllTalkerUseCase } from './FindAllTalkersUseCase';
import { FindAllTalkerController } from './FindAllTalkersController';

const talkerModel = new TalkerModel();
const findAllTalkerUseCase = new FindAllTalkerUseCase(talkerModel);
const findAllTalkerController = new FindAllTalkerController(findAllTalkerUseCase);

export { findAllTalkerController };
