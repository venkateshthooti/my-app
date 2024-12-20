import { Directive, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { AngularMaterialComponent } from './angular-material/angular-material.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateStudentformComponent } from './create-studentform/create-studentform.component';
import { AuthenticationGuard } from './authentication.guard';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { StudentIdCardsDetailsComponent } from './student-id-cards-details/student-id-cards-details.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingsComponent } from './siblings/siblings.component';
import { AboutCompanyComponent } from './about-us/about-company/about-company.component';

const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'dashboard',canActivate:[AuthenticationGuard],component:DashboardComponent,children:[
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
  {path:'createIdcards',component:CreateStudentIdCardComponent},
  {path:'angularPractice',component:AngularMaterialComponent},
  {path:'bottomsheet',component:BottomSheetComponent},
  {path:'createuser',component:CreateUserComponent},
  {path:'studentForm',component:CreateStudentformComponent},
  {path:'vehicle-details/:id',component:VehicleDetailsComponent},
  {path:'edit-vehicle/:id',component:CreateVehicleComponent},

  {path:'account-details/:id',component:AccountDetailsComponent},
  {path:'update-details/:id',component:CraeteAccountsComponent},

  {path:'view-student-details/:id',component:StudentIdCardsDetailsComponent},
  {path:'update-student-deatils/:id',component:CreateStudentIdCardComponent},

  {path:'parent',component:ParentComponent},
  {path:'siblings',component:SiblingsComponent},
  {path:'about-company',component:AboutCompanyComponent},
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
  }

]},

{path:'',component:LoginComponent},
{path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
