import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import blogResponseSerializer from './blog-response.serializer';

export interface Response<T> {
  data: T;
}

@Injectable()
export class BlogPaginationInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) =>
        data.data.map((item) => {
          item = blogResponseSerializer(item);
          return item;
        }),
      ),
    );
  }
}
