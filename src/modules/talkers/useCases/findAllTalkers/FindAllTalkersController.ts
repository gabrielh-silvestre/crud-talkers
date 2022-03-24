import { Request, Response } from 'express';

import { FindAllTalkerUseCase } from './FindAllTalkersUseCase';

class FindAllTalkerController {
  constructor(private talkerService: FindAllTalkerUseCase) {}

  handle = (_req: Request, res: Response) => {
    const { code, talkers } = this.talkerService.execute();

    return res.status(code).json(talkers);
  };
}

export { FindAllTalkerController };
