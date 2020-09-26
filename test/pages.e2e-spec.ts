import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import pagesSeed from '../src/seeder/data/pages.seed';

// Remove fields that are not returned by the API.
const pages = pagesSeed.map(page => {
  const { author, ...rest } = page;
  const { id, username } = author;
  return { ...rest, author: { id, username } };
});

describe('/pages', () => {
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
      .expect(pages);
  });
});
