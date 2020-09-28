import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { expect } from 'chai';
import initializeApp from './utils/initializeApp';

describe('/auth/login', () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initializeApp();
  });

  it('Can login with valid credentials.', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'admin', password: '1234' })
      .expect(201);

    expect(res.body).to.have.property('accessToken');
  });

  afterEach(() => {
    app.close();
  });
});
