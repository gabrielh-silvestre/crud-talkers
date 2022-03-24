import { ITalkerModel } from '../../interfaces';

class SearchByTalkerNameUseCase {
  constructor(private talkersModel: ITalkerModel) {}

  execute(name: string) {
    const talkers = this.talkersModel.findByName(name);

    return { code: 200, talkers };
  }
}

export { SearchByTalkerNameUseCase };
