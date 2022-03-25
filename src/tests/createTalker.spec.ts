import fs from 'fs/promises';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { app } from '../api/app';
import { talkers } from './mocks/allTalkers';
import { registeredUser } from './mocks/registeredUser';

chai.use(chaiHttp);
const { expect } = chai;
const [user] = registeredUser;

const newTalker = {
  name: 'John Doe',
  age: 30,
  talk: {
    watchedAt: '01/01/2022',
    rate: 5,
  },
};

describe('Test create talker', () => {
  before(() => {
    sinon
      .stub(fs, 'readFile')
      .returns(Promise.resolve(JSON.stringify(talkers)));

    sinon.stub(fs, 'writeFile').returns(Promise.resolve());
  });

  after(() => {
    sinon.restore();
  });

  describe('Success case', () => {
    describe('POST /talker', () => {
      it('should have status 201', async () => {
        const res = await chai
          .request(app)
          .post('/talker')
          .set({ Authorization: user.token })
          .send(newTalker);

        expect(res).to.have.status(201);
      });

      it('should return the new talker with id', async () => {
        const res = await chai
          .request(app)
          .post('/talker')
          .set({ Authorization: user.token })
          .send(newTalker);

        expect(res.body).to.have.property('id');
        expect(res.body.name).to.be.equal(newTalker.name);
        expect(res.body.age).to.be.equal(newTalker.age);
        expect(res.body.talk.watchedAt).to.be.equal(newTalker.talk.watchedAt);
        expect(res.body.talk.rate).to.be.equal(newTalker.talk.rate);
      });

      it('should retrun a auto incremental id', async () => {
        const res = await chai
          .request(app)
          .post('/talker')
          .set({ Authorization: user.token })
          .send(newTalker);

        expect(res.body.id).to.be.equal(talkers.length + 1);
      });
    });
  });

  describe('Fail cases', () => {
    describe('Invalid talker name', () => {
      describe('POST /talker without name', () => {
        const newTalkerWithoutName = {
          age: 30,
          talk: {
            watchedAt: '01/01/2022',
            rate: 5,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutName);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "name" é obrigatório"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutName);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal('O campo "name" é obrigatório');
        });
      });

      describe('POST /talker with name with less than 3 characters', () => {
        const newTalkerShortName = {
          name: 'Jo',
          age: 30,
          talk: {
            watchedAt: '01/01/2022',
            rate: 5,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerShortName);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "name" deve ter pelo menos 3 caracteres"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerShortName);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "name" deve ter pelo menos 3 caracteres'
          );
        });
      });
    });

    describe('Invalid talker age', () => {
      describe('POST /talker without age', () => {
        const newTalkerWithoutAge = {
          name: 'John Doe',
          talk: {
            watchedAt: '01/01/2022',
            rate: 5,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutAge);

          expect(res).to.have.status(400);
        });

        it('should return a message: O campo "age" é obrigatório', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutAge);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal('O campo "age" é obrigatório');
        });
      });

      describe('POST /talker with age with less than 18', () => {
        const newMinorTalker = {
          name: 'John Doe',
          age: 17,
          talk: {
            watchedAt: '01/01/2022',
            rate: 5,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newMinorTalker);

          expect(res).to.have.status(400);
        });

        it('should return a message: "A pessoa palestrante deve ser maior de idade"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newMinorTalker);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'A pessoa palestrante deve ser maior de idade'
          );
        });
      });
    });

    describe('Invalid talker talk', () => {
      describe('POST /talker without talk', () => {
        const newTalkerWithoutTalk = {
          name: 'John Doe',
          age: 30,
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutTalk);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutTalk);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios'
          );
        });
      });

      describe('POST /talker with talk without watchedAt', () => {
        const newTalkerWithoutWatchedAt = {
          name: 'John Doe',
          age: 30,
          talk: {
            rate: 5,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutWatchedAt);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutWatchedAt);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios'
          );
        });
      });

      describe('POST /talker with talk without rate', () => {
        const newTalkerWithoutRate = {
          name: 'John Doe',
          age: 30,
          talk: {
            watchedAt: '01/01/2022',
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutRate);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithoutRate);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios'
          );
        });
      });

      describe('POST /talker with talk with rate less than 1', () => {
        const newTalkerWithRateLessThan1 = {
          name: 'John Doe',
          age: 30,
          talk: {
            watchedAt: '01/01/2022',
            rate: 0,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithRateLessThan1);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "rate" deve ser um inteiro de 1 à 5"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithRateLessThan1);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "rate" deve ser um inteiro de 1 à 5'
          );
        });
      });

      describe('POST /talker with talk with rate greater than 5', () => {
        const newTalkerWithRateGreaterThan5 = {
          name: 'John Doe',
          age: 30,
          talk: {
            watchedAt: '01/01/2022',
            rate: 6,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithRateGreaterThan5);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "rate" deve ser um inteiro de 1 à 5"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithRateGreaterThan5);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "rate" deve ser um inteiro de 1 à 5'
          );
        });
      });

      describe('POST /talker with talk with watchedAt in wrong format', () => {
        const newTalkerWithWatchedAtInWrongFormat = {
          name: 'John Doe',
          age: 30,
          talk: {
            watchedAt: '2022-01-01',
            rate: 5,
          },
        };

        it('should have status 400', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithWatchedAtInWrongFormat);

          expect(res).to.have.status(400);
        });

        it('should return a message: "O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', async () => {
          const res = await chai
            .request(app)
            .post('/talker')
            .set({ Authorization: user.token })
            .send(newTalkerWithWatchedAtInWrongFormat);

          expect(res.body).to.have.property('message');
          expect(res.body.message).to.be.equal(
            'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"'
          );
        });
      });
    });
  });
});
