import { Request, Response } from 'express';
import { DeleteTalkerUseCase } from './DeleteTalkerUseCase';

class DeleteTalkerController {
  constructor(private deleteTalkerUseCase: DeleteTalkerUseCase) {}

  handle = (req: Request, res: Response) => {
    const { id } = req.params;

    const useCaseResponse = this.deleteTalkerUseCase.execute(id);
    const { code, message } = useCaseResponse;

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).end();
  };
}

export { DeleteTalkerController };
