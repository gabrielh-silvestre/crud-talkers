import { UserModel } from '../../model/UserModel';
import { FindUserByTokenUseCase } from './FindUserByTokenUseCase';
import { FindUserByTokenController } from './FindUserByTokenController';

const userModel = new UserModel();
const findUserByTokenUseCase = new FindUserByTokenUseCase(userModel);
const findUserByTokenController = new FindUserByTokenController(
  findUserByTokenUseCase
);

export { findUserByTokenController };
