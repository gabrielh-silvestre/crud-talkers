import { TalkerModel } from '../model/TalkerModel';

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
}

export { TalkerService };
