import { TalkerModel } from '../../model/TalkerModel';
import { DeleteTalkerUseCase } from './DeleteTalkerUseCase';
import { DeleteTalkerController } from './DeleteTalkerController';

const talkerModel = new TalkerModel();
const deleteTalkerUseCae = new DeleteTalkerUseCase(talkerModel);
const deleteTalkerController = new DeleteTalkerController(deleteTalkerUseCae);

export { deleteTalkerController };
