

// service: là nơi chứa các hàm xử lý logic của ứng dụng
// tương tác với database thông qua repository

// Path: src/dish/dish.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { DishGetResponseDTO } from './dto/dish_get_response.dto';

import { DishInsertRequestDTO } from './dto/dish_insert_request.dto';
import { DishInsertResponseDTO } from './dto/dish_insert_response.dto';

import { Dish, DishDocument } from './dish.schema';

@Injectable()
export class DishService {
    constructor(@InjectModel(Dish.name)
    private readonly dishModel: Model<DishDocument>) { }

    // Thêm một dish mới
    async insertOne(requestDTO: DishInsertRequestDTO): Promise<DishInsertResponseDTO> {
        const dish = new this.dishModel(requestDTO);
        await dish.save();

        const responseDTO: DishInsertResponseDTO = {
            status: true,
            message: "Insert dish successfully"
        };

        return responseDTO;
    }

    // Lấy thông tin của một dish
    async getOne(id: string): Promise<DishGetResponseDTO> {
        const dish = await this.dishModel.findById(id);

        const responseDTO: DishGetResponseDTO = {
            status: true,
            message: "Get dish successfully",
            data: dish
        };

        return responseDTO;
    }

    // Lấy thông tin của tất cả dish
    async getAll(): Promise<DishGetResponseDTO> {
        const dishs = await this.dishModel.find();

        const responseDTO: DishGetResponseDTO = {
            status: true,
            message: "Get all dish successfully",
            data: dishs
        };

        return responseDTO;
    }

    // Đăng nhập
    async login(dishname: string, password: string): Promise<DishGetResponseDTO> {
        const dish = await this.dishModel.findOne({ dishname: dishname, password: password });

        const responseDTO: DishGetResponseDTO = {
            status: true,
            message: "Login successfully",
            data: dish
        };

        return responseDTO;
    }

    // Đăng ký
    async register(requestDTO: DishInsertRequestDTO): Promise<DishInsertResponseDTO> {
        const dish = new this.dishModel(requestDTO);
        await dish.save();

        const responseDTO: DishInsertResponseDTO = {
            status: true,
            message: "Register successfully"
        };

        return responseDTO;
    }

    // Cập nhật thông tin dish
    async update(requestDTO: DishInsertRequestDTO): Promise<DishInsertResponseDTO> {
        const dish = new this.dishModel(requestDTO);
        const dishOld = await this.dishModel.findOne({ dishname: dish.dishname });

        dish.password = dishOld.password;
        dish._id = dishOld._id;

        //đổi lại toàn bộ thông tin trừ dishname và mật khẩu của dish qua id hoặc dishname
        await this.dishModel.updateOne({ dishname: dish.dishname }, dish);

        const responseDTO: DishInsertResponseDTO = {
            status: true,
            message: "Update dish successfully"
        };

        return responseDTO;
    }


}