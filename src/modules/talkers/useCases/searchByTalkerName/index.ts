import { TalkerModel } from '../../model/TalkerModel';
import { SearchByTalkerNameUseCase } from './SearchByTalkerNameUseCase';
import { SearchByTalkerNameController } from './SearchByTalkerNameController';

const talkerModel = new TalkerModel();
const searchByTalkerNameUseCase = new SearchByTalkerNameUseCase(talkerModel);
const searchByTalkerNameController = new SearchByTalkerNameController(
  searchByTalkerNameUseCase
);

export { searchByTalkerNameController };
