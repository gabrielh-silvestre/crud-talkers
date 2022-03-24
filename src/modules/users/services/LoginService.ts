import { validRegister } from '../../../validations/loginValidations';
import { IUserModel } from '../interfaces';

class LoginService {
  constructor(private loginModel: IUserModel) {}

  private userAlreadyExist(email: string) {
    const userExist = this.loginModel.findUser(email);
    if (userExist) throw new Error('User already exist');
  }

  registerNewUser(newUser: { email: string; password: string }) {
    try {
      this.userAlreadyExist(newUser.email);
    } catch (err: any) {
      return { code: 409, message: err.message };
    }

    try {
      validRegister(newUser);
    } catch (err: any) {
      return { code: 400, message: err.message };
    }

    return { code: 201, token: this.loginModel.register(newUser) };
  }

  loginUser(user: { email: string; password: string }) {
    try {
      validRegister(user);
    } catch (err: any) {
      return { code: 400, message: err.message };
    }

    const userExist = this.loginModel.findUser(user.email);
    if (!userExist)
      return {
        code: 404,
        message: `Não existe um usuário com esse email: ${user.email}`,
      };

    if (userExist.password !== user.password)
      return { code: 401, message: 'Senha inválida' };

    return { code: 200, token: userExist.token };
  }

  findAll() {
    return this.loginModel.findAll();
  }
  
  findByToken(token: string) {
    const user = this.loginModel.findByToken(token);

    if (user) return { code: 200, user };
    return { code: 404, message: 'Usuário não encontrado' };
  }
}

export { LoginService };