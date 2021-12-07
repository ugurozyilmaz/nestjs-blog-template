import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class BlogsService extends TypeOrmCrudService<Blog> {
  constructor(
    @InjectQueue('counter') private counterQueue: Queue,
    @InjectRepository(Blog) repo,
  ) {
    super(repo);
  }

  async incrementCounter(id) {
    const blog = await this.repo.findOne({ id });
    if (!blog) return;
    blog.view_count++;
    await blog.save();
  }

  async addCounter(id) {
    this.counterQueue.add('blog', { id });
  }
}
