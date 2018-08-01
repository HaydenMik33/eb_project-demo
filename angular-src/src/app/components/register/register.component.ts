import { Component, OnInit } from "@angular/core";
import { ValidateService } from "../../services/validate.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  constructor(
    private vService: ValidateService,
    private msg: FlashMessagesService,
    private aService: AuthService,
    private router: Router
  ) {}
  ngOnInit() {}
  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };
    const vRegister = this.vService.validateRegister(user);
    const vEmail = this.vService.validateEmail(user.email);
    const register = myuser =>
      this.aService.registerUser(myuser).subscribe(data => {
        console.log(data);
        if (data.success) {
          this.msg.show("you are successfully registered", {
            cssClass: "alert-success",
            timeout: 3000
          });
          this.router.navigate(["/login"]);
        } else {
          this.msg.show("something went wrong", {
            cssClass: "alert-success",
            timeout: 3000
          });
          this.router.navigate(["/register"]);
        }
      });
    !vRegister
      ? this.msg.show("please fill out all fields", {
          cssClass: "alert-danger",
          timeout: 3000
        })
      : !vEmail
        ? this.msg.show("email is not valid", {
            cssClass: "alert-danger",
            timeout: 3000
          })
        : register(user);
  }
}
