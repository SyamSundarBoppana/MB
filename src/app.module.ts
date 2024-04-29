import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Flavour } from './flavours/entities/flavour.entity';
import { Items } from './allitems/entity/allitems.entity';
import { Category } from './category/entities/category.entity';
import { Shape } from './shape/entities/shape.entity';
import { AllitemsModule } from './allitems/allitems.module';
import { FlavoursModule } from './flavours/flavours.module';
import { CategoryModule } from './category/category.module';
import { ShapeModule } from './shape/shape.module';
import { TrendingModule } from './trending/trending.module';
import { Trending } from './trending/entities/trending.entity';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Flavour,Items,Category,Shape,Trending],
      synchronize: true,
      logging: true,
    }),
    AllitemsModule,
    FlavoursModule,
    CategoryModule,
    ShapeModule,
    TrendingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
