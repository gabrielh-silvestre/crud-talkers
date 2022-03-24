import { Request, Response } from 'express';
import { TalkerService } from '../services/TalkerService';

interface ITalker {
  name: string;
  age: number;
  id: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

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

  createTalker = (req: Request, res: Response) => {
    const { name, age, talk } = req.body;
    const newTalker = { name, age, talk };

    const { code, message, talker } = this.talkerService.create(
      newTalker as ITalker
    );

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(talker);
  };

  updateTalker = (req: Request, res: Response) => {
    const { name, age, talk } = req.body;
    const { id } = req.params;

    const attTalker = { name, age, talk };

    const { code, message, talker } = this.talkerService.update(
      id,
      attTalker as ITalker
    );

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(talker);
  };

  deleteTalker = (req: Request, res: Response) => {
    const { id } = req.params;

    const { code, message } = this.talkerService.delete(id);

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).end();
  };

  searchByName = (req: Request, res: Response) => {
    const { q } = req.query;
    const { code, talkers } = this.talkerService.findByName(q as string);

    return res.status(code).json(talkers);
  }
}

export { TalkerController };
