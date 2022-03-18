import { Request, Response } from 'express';
import { TalkerService } from '../services/TalkerService';

class TalkerController {
  private talkerService: TalkerService;

  constructor( service: TalkerService) {
    this.talkerService = service;
  }

  getAllTalkers = (_req: Request, res: Response) => {
    const allTalkers = this.talkerService.getAll();

    return res.status(200).json(allTalkers);
  }
}

export { TalkerController };
