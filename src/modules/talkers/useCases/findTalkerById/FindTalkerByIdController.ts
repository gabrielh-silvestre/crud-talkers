import { Request, Response } from 'express';

import { FindTalkerByIdUseCase } from './FindTalkerByIdUseCase';

class FindTalkerByIdController {
  constructor(private findByIdUseCase: FindTalkerByIdUseCase) {}

  handle = (req: Request, res: Response): Response => {
    const { id } = req.params;
    const { code, message, talker } = this.findByIdUseCase.execute(Number(id));

    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(talker);
  };
}

export { FindTalkerByIdController };
