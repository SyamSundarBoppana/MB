import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Items } from 'src/allitems/entity/allitems.entity';
import { items } from 'src/data';
import { Repository } from 'typeorm';

@Injectable()
export class AllitemsService {
  constructor(
    @InjectRepository(Items)
    private allItemsRepository: Repository<Items>,
  ) {}

  findall() {
    return this.allItemsRepository.find({
      relations: {
        flavour: true,
        category: true,
        shape: true,
      },
    });
  }

  findById(id: number) {
    return this.allItemsRepository.findOne({
      where: { id: id },
      relations: {
        flavour: true,
        category: true,
        shape: true,
      },
    });
  }

  // addAll() {
  //   items.forEach((item) => {
  //     const newItem: any = new Items();
  //     (newItem.name = item.name),
  //       (newItem.image = item.image),
  //       (newItem.rating = item.rating),
  //       (newItem.amount = item.amount),
  //       (newItem.quantity = item.quantity),
  //       (newItem.offer = item.offer),
  //       (newItem.flavour = item.flavour_Id),
  //       (newItem.category = item.category_Id),
  //       (newItem.shape = item.shape_Id),
  //       this.allItemsRepository.save(newItem);
  //   });
  // }
}
