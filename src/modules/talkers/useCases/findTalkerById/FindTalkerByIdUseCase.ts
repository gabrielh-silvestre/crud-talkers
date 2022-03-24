import { ITalkerModel } from '../../interfaces';

class FindByIdUseCase {
  constructor(private talkersModel: ITalkerModel) {}

  execute(id: number) {
    const talker = this.talkersModel.getById(id);

    if (talker) {
      return { code: 200, talker };
    }

    return { code: 404, message: 'Pessoa palestrante não encontrada' };
  }
}

export { FindByIdUseCase };
