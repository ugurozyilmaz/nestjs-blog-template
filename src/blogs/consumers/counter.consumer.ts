import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { BlogsService } from '../blogs.service';

@Processor('counter')
export class CounterProcessor {
  constructor(private readonly service: BlogsService) {}
  private readonly logger = new Logger(CounterProcessor.name);

  @Process('blog')
  handleTranscode(job: Job) {
    this.logger.debug('id=>', job.data.id);
    this.service.incrementCounter(job.data.id);
  }
}
