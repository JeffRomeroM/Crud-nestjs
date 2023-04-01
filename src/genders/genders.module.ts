import { Module } from '@nestjs/common';
import { GendersService } from './genders.service';
import { GendersController } from './genders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genders } from './entities/gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Genders])],
  controllers: [GendersController],
  providers: [GendersService]
})
export class GendersModule {}
