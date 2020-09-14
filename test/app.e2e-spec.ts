import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import pagesSeed from '../src/seeder/data/pages.seed';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    return request(app.getHttpServer())
      .get('/seeder/reset')
      .expect(200);
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/pages')
      .expect(200)
      .expect(pagesSeed);
  });
});
