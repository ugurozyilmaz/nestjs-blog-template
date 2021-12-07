import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { Blog } from './blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';
import { CounterProcessor } from './consumers/counter.consumer';

@Module({
  imports: [
    TypeOrmModule.forFeature([Blog]),
    BullModule.registerQueue({
      name: 'counter',
    }),
  ],
  controllers: [BlogsController],
  providers: [BlogsService, CounterProcessor],
})
export class BlogsModule {}
