import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Countries } from './entities/country.entity';



@Injectable()
export class CountriesService {
  
  constructor(
    @InjectRepository(Countries)
    private countriesRepository: Repository<Countries>

  ){}
 
  async create(createCountryDto: CreateCountryDto) {
    const countries = this.countriesRepository.create(createCountryDto);
    await this.countriesRepository.save(countries);
    return countries;
  }

  findAll() {
    return this.countriesRepository.find();
  }

  findOne(id: string) {
    return this.countriesRepository.findOne({where: { id }});
  }

  async updateCountries(id:string, countries:Countries): Promise<void>{
    await this.countriesRepository.update(id,countries) ;
  }

  remove(id: string) {
    this.countriesRepository.delete(id);
    return "eliminado";
  }
}
