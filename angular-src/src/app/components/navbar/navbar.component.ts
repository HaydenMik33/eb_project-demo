import { Component, OnInit, DoCheck } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit, DoCheck {
  user: any;
  userExists: boolean;
  constructor(private aService: AuthService, private router: Router) {}

  ngOnInit() {
  }
  ngDoCheck() {
    if (this.user===undefined && this.aService.user) {
      this.userExists = true;
      this.user = this.aService.user;
    } 
    else if(this.user&& this.aService.user){
      null
    }
    else {
      this.userExists = false;
      this.user = undefined;
    }
  }
}
