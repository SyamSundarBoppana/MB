import { Module } from '@nestjs/common';
import { TrendingService } from './trending.service';
import { TrendingController } from './trending.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trending } from './entities/trending.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Trending])],
  controllers: [TrendingController],
  providers: [TrendingService],
})
export class TrendingModule {}
