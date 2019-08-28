import { Controller, Get, Logger, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiResponse } from '@nestjs/swagger';
// import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {

    }

    @Get('')
    index() {
        return this.userService.findAll();
    }

    @Get(':id')
    async getUser(@Param('id') id) : Promise<User> {
        return await this.userService.find(id);
    }

    @Post('create')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() userData: User) {
        return this.userService.create(userData);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        return this.userService.update(userData);
    }
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.userService.delete(id);
    }

}
