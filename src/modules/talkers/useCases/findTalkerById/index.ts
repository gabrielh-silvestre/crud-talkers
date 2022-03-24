import { TalkerModel } from '../../model/TalkerModel';
import { FindTalkerByIdUseCase } from './FindTalkerByIdUseCase';
import { FindTalkerByIdController } from './FindTalkerByIdController';

const talkerModel = new TalkerModel();
const findTalkerByIdUseCase = new FindTalkerByIdUseCase(talkerModel);
const findTalkerByIdController = new FindTalkerByIdController(
  findTalkerByIdUseCase
);

export { findTalkerByIdController };
