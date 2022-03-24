import { Request, Response } from 'express';
import { SingInUserUseCase } from './SingInUserUseCase';

class SingInUserController {
  constructor(private singInUseCase: SingInUserUseCase) {}

  handle = (req: Request, res: Response): Response => {
    const { email, password } = req.body;
    const user = { email, password };

    const useCaseResponse = this.singInUseCase.execute(user);
    const { code, message, token } = useCaseResponse;

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json({ token });
  };
}

export { SingInUserController };
