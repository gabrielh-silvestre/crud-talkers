import { Request, Response } from 'express';
import { LoginService } from '../services/LoginService';

class LoginController {
  private loginService: LoginService;

  constructor(service: LoginService) {
    this.loginService = service;
  }

  signUpUser = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { code, message, token } = this.loginService.registerNewUser({
      email,
      password,
    });

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json({ token });
  };
}

export { LoginController };
