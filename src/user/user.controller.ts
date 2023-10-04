
// controller: là nơi xử lý các request từ client
// controller sẽ gọi đến service để xử lý logic

import { Controller, Get, Post, Body, Param, Query, Res, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';

import { UserGetResponseDTO } from './dto/user_get_response.dto';
import { UserGetRequestDTO } from './dto/user_get_request.dto';
import { UserInsertRequestDTO } from './dto/user_insert_request.dto';
import { UserInsertResponseDTO } from './dto/user_insert_response.dto';

import { User } from './user.entity';


// url: http://localhost:3000/user
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    // url: http://localhost:3000/user/insert
    @Post('insert')
    async insertOne(@Body() body: UserInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.userService.insertOne(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/user/get/:id
    @Get('get/:id')
    async getOne(@Param('id') id: string, @Res() res: any) {
        try {
            const responseDTO = await this.userService.getOne(id);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/user/getAll
    @Get('getAll')
    async getAll(@Res() res: any) {
        try {
            const responseDTO = await this.userService.getAll();
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/user/login
    @Post('login')
    async login(@Body() body: UserGetRequestDTO, @Res() res: any) {
        try {
            const { username, password } = body;
            const responseDTO = await this.userService.login(username, password);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/user/register
    @Post('register')
    async register(@Body() body: UserInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.userService.register(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/user/update
    @Post('update')
    async update(@Body() body: UserInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.userService.update(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }



}