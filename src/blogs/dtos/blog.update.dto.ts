import { IsOptional, IsString } from 'class-validator';

export class BlogUpdateDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly image: string;

  @IsOptional()
  @IsString()
  readonly content: string;

  @IsOptional()
  @IsString()
  readonly short_content: string;
}
