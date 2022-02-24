import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProjectController } from './project.controller';
import { Project } from './project.models';
import { ProjectService } from './project.services';

@Module({
  imports: [SequelizeModule.forFeature([Project])],
  providers: [ProjectService],
  controllers: [ProjectController],
  exports:[SequelizeModule]
})
export class ProjectModule {}