import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getProducts() {
    return [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' },
      { id: 4, name: 'Product 6' },
    ];
  }
  getUsers() {
    return [
      { id: 1, name: 'Users 1' },
      { id: 2, name: 'Users 2' },
      { id: 3, name: 'Users 3' },
      { id: 4, name: 'Users 4' },
      { id: 5, name: 'Users 5' },
    ];
  }
  getLogin() {
    return 'Login';
  }
  getArticles() {
    return [
      { idArticles: 1, name: 'Articulo 1' },
      { idArticles: 2, name: 'Users 2' },
      { iidArticles: 3, name: 'Users 3' },
      { iidArticles: 4, name: 'Users 4' },
      { iidArticles: 5, name: 'Users 5' },
    ];
  }
}
