interface ITalker {
  name: string;
  age: number;
  id: number;
  talk: {
    watchedAt: string;
    rate: number;
  };
}

interface ITalkerModel {
  getAll(): ITalker[];
  getById(id: number): ITalker | undefined;
  create(talker: ITalker): void;
  update(id: number, talker: ITalker): void;
  delete(id: number): void;
  findByName(name: string): ITalker[];
}

export { ITalkerModel, ITalker };
