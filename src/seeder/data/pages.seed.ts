import languageSeed from './language.seed';
import usersSeed from './users.seed';

export default [
  {
    id: 'b69ed738-5e02-47f4-8180-a1dd4611b7f7',
    title: 'Test Page 1',
    content: 'Lorem ipsum...',
    createdAt: '2020-09-12T17:31:46.550Z',
    updatedAt: '2020-09-13T17:31:46.550Z',
    language: languageSeed[0],
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/page1'
  },
  {
    id: '350feb92-7be8-4df3-812e-cc8a491c1344',
    title: 'Test Page 2',
    content: '...dolor sit amet',
    createdAt: '2020-09-13T17:31:46.550Z',
    updatedAt: '2020-09-14T19:32:46.550Z',
    language: languageSeed[0],
    isPublic: true,
    author: usersSeed[0],
    editor: null,
    path: '/page2'
  },
];
