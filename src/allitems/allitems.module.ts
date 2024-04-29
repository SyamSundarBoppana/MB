import { Module } from '@nestjs/common';
import { AllitemsController } from './allitems.controller';
import { AllitemsService } from './allitems.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Items } from 'src/allitems/entity/allitems.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Items])],
  controllers: [AllitemsController],
  providers: [AllitemsService]
})
export class AllitemsModule {}
