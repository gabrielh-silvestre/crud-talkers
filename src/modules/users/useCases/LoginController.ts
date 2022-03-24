import { NextFunction, Request, Response } from 'express';
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

  singInUser = (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { code, message, token } = this.loginService.loginUser({
      email,
      password,
    });

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json({ token });
  };

  authUserByToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const findedUser = this.loginService.findByToken(token);

    if (!findedUser) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }

    next();
  };
}

export { LoginController };
