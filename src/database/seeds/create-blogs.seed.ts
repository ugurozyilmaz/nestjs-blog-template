import { Factory, Seeder } from 'typeorm-seeding';
import { Blog } from '../../blogs/blog.entity';

export default class CreateBlogs implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Blog)().createMany(50);
  }
}
