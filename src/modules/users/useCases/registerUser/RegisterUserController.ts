import { Request, Response } from 'express';
import { RegisterUserUseCase } from './RegisterUserUseCase';

class RegisterUserController {
  constructor(private registerUserUseCase: RegisterUserUseCase) {}

  handle = (req: Request, res: Response): Response => {
    const { email, password } = req.body;
    const newUser = { email, password };

    const useCaseResponse = this.registerUserUseCase.execute(newUser);
    const { code, message, token } = useCaseResponse;

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json({ token });
  };
}

export { RegisterUserController };
