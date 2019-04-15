import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    return this.httpClient.get(this.url);
  }

  createProduct(product: Product) {
    this.httpClient.post(this.url, product)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  updateProduct(product: Product) {
    this.httpClient.put(this.url + '/' + product.id, product)
      .subscribe(
        data => {
          console.log('PUT Request is successful ', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

  deleteProduct(productId: string) {
    this.httpClient.delete(this.url + '/' + productId)
      .subscribe(
        data => {
          console.log('DELETE Request is successful', data);
        },
        error => {
          console.log('Error', error);
        }
      );
  }

}
