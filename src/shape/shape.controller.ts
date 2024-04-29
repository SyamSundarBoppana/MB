import { Controller, Get, Param } from '@nestjs/common';
import { ShapeService } from './shape.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Shape')
@Controller('shape')
export class ShapeController {
  constructor(private readonly shapeService: ShapeService) {}

  @Get()
  findAll() {
    return this.shapeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.shapeService.findOne(id);
  }
}
