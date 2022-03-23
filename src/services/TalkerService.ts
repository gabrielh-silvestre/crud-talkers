import { TalkerModel } from '../model/TalkerModel';
import { isTalkerValid } from './validations/talkerValidations';

interface ITalker {
  name: string;
  age: number;
  id: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

class TalkerService {
  private talkersModel: TalkerModel;

  constructor(model: TalkerModel) {
    this.talkersModel = model;
  }

  getAll() {
    const talkers = this.talkersModel.getAll();

    return { code: 200, talkers };
  }

  getById(id: number) {
    const talker = this.talkersModel.getById(id);

    if (talker) {
      return { code: 200, talker };
    }

    return { code: 404, message: 'Pessoa palestrante não encontrada' };
  }

  create(talker: ITalker) {
    try {
      isTalkerValid(talker);
    } catch (err: any) {
      return { code: 400, message: err.message };
    }

    try {
      this.talkersModel.create(talker);
    } catch (err: any) {
      return { code: 500, message: err.message };
    }

    return { code: 201, talker };
  }

  update(id: string, talker: ITalker) {
    try {
      isTalkerValid(talker);
    } catch (err: any) {
      return { code: 401, message: err.message };
    }

    try {
      this.talkersModel.update(Number(id), talker);
    } catch (err: any) {
      return { code: 500, message: err.message };
    }

    return { code: 200, talker };
  }

  delete(id: string) {
    try {
      this.talkersModel.delete(Number(id));
    } catch (err: any) {
      return { code: 500, message: err.message };
    }

    return { code: 200 };
  }

  findByName(name: string) {
    const talkers = this.talkersModel.findByName(name);

    return { code: 200, talkers };
  }
}

export { TalkerService };
