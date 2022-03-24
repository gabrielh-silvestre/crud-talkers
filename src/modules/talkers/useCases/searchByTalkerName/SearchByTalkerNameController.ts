import { Request, Response } from 'express';
import { SearchByTalkerNameUseCase } from './SearchByTalkerNameUseCase';

class SearchByTalkerNameController {
  constructor(private searchByTalkerNameUseCase: SearchByTalkerNameUseCase) {}

  handle = (req: Request, res: Response): Response => {
    const { q } = req.query;

    const useCaseResponse = this.searchByTalkerNameUseCase.execute(q as string);
    const { code, talkers } = useCaseResponse;

    return res.status(code).json(talkers);
  };
}

export { SearchByTalkerNameController };
