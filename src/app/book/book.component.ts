import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/services/service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( public servicesData : ServiceService ) { }

  ngOnInit(): void {
    this.servicesData.GetData("https://bookcart.azurewebsites.net/api/Book").subscribe((data => {
  console.log(data)
 }))
  }
APIdata() {

 this.servicesData.GetData("https://bookcart.azurewebsites.net/api/Book").subscribe((data => {
  console.log(data)
 }))
} 
}
