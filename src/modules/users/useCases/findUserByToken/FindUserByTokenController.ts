import { NextFunction, Request, Response } from 'express';
import { FindUserByTokenUseCase } from './FindUserByTokenUseCase';

class FindUserByTokenController {
  constructor(private findUserByTokenUseCase: FindUserByTokenUseCase) {}

  handle(req: Request, res: Response, next: NextFunction): Response | void {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    const findedUser = this.findUserByTokenUseCase.execute(token);

    if (!findedUser) {
      return res.status(401).json({ message: 'Token não encontrado' });
    }

    next();
  }
}

export { FindUserByTokenController };
