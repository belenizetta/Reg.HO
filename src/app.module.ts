import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Control } from './control/control.models';
import { User } from './user/user.models';
import { UsersModule } from './user/user.module';
import { ControlModule } from './control/control.module';
import { Project } from './project/project.models';
import { ProjectModule} from './project/project.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'resgitro_hora_db',      
      models: [User,Control,Project],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    ControlModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
