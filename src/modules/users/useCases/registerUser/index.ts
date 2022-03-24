import { UserModel } from '../../model/UserModel';
import { RegisterUserController } from './RegisterUserController';
import { RegisterUserUseCase } from './RegisterUserUseCase';

const userModel = new UserModel();
const registerUserUseCase = new RegisterUserUseCase(userModel);
const registerUserController = new RegisterUserController(registerUserUseCase);

export { registerUserController };
