import { Injectable } from '@nestjs/common';
import { Blog } from './blog.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BlogsService extends TypeOrmCrudService<Blog> {
  constructor(@InjectRepository(Blog) repo) {
    super(repo);
  }
}
