import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>
  ){}

  async create(createCategoryDto: CreateCategoryDto) {
    const categories = this.categoriesRepository.create(createCategoryDto);
    await this.categoriesRepository.save(categories);
    return categories;
  }

  findAll() {
    return this.categoriesRepository.find();
  }

  findOne(id: string) {
    return this.categoriesRepository.findOne({where: { id }});
  }

  async updateCategories(id:string, categories:Categories): Promise<void>{
    await this.categoriesRepository.update(id, categories) ;
  }

  remove(id: string) {
    this.categoriesRepository.delete(id);
    return "eliminado";
  }
}
