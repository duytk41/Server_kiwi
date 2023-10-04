

// service: là nơi chứa các hàm xử lý logic của ứng dụng
// tương tác với database thông qua repository

// Path: src/restaurant/restaurant.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { RestaurantGetResponseDTO } from './dto/restaurant_get_response.dto';

import { RestaurantInsertRequestDTO } from './dto/restaurant_insert_request.dto';
import { RestaurantInsertResponseDTO } from './dto/restaurant_insert_response.dto';

import { Restaurant, RestaurantDocument } from './restaurant.schema';

@Injectable()
export class RestaurantService {
    constructor(@InjectModel(Restaurant.name)
    private readonly restaurantModel: Model<RestaurantDocument>) { }

    // Thêm một restaurant mới
    async insertOne(requestDTO: RestaurantInsertRequestDTO): Promise<RestaurantInsertResponseDTO> {
        const restaurant = new this.restaurantModel(requestDTO);
        await restaurant.save();

        const responseDTO: RestaurantInsertResponseDTO = {
            status: true,
            message: "Insert restaurant successfully"
        };

        return responseDTO;
    }

    // Lấy thông tin của một restaurant
    async getOne(id: string): Promise<RestaurantGetResponseDTO> {
        const restaurant = await this.restaurantModel.findById(id);

        const responseDTO: RestaurantGetResponseDTO = {
            status: true,
            message: "Get restaurant successfully",
            data: restaurant
        };

        return responseDTO;
    }

    // Lấy thông tin của tất cả restaurant
    async getAll(): Promise<RestaurantGetResponseDTO> {
        const restaurants = await this.restaurantModel.find();

        const responseDTO: RestaurantGetResponseDTO = {
            status: true,
            message: "Get all restaurant successfully",
            data: restaurants
        };

        return responseDTO;
    }

    // Đăng nhập
    async login(restaurantname: string, password: string): Promise<RestaurantGetResponseDTO> {
        const restaurant = await this.restaurantModel.findOne({ restaurantname: restaurantname, password: password });

        const responseDTO: RestaurantGetResponseDTO = {
            status: true,
            message: "Login successfully",
            data: restaurant
        };

        return responseDTO;
    }

    // Đăng ký
    async register(requestDTO: RestaurantInsertRequestDTO): Promise<RestaurantInsertResponseDTO> {
        const restaurant = new this.restaurantModel(requestDTO);
        await restaurant.save();

        const responseDTO: RestaurantInsertResponseDTO = {
            status: true,
            message: "Register successfully"
        };

        return responseDTO;
    }

    // Cập nhật thông tin restaurant
    async update(requestDTO: RestaurantInsertRequestDTO): Promise<RestaurantInsertResponseDTO> {
        const restaurant = new this.restaurantModel(requestDTO);
        const restaurantOld = await this.restaurantModel.findOne({ restaurantname: restaurant.restaurantname });

        restaurant.password = restaurantOld.password;
        restaurant._id = restaurantOld._id;

        //đổi lại toàn bộ thông tin trừ restaurantname và mật khẩu của restaurant qua id hoặc restaurantname
        await this.restaurantModel.updateOne({ restaurantname: restaurant.restaurantname }, restaurant);

        const responseDTO: RestaurantInsertResponseDTO = {
            status: true,
            message: "Update restaurant successfully"
        };

        return responseDTO;
    }


}