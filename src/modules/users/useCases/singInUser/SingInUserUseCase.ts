import { validRegister } from '../../../../validations/loginValidations';
import { IUserModel } from '../../interfaces';

interface IRequest {
  email: string;
  password: string;
}

class SingInUserUseCase {
  constructor(private userModel: IUserModel) {}

  execute(user: IRequest) {
    try {
      validRegister(user);
    } catch (err: any) {
      return { code: 400, message: err.message };
    }

    const userExist = this.userModel.findUser(user.email);
    if (!userExist)
      return {
        code: 404,
        message: `Não existe um usuário com esse email: ${user.email}`,
      };

    if (userExist.password !== user.password) {
      return { code: 401, message: 'Senha inválida' };
    }

    return { code: 200, token: userExist.token };
  }
}

export { SingInUserUseCase };
