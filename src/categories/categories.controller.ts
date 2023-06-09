import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Categories } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {

  constructor(private readonly categoriesService: CategoriesService
  ) {}

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    
    return this.categoriesService.create(createCategoryDto);
  }


  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(id);
  }


  @Patch(':id')
  updateCategories(@Param('id') id: string, @Body() categories: Categories) {
    return this.categoriesService.updateCategories(id, categories);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(id);
  }
}
