import { LoginModel } from "../model/LoginModel";

class LoginService {
  private loginModel: LoginModel;

  constructor(model: LoginModel) {
    this.loginModel = model;
  }
}

export { LoginService };
