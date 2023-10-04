
// module: là nơi chứa các module của ứng dụng

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { DishSchema, Dish } from './dish.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Dish.name, schema: DishSchema }
        ])
    ],
    controllers: [DishController],
    providers: [DishService]
})

export class DishModule { }
