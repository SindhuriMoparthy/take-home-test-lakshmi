import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  url = '../../assets/patients.json'

  getPatients(){
  return this.http.get(this.url);
  }
}
