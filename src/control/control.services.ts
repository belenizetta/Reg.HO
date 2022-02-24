import { Injectable } from '@nestjs/common'; 
import { InjectModel } from '@nestjs/sequelize'; 
import { Control } from './control.models';
import { ControlDTO } from './control.dto'; 
 
@Injectable() 
export class ControlService { 
  constructor(@InjectModel(Control) private controlModel: typeof Control) {} 
  async findAll(): Promise<Control[]> { 
    return this.controlModel.findAll(); 
  } 
  findOne(id: string): Promise<Control> { 
    return this.controlModel.findOne({ 
      where: { 
        id, 
      }, 
    }); 
  } 
  async create(controlDTO: ControlDTO): Promise<Control> { 
    const newControl = new this.controlModel(controlDTO);
    return newControl.save(); 
  } 
  async update(id: string, newControl: Control): Promise<Control> { 
    await this.controlModel.update(newControl, { 
      where: { 
        id, 
      }, 
    }); 
    const control = this.findOne(id); 
    return control; 
  } 
  async remove(id: string): Promise<Control> { 
    const control = await this.findOne(id);    
    this.controlModel.destroy({ 
      where: { 
        id, 
      }, 
    }); 
    return control; 
  }
}