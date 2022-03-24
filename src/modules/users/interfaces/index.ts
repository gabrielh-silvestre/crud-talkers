interface IRegister {
  email: string;
  password: string;
}

interface IUser {
  email: string;
  password: string;
  token: string;
}

interface IUserModel {
  findUser(email: string): IUser | undefined;
  register(user: IRegister): string;
  findAll(): IUser[];
  findByToken(token: string): IUser | undefined;
}

export { IUserModel, IUser, IRegister };
