import { TalkerModel } from '../../model/TalkerModel';
import { FindByIdUseCase } from './FindTalkerByIdUseCase';
import { FindByIdController } from './FindTalkerByIdController';

const talkerModel = new TalkerModel();
const findByIdUseCase = new FindByIdUseCase(talkerModel);
const findByIdController = new FindByIdController(findByIdUseCase);

export { findByIdController };
