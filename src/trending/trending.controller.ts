import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrendingService } from './trending.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Trending/Best Seller/Recent View')
@Controller('trending')
export class TrendingController {
  constructor(private readonly trendingService: TrendingService) {}

  @Get()
  findAll() {
    return this.trendingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.trendingService.findOne(+id);
  }

  // @Post('addTrending')
  // allTrending(){
  //   return this.trendingService.addAll();
  // }

}
