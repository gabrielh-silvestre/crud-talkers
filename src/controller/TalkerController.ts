import { Request, Response } from 'express';
import { TalkerService } from '../services/TalkerService';

class TalkerController {
  private talkerService: TalkerService;

  constructor(service: TalkerService) {
    this.talkerService = service;
  }

  getAllTalkers = (_req: Request, res: Response) => {
    const { code, talkers } = this.talkerService.getAll();

    return res.status(code).json(talkers);
  };

  getOneTalker = (req: Request, res: Response) => {
    const { id } = req.params;
    const { code, message, talker } = this.talkerService.getById(Number(id));

    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(talker);
  };
}

export { TalkerController };
