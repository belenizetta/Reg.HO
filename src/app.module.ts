import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Control } from './control/control.models';
import { User } from './user/user.models';
import { UsersModule } from './user/user.module';
import { ControlModule } from './control/control.module';
import { Project } from './project/project.models';
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), //se importa de madera global en toda la aplicacion
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_URI,
      port: +process.env.PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'resgitro_hora_db',
      models: [User, Control, Project],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    ControlModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
