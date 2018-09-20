import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 title : string ="my map";
 lat:number =  32.98558916454256;
 lng:number =-96.90791867673397;
  constructor() { }

  ngOnInit() {
  }
  onChoseLocation(event){
    console.log(event)
  }
}
