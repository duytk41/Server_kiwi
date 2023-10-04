
// controller: là nơi xử lý các request từ client
// controller sẽ gọi đến service để xử lý logic

import { Controller, Get, Post, Body, Param, Query, Res, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

import { RestaurantGetResponseDTO } from './dto/restaurant_get_response.dto';
import { RestaurantGetRequestDTO } from './dto/restaurant_get_request.dto';
import { RestaurantInsertRequestDTO } from './dto/restaurant_insert_request.dto';
import { RestaurantInsertResponseDTO } from './dto/restaurant_insert_response.dto';

import { Restaurant } from './restaurant.entity';


// url: http://localhost:3000/restaurant
@Controller('restaurant')
export class RestaurantController {
    constructor(private readonly restaurantService: RestaurantService) { }

    // url: http://localhost:3000/restaurant/insert
    @Post('insert')
    async insertOne(@Body() body: RestaurantInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.restaurantService.insertOne(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/restaurant/get/:id
    @Get('get/:id')
    async getOne(@Param('id') id: string, @Res() res: any) {
        try {
            const responseDTO = await this.restaurantService.getOne(id);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/restaurant/getAll
    @Get('getAll')
    async getAll(@Res() res: any) {
        try {
            const responseDTO = await this.restaurantService.getAll();
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/restaurant/login
    @Post('login')
    async login(@Body() body: RestaurantGetRequestDTO, @Res() res: any) {
        try {
            const { restaurantname, password } = body;
            const responseDTO = await this.restaurantService.login(restaurantname, password);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/restaurant/register
    @Post('register')
    async register(@Body() body: RestaurantInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.restaurantService.register(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }

    // url: http://localhost:3000/restaurant/update
    @Post('update')
    async update(@Body() body: RestaurantInsertRequestDTO, @Res() res: any) {
        try {
            const responseDTO = await this.restaurantService.update(body);
            return res.status(HttpStatus.OK).json(responseDTO);
        } catch (error) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
    }



}