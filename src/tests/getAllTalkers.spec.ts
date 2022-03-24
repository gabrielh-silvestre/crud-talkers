import fs from 'fs/promises';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { app } from '../api/app';
import { talkers } from './mocks/allTalkers';

chai.use(chaiHttp);
const { expect } = chai;

describe('Test get all talkers feature', () => {
  before(() => {
    sinon
      .stub(fs, 'readFile')
      .returns(Promise.resolve(JSON.stringify(talkers)));
  });

  after(() => {
    sinon.restore();
  });

  describe('GET /talker should return all talkers', () => {
    it('should have status 200', async () => {
      const res = await chai.request(app).get('/talker');
      expect(res).to.have.status(200);
    });

    it('should return all talkers', async () => {
      const res = await chai.request(app).get('/talker');

      expect(res.body).to.be.an('array');
      expect(res.body).to.be.deep.equal(talkers);
    });
  });
});
