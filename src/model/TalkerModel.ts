import fs from 'fs/promises';

interface ITalker {
  name: string;
  age: number;
  id: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

class TalkerModel {
  talkers: ITalker[];

  constructor() {
    this.read();
  }

  private parse(strData: string) {
    return JSON.parse(strData);
  }

  private async read() {
    try {
      this.talkers = this.parse(await fs.readFile('talker.json', 'utf8'));
    } catch (err) {
      console.log(err);
      return "Can't read talker.json";
    }
  }

  getAll() {
    return this.talkers;
  }

  getById(id: number) {
    return this.talkers.find((t) => t.id === id);
  }
}

export { TalkerModel };
