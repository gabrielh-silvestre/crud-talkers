import { isTalkerValid } from '../../../../validations/talkerValidations';
import { ITalkerModel } from '../../interfaces';

interface IRequest {
  name: string;
  age: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

class UpdateTalkerUseCase {
  constructor(private talkersModel: ITalkerModel) {}

  execute(id: string, talker: IRequest) {
    try {
      isTalkerValid(talker);
    } catch (err: any) {
      return { code: 401, message: err.message };
    }

    const updated = {
      ...talker,
      id: Number(id),
    };

    try {
      this.talkersModel.update(Number(id), updated);
    } catch (err: any) {
      return { code: 500, message: err.message };
    }

    return { code: 200, talker };
  }
}

export { UpdateTalkerUseCase };
