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

  private stringfy(data: ITalker[]) {
    return JSON.stringify(data);
  }

  private async read() {
    try {
      this.talkers = this.parse(await fs.readFile('talker.json', 'utf8'));
    } catch (err) {
      console.log(err);
      return "Can't read talker.json";
    }
  }

  private async write(newContent: string) {
    try {
      await fs.writeFile('talker.json', newContent, 'utf8');
      this.read();
    } catch (err) {
      console.log(err);
    }
  }

  getAll() {
    return this.talkers;
  }

  getById(id: number) {
    return this.talkers.find((t) => t.id === id);
  }

  create(talker: ITalker) {
    const talkers = [...this.talkers, talker];

    this.write(this.stringfy(talkers));
  }
}

export { TalkerModel };
