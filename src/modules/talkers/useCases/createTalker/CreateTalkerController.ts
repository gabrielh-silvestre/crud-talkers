import { Request, Response } from 'express';

import { CreateTalkerUseCase } from './CreateTalkerUseCase';

class CreateTalkerController {
  constructor(private createTalkerUseCase: CreateTalkerUseCase) {}

  handle = (req: Request, res: Response): Response => {
    const { name, age, talk } = req.body;
    const newTalker = { name, age, talk };

    const useCaseResponse = this.createTalkerUseCase.execute(newTalker);
    const { code, message, talker } = useCaseResponse;

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(talker);
  };
}

export { CreateTalkerController };
