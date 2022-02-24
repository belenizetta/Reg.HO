import { Injectable } from '@nestjs/common'; 
import { InjectModel } from '@nestjs/sequelize'; 
import { Project } from './project.models';
import { ProjectDTO } from './project.dto'; 
 
@Injectable() 
export class ProjectService { 
  constructor(@InjectModel(Project) private projectModel: typeof Project) {} 
  async findAll(): Promise<Project[]> { 
    return this.projectModel.findAll(); 
  } 
}