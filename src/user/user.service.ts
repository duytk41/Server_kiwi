

// service: là nơi chứa các hàm xử lý logic của ứng dụng
// tương tác với database thông qua repository

// Path: src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { UserGetResponseDTO } from './dto/user_get_response.dto';

import { UserInsertRequestDTO } from './dto/user_insert_request.dto';
import { UserInsertResponseDTO } from './dto/user_insert_response.dto';

import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name)
    private readonly userModel: Model<UserDocument>) { }

    // Thêm một user mới
    async insertOne(requestDTO: UserInsertRequestDTO): Promise<UserInsertResponseDTO> {
        const user = new this.userModel(requestDTO);
        await user.save();

        const responseDTO: UserInsertResponseDTO = {
            status: true,
            message: "Insert user successfully"
        };

        return responseDTO;
    }

    // Lấy thông tin của một user
    async getOne(id: string): Promise<UserGetResponseDTO> {
        const user = await this.userModel.findById(id);

        const responseDTO: UserGetResponseDTO = {
            status: true,
            message: "Get user successfully",
            data: user
        };

        return responseDTO;
    }

    // Lấy thông tin của tất cả user
    async getAll(): Promise<UserGetResponseDTO> {
        const users = await this.userModel.find();

        const responseDTO: UserGetResponseDTO = {
            status: true,
            message: "Get all user successfully",
            data: users
        };

        return responseDTO;
    }

    // Đăng nhập
    async login(username: string, password: string): Promise<UserGetResponseDTO> {
        const user = await this.userModel.findOne({ username: username, password: password });

        const responseDTO: UserGetResponseDTO = {
            status: true,
            message: "Login successfully",
            data: user
        };

        return responseDTO;
    }

    // Đăng ký
    async register(requestDTO: UserInsertRequestDTO): Promise<UserInsertResponseDTO> {
        const user = new this.userModel(requestDTO);
        await user.save();

        const responseDTO: UserInsertResponseDTO = {
            status: true,
            message: "Register successfully"
        };

        return responseDTO;
    }

    // Cập nhật thông tin user
    async update(requestDTO: UserInsertRequestDTO): Promise<UserInsertResponseDTO> {
        const user = new this.userModel(requestDTO);
        const userOld = await this.userModel.findOne({ username: user.username });

        user.password = userOld.password;
        user._id = userOld._id;

        //đổi lại toàn bộ thông tin trừ username và mật khẩu của user qua id hoặc username
        await this.userModel.updateOne({ username: user.username }, user);

        const responseDTO: UserInsertResponseDTO = {
            status: true,
            message: "Update user successfully"
        };

        return responseDTO;
    }


}