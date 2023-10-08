
// Map giữa các thuộc tính của model và các thuộc tính của document trong MongoDB
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type UserDocument = User & Document;

// Schema: định nghĩa cấu trúc của document
@Schema()
export class User {
    @Prop({})
    id: string;

    @Prop({})
    name: string;

    @Prop({ })
    dateOfBirth: string;

    @Prop({ required: true , unique: true})
    username: string;

    @Prop({required: true})
    password: string;

    @Prop({})
    phone: string; // Số điện thoại

    @Prop({})
    avatar: string; // ảnh đại diện lấy bằng url

    @Prop({})
    email: string;

    @Prop({})
    address: string;

    @Prop({})
    dateCreated: string; // Ngày tạo tài khoản

    @Prop({})
    searchHistory: string[]; // Lịch sử tìm kiếm

    @Prop({})
    orders: string[]; // Lịch sử đặt hàng

    @Prop({})
    cart: string[]; // Giỏ hàng
}

// Tạo ra một schema từ model
export const UserSchema = SchemaFactory.createForClass(User);
