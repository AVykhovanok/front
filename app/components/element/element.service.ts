import { Injectable } from '@angular/core';
import  {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Accessories } from 'src/app/model/Accessories.model';
import { API_BASE_URL} from '../../constants'
import { Brand } from 'src/app/model/Brand.model';
import { Country } from 'src/app/model/Country.model';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  constructor(private http: HttpClient) { }

  getById(id: number, category: string): Observable<any> {
    return this.http.get(API_BASE_URL + category + '/' + id);
  } 

  getBrandById(id: number): Observable<Brand> {
    return this.http.get<Brand>(API_BASE_URL + 'brand' + '/' + id);
  }

  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(API_BASE_URL + 'country' + '/' + id);
  }
}
