import { Controller, Param } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedRequest,
} from '@nestjsx/crud';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.entity';
import { BlogPaginationInterceptor } from './interceptors/blog.pagination.interceptor';
import { BlogSingleInterceptor } from './interceptors/blog.single.interceptor';
@Crud({
  model: {
    type: Blog,
  },
  routes: {
    getManyBase: {
      interceptors: [BlogPaginationInterceptor],
    },
    getOneBase: {
      interceptors: [BlogSingleInterceptor],
    },
    createOneBase: {
      interceptors: [BlogSingleInterceptor],
    },
    updateOneBase: {
      interceptors: [BlogSingleInterceptor],
    },
  },
  query: {
    maxLimit: 10,
    alwaysPaginate: true,
  },
})
@Controller('blogs')
export class BlogsController implements CrudController<Blog> {
  constructor(public service: BlogsService) {}

  get base(): CrudController<Blog> {
    return this;
  }

  @Override('getOneBase')
  getOneAndDoStuff(@ParsedRequest() req: CrudRequest, @Param('id') id: string) {
    this.service.addCounter(id);
    return this.base.getOneBase(req);
  }
}
