import { validRegister } from '../../../../validations/loginValidations';
import { IUserModel } from '../../interfaces';

interface IRequest {
  email: string;
  password: string;
}

class RegisterUserUseCase {
  constructor(private userModel: IUserModel) {}

  execute(newUser: IRequest) {
    const userAlreadyExist = this.userModel.findUser(newUser.email);

    try {
      validRegister(newUser);
    } catch (err: any) {
      return { code: 400, message: err.message };
    }

    if (userAlreadyExist) {
      return { code: 409, message: 'Email já cadastrado' };
    }

    return { code: 201, token: this.userModel.register(newUser) };
  }
}

export { RegisterUserUseCase };
