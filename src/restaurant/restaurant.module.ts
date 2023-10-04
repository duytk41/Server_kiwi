
// module: là nơi chứa các module của ứng dụng

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { RestaurantSchema, Restaurant } from './restaurant.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Restaurant.name, schema: RestaurantSchema }
        ])
    ],
    controllers: [RestaurantController],
    providers: [RestaurantService]
})

export class RestaurantModule { }
