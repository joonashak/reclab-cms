/**
 * API models created from seeding data.
 */
import pagesSeed from '../../src/seeder/data/pages.seed';

export const apiPages = pagesSeed.map(page => {
  const { author, ...rest } = page;
  const { id, username } = author;
  return { ...rest, author: { id, username } };
});
