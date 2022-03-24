import { Request, Response } from 'express';

import { FindAllTalkerUseCase } from './FindAllTalkersUseCase';

class FindAllTalkerController {
  constructor(private findAllTalkerUseCase: FindAllTalkerUseCase) {}

  handle = (_req: Request, res: Response): Response => {
    const { code, talkers } = this.findAllTalkerUseCase.execute();

    return res.status(code).json(talkers);
  };
}

export { FindAllTalkerController };
