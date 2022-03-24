import { ITalkerModel } from '../../interfaces';

class FindAllTalkerUseCase {
  constructor(private talkersModel: ITalkerModel) {}

  execute() {
    const talkers = this.talkersModel.getAll();

    return { code: 200, talkers };
  }
}

export { FindAllTalkerUseCase };
