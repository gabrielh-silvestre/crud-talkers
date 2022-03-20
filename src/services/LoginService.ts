import { LoginModel } from '../model/LoginModel';
import { validRegister } from './validations/LoginValidations';

class LoginService {
  private loginModel: LoginModel;

  constructor(model: LoginModel) {
    this.loginModel = model;
  }

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
}

export { LoginService };
