import { NextFunction, Request, Response } from 'express';
import { UserModel } from '../model/UserModel';

const userModel = new UserModel();

const auth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  const findedUser = userModel.findByToken(token);

  if (!findedUser) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  next();
};

export { auth };
