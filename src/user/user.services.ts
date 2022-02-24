import { Injectable } from '@nestjs/common'; 
import { InjectModel } from '@nestjs/sequelize'; 
import { User } from './user.models';
import { UserDTO } from './user.dto'; 
import { Control } from 'src/control/control.models';

 
@Injectable() 
export class UsersService { 
  constructor(@InjectModel(User) private userModel: typeof User) {} 
  async findAll(): Promise<User[]> { 
    return this.userModel.findAll(); 
  } 
  findOne(id: string): Promise<User> { 
    return this.userModel.findOne({ 
      where: { 
        id, 
      }, 
    }); 
  } 
  async create(userDTO: UserDTO): Promise<User> { 
    const newUser = new this.userModel(userDTO);
    const control1 = new Control();
    control1.role = 1;
    newUser.controls = [control1];
    return newUser.save(); 
  } 
  async update(id: string, newUser: User): Promise<User> { 
    await this.userModel.update(newUser, { 
      where: { 
        id, 
      }, 
    }); 
    const user = this.findOne(id); 
    return user; 
  } 
  async remove(id: string): Promise<User> { 
    const user = await this.findOne(id);    
    this.userModel.destroy({ 
      where: { 
        id, 
      }, 
    }); 
    return user; 
  }
}