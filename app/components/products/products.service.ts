import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL} from '../../constants';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProduct(category: string, id : any) : Observable<any> {
    return this.http.get(API_BASE_URL + category + "/" + id);
  }

  addProduct(category: string, element : any) : Observable<any> {
    return this.http.post(API_BASE_URL + category + "/create", element, httpOptions);
  }

  updateProduct(category: string, element : any, id : number) : Observable<any> {
    return this.http.post(API_BASE_URL + category + "/update?" + category + "Id=" + id, element, httpOptions);
  }

  deleteProduct(category: string, id : number) : Observable<any> {
    return this.http.delete(API_BASE_URL + category + "/delete/" + id);
  }

  getAllBrands() : Observable<any> {
    return this.http.get(API_BASE_URL + "brand/all");
  }

  getAllCountries() : Observable<any> {
    return this.http.get(API_BASE_URL + "country/all");
  }
}
