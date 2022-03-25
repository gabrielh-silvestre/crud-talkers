import fs from 'fs/promises';
import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';

import { app } from '../api/app';

import { talkers } from './mocks/allTalkers';

chai.use(chaiHttp);
const { expect } = chai;

const FAKE_USER = {
  email: 'user@user.com',
  password: '123456',
  token: '123456789',
};

describe('Test new user register', () => {
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
    describe('POST /user/register', () => {
      it('should have status 201', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ email: 'teste@teste.com', password: '123456' });

        expect(res).to.have.status(201);
      });

      it('should return a token', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ email: 'teste@teste.com', password: '123456' });

        expect(res.body).to.have.property('token');
      });
    });
  });

  describe('Fail cases', () => {
    describe('POST /user/register without email', () => {
      it('should have status 400', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ password: '123456' });

        expect(res).to.have.status(400);
      });

      it('should return an error message: "O campo "email" é obrigatório"', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ password: '123456' });

        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.equal('O campo "email" é obrigatório');
      });
    });

    describe('POST /user/register without password', () => {
      it('should have status 400', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ email: 'teste@teste.com' });

        expect(res).to.have.status(400);
      });

      it('should return an error message: "O campo "password" é obrigatório"', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ email: 'teste@teste.com' });

        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.equal(
          'O campo "password" é obrigatório'
        );
      });
    });

    describe('POST /taler with invalid password', () => {
      it('should have status 400', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ email: 'teste@teste.com', password: '123' });

        expect(res).to.have.status(400);
      });

      it('should return an error message: "O "password" deve ter pelo menos 6 caracteres"', async () => {
        const res = await chai
          .request(app)
          .post('/login/register')
          .send({ email: 'teste@teste.com', password: '123' });

        expect(res.body).to.have.property('message');
        expect(res.body.message).to.be.equal(
          'O "password" deve ter pelo menos 6 caracteres'
        );
      });
    });

    // describe('POST /user/register with an email already use', () => {
    //   it('should have status 409', async () => {
    //     const res = await chai
    //       .request(app)
    //       .post('/login/register')
    //       .send({ email: 'use@use.com', password: '123456' });

    //     expect(res).to.have.status(409);
    //   });

    //   it('should return an error message: "Email já cadastrado"', async () => {
    //     const res = await chai
    //       .request(app)
    //       .post('/login/register')
    //       .send({ email: 'use@use.com', password: '123456' });

    //     expect(res.body).to.have.property('message');
    //     expect(res.body.message).to.be.equal('Email já cadastrado');
    //   });
    // });
  });
});
