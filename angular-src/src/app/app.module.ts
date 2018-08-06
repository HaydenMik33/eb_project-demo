import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/smallC/navbar/navbar.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { HomeComponent } from "./components/AllAboutEB/home/home.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { ProfileComponent } from "./components/private/profile/profile.component";
import { DashboardComponent } from "./components/private/dashboard/dashboard.component";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { FixedtopComponent } from './components/smallC/fixedtop/fixedtop.component';
import { OfferbarComponent } from './components/smallC/offerbar/offerbar.component';
import { ModalComponent } from './components/smallC/modal/modal.component';
import { DataService } from "./services/data.service";
import { AboutComponent } from './components/AllAboutEB/about/about.component';
import { ContactComponent } from './components/AllAboutEB/contact/contact.component';
import { ServicesComponent } from './components/AllAboutEB/services/services.component';
import { FooterComponent } from './components/smallC/footer/footer.component';
import { BookingComponent } from './components/booking/booking/booking.component';
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent},
  { path: "contact", component: ContactComponent},
  { path: "services", component: ServicesComponent}
];
const schedulingRoutes : Routes =[
  {path:"scheduling",component:BookingComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    FixedtopComponent,
    OfferbarComponent,
    ModalComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    FooterComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(schedulingRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService,AuthGuard,DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
