import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Genders } from './entities/gender.entity';

@Injectable()
export class GendersService {
  
  constructor(
    @InjectRepository(Genders)
    private gendersRepository: Repository<Genders>

  ){}

  async create(createGenderDto: CreateGenderDto) {
    const genders = this.gendersRepository.create(createGenderDto);
    await this.gendersRepository.save(genders);
    return genders;
  }

  findAll() {
    return this.gendersRepository.find();
  }

  findOne(id: string) {
    return this.gendersRepository.findOne({ where: { id }});
  }

  async updateGenders(id: string, genders: Genders) {
    await this.gendersRepository.update(id, genders);
  }

  remove(id: string) {
    this.gendersRepository.delete(id);
    return "Eliminado";
  }
}
