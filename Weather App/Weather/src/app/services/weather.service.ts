import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // https://api.openweathermap.org/data/2.5/weather?q=london&appid=643faf4b208f48e19ca30334135c1b7f
  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  weatherEndPoint = 'weather'
  apiKey = '643faf4b208f48e19ca30334135c1b7f';


  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any>{
    let weatherUrl = `${this.baseUrl}${this.weatherEndPoint}?q=${cityName}&appid=${this.apiKey}`;
    return this.http.get(weatherUrl);
  }
}
