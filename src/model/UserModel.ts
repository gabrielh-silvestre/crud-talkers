import fs from 'fs/promises';

interface IUser {
  email: string;
  password: string;
  token: string;
}

class UserModel {
  private users: IUser[];

  constructor() {
    this.read();
  }

  private parse(strData: string) {
    return JSON.parse(strData);
  }

  private async read() {
    try {
      this.users = this.parse(await fs.readFile('login.json', 'utf8'));
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return this.users;
  }

  findByToken(token: string) {
    return this.users.find((u) => u.token === token);
  }
}

export { UserModel };
