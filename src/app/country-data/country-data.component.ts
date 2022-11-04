import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent implements OnInit {

  constructor( private servicesData : ServiceService ) { }

  ngOnInit(): void {
    this.APIdata()
  }
  APIdata() {
    this.servicesData.GetData("http://universities.hipolabs.com/search?country=United+States").subscribe((data => {
     console.log(data)
    }))
   } 
}
