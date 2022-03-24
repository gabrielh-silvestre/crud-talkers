import { TalkerModel } from '../../model/TalkerModel';
import { UpdateTalkerUseCase } from './UpdateTalkerUseCase';
import { UpdateTalkerController } from './UpdateTalkerController';

const talkerModel = new TalkerModel();
const updateTalkerUseCase = new UpdateTalkerUseCase(talkerModel);
const updateTalkerController = new UpdateTalkerController(updateTalkerUseCase);

export { updateTalkerController };
