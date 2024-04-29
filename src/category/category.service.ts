import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';


@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>){}

  findAll() {
    return this.categoryRepository.find({
      relations:{
        items:true,
      }
    })
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({
      where:{id:id},
      relations:{
        items:true,
      }
    })
  }

  
}
