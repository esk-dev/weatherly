import { Inject, Injectable } from '@angular/core';
import { HttpService } from '@core/http/http.service';
import { ENVIRONMENT, IEnvironment } from '@core/environment/env';

@Injectable({
  providedIn: 'root',
})
export class WeatherApiService {
  private readonly WEATHER_API: string;

  constructor(
    private httpService: HttpService,
    @Inject(ENVIRONMENT) private env: IEnvironment,
  ) {
    this.WEATHER_API = this.env.WEATHER_API;
  }

  checkApiHealth() {
    const options = {
      params: {
        lat: 44.34,
        lon: 10.99,
      },
    };
    return this.httpService.get(this.WEATHER_API, options);
  }
}
