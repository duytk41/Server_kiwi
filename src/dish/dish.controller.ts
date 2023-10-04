
// controller: là nơi xử lý các request từ client
// controller sẽ gọi đến service để xử lý logic

import { Controller, Get, Post, Body, Param, Query, Res, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { DishService } from './dish.service';

import { DishGetResponseDTO } from './dto/dish_get_response.dto';
import { DishGetRequestDTO } from './dto/dish_get_request.dto';
import { DishInsertRequestDTO } from './dto/dish_insert_request.dto';
import { DishInsertResponseDTO } from './dto/dish_insert_response.dto';

import { Dish } from './dish.entity';


// url: http://localhost:3000/dish
@Controller('dish')
export class DishController {
    constructor(private readonly dishService: DishService) { }

    // url: http://localhost:3000/dish/insert
    @Post('insert')
    async insertOne(@Body() body: DishInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.dishService.insertOne(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/dish/get/:id
    @Get('get/:id')
    async getOne(@Param('id') id: string, @Res() res: any) {
        try {
            const responseDTO = await this.dishService.getOne(id);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/dish/getAll
    @Get('getAll')
    async getAll(@Res() res: any) {
        try {
            const responseDTO = await this.dishService.getAll();
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/dish/login
    @Post('login')
    async login(@Body() body: DishGetRequestDTO, @Res() res: any) {
        try {
            const { dishname, password } = body;
            const responseDTO = await this.dishService.login(dishname, password);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/dish/register
    @Post('register')
    async register(@Body() body: DishInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.dishService.register(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/dish/update
    @Post('update')
    async update(@Body() body: DishInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.dishService.update(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }



}