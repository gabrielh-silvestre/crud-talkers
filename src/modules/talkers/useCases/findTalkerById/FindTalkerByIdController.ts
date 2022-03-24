import { Request, Response } from 'express';

import { FindByIdUseCase } from './FindTalkerByIdUseCase';

class FindByIdController {
  constructor(private talkerService: FindByIdUseCase) {}

  handle = (req: Request, res: Response): Response => {
    const { id } = req.params;
    const { code, message, talker } = this.talkerService.execute(Number(id));

    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(talker);
  };
}

export { FindByIdController };
