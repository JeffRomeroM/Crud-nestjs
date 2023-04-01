import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';



@Injectable()
export class MenuService {

  constructor(
    @InjectRepository(Menu)
    private menuRepository: Repository<Menu>
  ) { }

  async create(createMenuDto:CreateMenuDto) {
    const menu = this.menuRepository.create(createMenuDto);
    await this.menuRepository.save(menu);
    return menu;
    
  }
  findAll()  {
    return this.menuRepository.find();
  }

  findOne(id: string) {
    const menu = this.menuRepository.findOne({ where: {id}});
    return menu;
  }


 
  async updateMenu(uuid:string, menu:Menu): Promise<void>{
    await this.menuRepository.update(uuid,menu) ;
  }

  remove(uuid: string) {
    this.menuRepository.delete(uuid);
    return "eliminado";
  }
}
