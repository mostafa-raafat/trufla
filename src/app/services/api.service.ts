import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient: HttpClient) {}

  /**
   * getProducts: Get All Products.
   * @returns {Observable<any>}
   */
  getProducts(): Observable<any> {
    return this.httpClient.get(this.url);
  }

}
