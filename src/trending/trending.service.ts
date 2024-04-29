import { Injectable } from '@nestjs/common';
import { Trending } from './entities/trending.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BestSeller } from 'src/data';

@Injectable()
export class TrendingService {
  constructor(
    @InjectRepository(Trending)
    private trendingRepository: Repository<Trending>,
  ) {}

  findAll() {
    return this.trendingRepository.find();
  }

  findOne(id: number) {
    return this.trendingRepository.findOneBy({ id });
  }

  // addAll() {
  //   BestSeller.map((item)=>{
  //     const trending = new Trending()
  //     trending.name = item.name,
  //     trending.image = item.image,
  //     trending.rating = item.rating,
  //     trending.amount = item.amount,
  //     trending.quantity = item.quantity,
  //     trending.offer = item.offer
  //     console.log(typeof item.rating)
  //     return this.trendingRepository.save(trending);
  //   })
  // }
}
