import { Blog } from '../entities/blog.entity';

const blogResponseSerializer = (blog: Blog): Blog => {
  blog.image = `${process.env.BACKEND_DOMAIN}/${blog.image}`;
  return blog;
};

export default blogResponseSerializer;
