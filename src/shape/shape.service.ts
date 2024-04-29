import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shape } from './entities/shape.entity';

@Injectable()
export class ShapeService {
  constructor(
    @InjectRepository(Shape)
    private shapeRepository:Repository<Shape>
  ){}

  findAll() {
    return this.shapeRepository.find({
      relations:{
        items:true,
      }
    })
  }

  findOne(id: number) {
    return this.shapeRepository.findOne({
      where:{
        id:id
      },
      relations:{
        items:true,
      }
    })
  }

  
}
