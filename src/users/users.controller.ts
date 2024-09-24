import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //Get /users or users?role=value : here we query parameters
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get(':id') //GET /users/id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') //DELETE /users/id
  delete(@Param('id') id: string) {
    return { id };
  }
}
