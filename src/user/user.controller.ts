import { 
    Body, 
    Controller, 
    Delete, 
    Get, 
    HttpStatus, 
    Param, 
    Post, 
    Put,
    Res 
  } from '@nestjs/common'; 
  import { 
    ApiInternalServerErrorResponse, 
    ApiOperation, 
    ApiParam, 
    ApiTags, 
  } from '@nestjs/swagger'; 
  import { User } from './user.models'; 
  import { UsersService } from './user.services'; 
  import { UserDTO } from './user.dto';
   
  @ApiTags('users') 
  @Controller('users') 
  export class UsersController { 
    constructor(private userService: UsersService) {} 
    @Get() 
    findAll(): Promise<User[]> { 
      return this.userService.findAll(); 
    } 
    @Get(':id') 
    @ApiParam({ name: 'id' }) 
    findOne(@Param() params): Promise<User> { 
      return this.userService.findOne(params.id); 
    } 
    @Post() 
    @ApiOperation({ summary: 'Create User'})
    async create(@Body() userDTO: UserDTO){
      return this.userService.create(userDTO);
    } 
    @Put(':id') 
    @ApiParam({ name: 'id' }) 
    update(@Param() params, @Body() user: User): Promise<User> { 
      return this.userService.update(params.id, user); 
    } 
    @Delete(':id') 
    @ApiParam({ name: 'id' }) 
    delete(@Param() params): Promise<User> { 
    return this.userService.remove(params.id); 
  }
  }