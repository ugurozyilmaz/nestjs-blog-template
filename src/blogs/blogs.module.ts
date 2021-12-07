import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { Blog } from './blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Blog])],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
