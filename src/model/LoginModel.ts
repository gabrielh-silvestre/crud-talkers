import fs from 'fs/promises';
import crypto from 'crypto';

interface IUserRegister {
  email: string;
  password: string;
}

interface IUsers {
  email: string;
  password: string;
  token: string;
}

class LoginModel {
  private users: IUsers[];

  constructor() {
    this.read();
  }

  private parse(strData: string) {
    return JSON.parse(strData);
  }

  private stringfy(data: IUsers[]) {
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

  register({ email, password }: IUserRegister) {
    const token = crypto.randomBytes(8).toString('hex');
    const attUsers = [...this.users, { email, password, token }];

    this.write(this.stringfy(attUsers));

    return token;
  }
}

export { LoginModel };
