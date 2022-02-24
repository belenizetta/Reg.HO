import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ControlController } from './control.controller';
import { Control } from './control.models';
import { ControlService } from './control.services';

@Module({
  imports: [SequelizeModule.forFeature([Control])],
  providers: [ControlService],
  controllers: [ControlController],
  exports:[SequelizeModule]
})
export class ControlModule {}