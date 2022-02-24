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
  import { Project } from './project.models'; 
  import { ProjectService } from './project.services'; 
  import { ProjectDTO } from './project.dto';
   
  @ApiTags('project') 
  @Controller('project') 
  export class ProjectController { 
    constructor(private projectService: ProjectService) {} 
    @Get() 
    findAll(): Promise<Project[]> { 
      return this.projectService.findAll(); 
    } 
}