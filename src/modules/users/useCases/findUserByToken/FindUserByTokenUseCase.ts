import { IUserModel } from '../../interfaces';

class FindUserByTokenUseCase {
  constructor(private userModel: IUserModel) {}

  execute(token: string) {
    const user = this.userModel.findByToken(token);

    if (user) return { code: 200 };
    return { code: 404, message: 'Falha ao autenticar' };
  }
}

export { FindUserByTokenUseCase };
