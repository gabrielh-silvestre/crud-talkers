import { Request, Response } from 'express';
import { UpdateTalkerUseCase } from './UpdateTalkerUseCase';

class UpdateTalkerController {
  constructor(private updateTalkerUseCase: UpdateTalkerUseCase) {}

  handle(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const attTalker = { name, age, talk };

    const useCaseResponse = this.updateTalkerUseCase.execute(id, attTalker);
    const { code, message, talker } = useCaseResponse;

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(talker);
  }
}

export { UpdateTalkerController };
