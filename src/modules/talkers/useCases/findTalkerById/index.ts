import { TalkerModel } from '../../model/TalkerModel';
import { FindByIdController } from './FindTalkerByIdController';
import { FindByIdUseCase } from './FindTalkerByIdUseCase';

const talkerModel = new TalkerModel();
const findByIdUseCase = new FindByIdUseCase(talkerModel);
const findByIdController = new FindByIdController(findByIdUseCase);

export { findByIdController };
