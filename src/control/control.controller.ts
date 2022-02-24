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
  import { Control } from './control.models'; 
  import { ControlService } from './control.services'; 
  import { ControlDTO } from './control.dto';
   
  @ApiTags('control') 
  @Controller('control') 
  export class ControlController { 
    constructor(private controlService: ControlService) {} 
    @Get() 
    findAll(): Promise<Control[]> { 
      return this.controlService.findAll(); 
    } 
    @Get(':id') 
    @ApiParam({ name: 'id' }) 
    findOne(@Param() params): Promise<Control> { 
      return this.controlService.findOne(params.id); 
    } 
    @Post() 
    @ApiOperation({ summary: 'Create Control'})
    async create(@Body() controlDTO: ControlDTO){
      return this.controlService.create(controlDTO);
    } 
    @Put(':id') 
    @ApiParam({ name: 'id' }) 
    update(@Param() params, @Body() control: Control): Promise<Control> { 
      return this.controlService.update(params.id, control); 
    } 
    @Delete(':id') 
    @ApiParam({ name: 'id' }) 
    delete(@Param() params): Promise<Control> { 
    return this.controlService.remove(params.id); 
  }
  }