import { Directive, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PhotosComponent } from './photos/photos.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbMoviesComponent } from './imdb-movies/imdb-movies.component';
import { PokemonCarouselComponent } from './pokemon-carousel/pokemon-carousel.component';
import { SocialProfilesComponent } from './social-profiles/social-profiles.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CraeteAccountsComponent } from './craete-accounts/craete-accounts.component';
import { StudentIdCardComponent } from './student-id-card/student-id-card.component';
import { CreateStudentIdCardComponent } from './create-student-id-card/create-student-id-card.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'rectangle',component:RectangleComponent},
  {path:'circle',component:CircleComponent},
  {path:'bmi',component:BmiComponent},
  {path:'data-binding',component:DataBindingComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'event-registration',component:EventRegistrationComponent},
  {path:'employee-registration',component:EmployeeRegistrationComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'flipkart',component:FlipkartComponent},
  {path:'vehicle',component:VehicleComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'amazon',component:AmazonComponent},
  {path:'mail',component:MailComponent},
  {path:'photos',component:PhotosComponent},
  {path:'weather',component:WeatherComponent},
  {path:'blog',component:BlogComponent},
  {path:'imdbMovies',component:ImdbMoviesComponent},
  {path:'pokeman',component:PokemonCarouselComponent},
  {path:'social-profiles',component:SocialProfilesComponent},
  {path:'craeteVehicles',component:CreateVehicleComponent},
  {path:'createAccounts',component:CraeteAccountsComponent},
  {path:'studentidcard',component:StudentIdCardComponent},
  {path:'createIdcards',component:CreateStudentIdCardComponent}

]},

{path:'',component:LoginComponent},
{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
