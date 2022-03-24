import { UserModel } from '../../model/UserModel';
import { SingInUserController } from './SingInUserController';
import { SingInUserUseCase } from './SingInUserUseCase';

const userModel = new UserModel();
const singInUserUseCase = new SingInUserUseCase(userModel);
const singInUserController = new SingInUserController(singInUserUseCase);

export { singInUserController };
