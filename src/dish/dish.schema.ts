
// Map giữa các thuộc tính của model và các thuộc tính của document trong MongoDB
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type DishDocument = Dish & Document;

// Schema: định nghĩa cấu trúc của document
@Schema()
export class Dish {
    @Prop({required: true})
    id: string;

    @Prop({})
    name: string;

    @Prop({})
    cover: string;

    @Prop({})
    price: number;

    @Prop({})
    time: number;

    @Prop({})
    maximumPOrder: number;

    @Prop({})
    restaurantID: string;

    @Prop({})
    status: string;
    

}

// Tạo ra một schema từ model
export const DishSchema = SchemaFactory.createForClass(Dish);
