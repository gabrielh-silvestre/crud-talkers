import { TalkerModel } from '../../model/TalkerModel';
import { FindAllTalkerUseCase } from './FindAllTalkersUseCase';
import { FindAllTalkerController } from './FindAllTalkersController';

const talkerModel = new TalkerModel();
const talkerUseCase = new FindAllTalkerUseCase(talkerModel);
const talkerController = new FindAllTalkerController(talkerUseCase);

export { talkerController };
