import { isTalkerValid } from '../../../../validations/talkerValidations';
import { ITalker, ITalkerModel } from '../../interfaces';

interface IRequest {
  name: string;
  age: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

class CreateTalkerUseCase {
  constructor(private talkersModel: ITalkerModel) {}

  execute(talker: IRequest) {
    try {
      isTalkerValid(talker);
    } catch (err: any) {
      return { code: 400, message: err.message };
    }

    const nextId = Math
      .max(...this.talkersModel.getAll().map(({ id }) => id)) + 1;

    const newTalker = {
      ...talker,
      id: nextId,
    };

    try {
      this.talkersModel.create(newTalker);
    } catch (err: any) {
      return { code: 500, message: err.message };
    }

    return { code: 201, talker: newTalker };
  }
}

export { CreateTalkerUseCase };
