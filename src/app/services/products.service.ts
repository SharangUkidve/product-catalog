import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json')
      .pipe(
        map((response) => {
          const resArr: any[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              const prod = response[key];
              resArr.push({ ...prod, titleKey: key });
            }
          }
          return resArr;
        })
      );
  }
}
