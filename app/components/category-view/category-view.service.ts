import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryViewService {

  constructor(private http: HttpClient) { }

  getAll(category : string): Observable<any>{
    return this.http.get(API_BASE_URL + category + '/all');
  }
}
