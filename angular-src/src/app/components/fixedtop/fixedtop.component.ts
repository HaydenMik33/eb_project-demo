import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service"
@Component({
  selector: 'app-fixedtop',
  templateUrl: './fixedtop.component.html',
  styleUrls: ['./fixedtop.component.css']
})
export class FixedtopComponent implements OnInit {

  constructor(private aService:AuthService) { }

  ngOnInit() {
  }
  onLogoutClick(){
    this.aService.logout()
  }
}
