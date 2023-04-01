import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CountriesModule } from './countries/countries.module';
import { CategoriesModule } from './categories/categories.module';
import { GendersModule } from './genders/genders.module';
import { BrandsModule } from './brands/brands.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '090202',
      database: 'ecommerce-ng',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      
    }),
    MenuModule, CountriesModule, CategoriesModule, GendersModule, BrandsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
