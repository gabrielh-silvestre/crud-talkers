import { TalkerModel } from '../model/TalkerModel';

class TalkerService {
  private talkersModel: TalkerModel;

  constructor(model: TalkerModel) {
    this.talkersModel = model;
  }

  getAll() {
    return this.talkersModel.getAll();
  }
}

export { TalkerService };
