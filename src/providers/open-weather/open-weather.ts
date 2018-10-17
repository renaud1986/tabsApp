import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OpenWeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OpenWeatherProvider {

  private url: string = 'http://api.openweathermap.org/data/2.5/';
  private appId: string = '4515ba1ae667b0c8dc49d0d0e33f8167';

  constructor(public http: HttpClient) {
    console.log('Hello OpenWeatherProvider Provider');
  }

  forecast(lat: number, lng: number){
     var params= {'APPID': this.appId,'lat': lat,'lon': lng,'units': 'metric'};
     var reqOpts = {
       params : new HttpParams()
     }; 

    for(let k in params){
      reqOpts.params = reqOpts.params.set(k,params[k]);
    }
    return this.http.get(this.url + 'forecast', reqOpts);
  }
}
