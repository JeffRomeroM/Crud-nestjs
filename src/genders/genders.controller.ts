import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Genders } from './entities/gender.entity';

@Controller('genders')
export class GendersController {

  constructor(private readonly gendersService: GendersService) {}

  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.gendersService.create(createGenderDto);
  }

  @Get()
  findAll() {
    return this.gendersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string){
    return this.gendersService.findOne(id);
  }

  @Patch(':id')
  updateGenders(@Param('id') id: string, @Body() genders: Genders) {
    return this.gendersService.updateGenders(id, genders);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gendersService.remove(id);
  }
}
