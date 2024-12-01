import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TodoosService {

  constructor(private http:HttpClient) { }

  getTodoos(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
}
