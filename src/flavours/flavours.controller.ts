import { Controller, Get, Param} from '@nestjs/common';
import { FlavoursService } from './flavours.service';

import { ApiTags } from '@nestjs/swagger';

@ApiTags('Flavour')
@Controller('flavour')
export class FlavoursController {
  constructor(private readonly flavoursService: FlavoursService) {}

  @Get()
  findAll() {
    return this.flavoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flavoursService.findOne(+id);
  }

}
