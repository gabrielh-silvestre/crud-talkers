import { ITalkerModel } from '../../interfaces';

class DeleteTalkerUseCase {
  constructor(private talkersModel: ITalkerModel) {}

  execute(id: string) {
    try {
      this.talkersModel.delete(Number(id));
    } catch (err: any) {
      return { code: 500, message: err.message };
    }

    return { code: 200 };
  }
}

export { DeleteTalkerUseCase };
