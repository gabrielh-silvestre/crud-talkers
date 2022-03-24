import fs from 'fs/promises';
import crypto from 'crypto';
import { IRegister, IUser, IUserModel } from '../interfaces';

class LoginModel implements IUserModel {
  private users: IUser[];

  constructor() {
    this.read();
  }

  private parse(strData: string) {
    return JSON.parse(strData);
  }

  private stringfy(data: IUser[]) {
    return JSON.stringify(data);
  }

  private async read() {
    try {
      this.users = this.parse(await fs.readFile('login.json', 'utf8'));
    } catch (err) {
      console.log(err);
    }
  }

  private async write(newContent: string) {
    try {
      await fs.writeFile('login.json', newContent, 'utf8');
      this.read();
    } catch (err) {
      console.log(err);
    }
  }

  findUser(email: string) {
    return this.users.find((u) => u.email === email);
  }

  register({ email, password }: IRegister) {
    const token = crypto.randomBytes(8).toString('hex');
    const attUsers = [...this.users, { email, password, token }];

    this.write(this.stringfy(attUsers));

    return token;
  }

  findAll() {
    return this.users;
  }

  findByToken(token: string) {
    return this.users.find((u) => u.token === token);
  }
}

export { LoginModel };
