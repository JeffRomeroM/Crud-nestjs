import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brands } from './entities/brand.entity';


@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>

  ){}
 
  async create(createBrandDto: CreateBrandDto) {
    const brands = this.brandsRepository.create(createBrandDto);
    await this.brandsRepository.save(brands);
    return brands;
  }

  findAll() {
    return this.brandsRepository.find();
  }

  findOne(id: string) {
    return this.brandsRepository.findOne({where: { id }});
  }

  async updateBrands(id:string, brands:Brands): Promise<void>{
    await this.brandsRepository.update(id,brands) ;
  }

  remove(id: string) {
    this.brandsRepository.delete(id);
    return "eliminado";
  }
}
