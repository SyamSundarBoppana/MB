import { PartialType } from '@nestjs/swagger';
import { CreateTrendingDto } from './create-trending.dto';

export class UpdateTrendingDto extends PartialType(CreateTrendingDto) {}
