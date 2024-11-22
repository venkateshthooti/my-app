import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {

  // weather:any ={} ;
  weathers:any =[]

  constructor(private _weatherService: WeatherService) {
    _weatherService.getWeather().subscribe(
      (data: any) => {
        this.weathers[0] = data;
      },
      (err: any) => {
        alert('Internet Server error');
      }
    );
  }
}
