import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private Http:HttpClient ) { }
  GetData( url : any) {
    const DataFromAPI = this.Http.get( url )
    return DataFromAPI
  }
}
