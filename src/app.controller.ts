import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('products')
  getProducts() {
    return this.appService.getProducts();
  }
  

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
  @Get('login')
  getLogin() {
    return this.appService.getLogin();
  }

  @Get('articles')
 
  getArticles() {
    return this.appService.getArticles();
  }

  @Get('articles/:idArticles')
  getAricles2(@Param('idArticles')
  idArticles: string): string {
    return `Estas en el articulo ${idArticles}`;
  }
  
  
}
