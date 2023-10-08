
// Map giữa các thuộc tính của model và các thuộc tính của document trong MongoDB
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type RestaurantDocument = Restaurant & Document;

// Schema: định nghĩa cấu trúc của document
@Schema()
export class Restaurant {
    // ID
    // name
    // cover
    // time
    // userID
    // dateCreated
    // status

    @Prop({required: true})
    id: string;

    @Prop({})
    name: string;

    @Prop({})
    cover: string;

    @Prop({})
    time: number;

    @Prop({})
    userID: string;

    @Prop({})
    dateCreated: string;

    @Prop({})
    status: string;
    
}

// Tạo ra một schema từ model
export const RestaurantSchema = SchemaFactory.createForClass(Restaurant);
