import { Controller, Get, Param,Post } from '@nestjs/common';
import { AllitemsService } from './allitems.service';
import { ApiTags } from '@nestjs/swagger';
import { Items } from 'src/allitems/entity/allitems.entity';

@ApiTags('All Items')
@Controller('allitems')
export class AllitemsController {
  constructor(private readonly allItemsService: AllitemsService) {}

  @Get()
  getAllItems(): Promise<Items[]> {
    return this.allItemsService.findall();
  }

  @Get(':id')
  getItemById(@Param('id') id: number): Promise<Items> {
    return this.allItemsService.findById(id);
  }

  // @Post()
  // addAllItems(){
  //   return this.allItemsService.addAll()
  // }
}
