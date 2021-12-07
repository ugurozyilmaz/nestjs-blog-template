import { define } from 'typeorm-seeding';
import * as Faker from 'faker';
import { Blog } from '../../blogs/blog.entity';

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

define(Blog, (faker: typeof Faker) => {
  const blog = new Blog();
  blog.title = faker.lorem.word(between(2, 5));
  blog.image = `images/${faker.lorem.word(between(2, 5))}.jpg`;
  blog.content = faker.lorem.paragraph(between(50, 60));
  blog.short_content = faker.lorem.word(between(15, 20));
  return blog;
});
