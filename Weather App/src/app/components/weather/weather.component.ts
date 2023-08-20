import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName!: string;
  weatherData: any;


  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    this.getWeatherData();
    this.cityName = '';
  }

  private getWeatherData(){
    this.weatherService.getWeatherData(this.cityName).subscribe(
      (res) => {
        // console.log(res);
        this.weatherData = res;
      },
      (error) => {
        console.log(error)
      }
    )
  }

  onSearch(){
    this.getWeatherData();
    this.cityName = '';
  }

  onGetClick(){
    this.onSearch();
  }

}
