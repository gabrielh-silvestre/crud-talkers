import fs from 'fs/promises';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { app } from '../api/app';
import { talkers } from './mocks/allTalkers';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test get talker by ID feature', () => {
  before(() => {
    sinon
      .stub(fs, 'readFile')
      .returns(Promise.resolve(JSON.stringify(talkers)));
  });

  after(() => {
    sinon.restore();
  });

  describe('GET /talker/:id should return a talker', () => {
    it('should have status 200', async () => {
      const res = await chai.request(app).get('/talker/1');
      expect(res).to.have.status(200);
    });

    it('should return a talker', async () => {
      const res = await chai.request(app).get('/talker/1');

      expect(res.body).to.be.an('object');
      expect(res.body).to.be.deep.equal(talkers[0]);
    });
  });

  describe('GET /talker/:id should return a error', () => {
    it('should have status 404', async () => {
      const res = await chai.request(app).get('/talker/6');
      expect(res).to.have.status(404);
    });

    it('should return a error message "Pessoa palestrante não encontrada"', async () => {
      const res = await chai.request(app).get('/talker/6');

      expect(res.body).to.be.an('object');
      expect(res.body.message).to.be.deep.equal(
        'Pessoa palestrante não encontrada'
      );
    });
  });
});
