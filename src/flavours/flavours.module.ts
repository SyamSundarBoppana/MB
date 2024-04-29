import { Module } from '@nestjs/common';
import { FlavoursService } from './flavours.service';
import { FlavoursController } from './flavours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavour } from 'src/flavours/entities/flavour.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Flavour])],
  controllers: [FlavoursController],
  providers: [FlavoursService],
})
export class FlavoursModule {}
