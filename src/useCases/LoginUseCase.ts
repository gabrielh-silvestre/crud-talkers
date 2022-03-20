import { LoginController } from '../controller/LoginController';
import { LoginModel } from '../model/LoginModel';
import { LoginService } from '../services/LoginService';

const loginModel = new LoginModel();
const loginService = new LoginService(loginModel);
const loginController = new LoginController(loginService);

export { loginController };
