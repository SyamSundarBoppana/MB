import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Flavour } from 'src/flavours/entities/flavour.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlavoursService {
  constructor(
    @InjectRepository(Flavour)
    private readonly flavourRepository: Repository<Flavour>,
  ) {}

  findAll() {
    return this.flavourRepository.find({
      relations: {
        items: true,
      },
    });
  }

  findOne(id: number) {
    return this.flavourRepository.findOne({
      where: { id: id },
      relations: {
        items: {
          flavour: true,
        },
      },
    });
  }
}
