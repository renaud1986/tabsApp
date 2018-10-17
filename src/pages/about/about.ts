import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OpenWeatherProvider } from '../../providers/open-weather/open-weather';
import * as moment from 'moment';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  position = "No current position";
  weatherData: object;

  constructor(public navCtrl: NavController,private openweatherProvider: OpenWeatherProvider) {
     
  }

  ionViewDidLoad(){
    this.openweatherProvider.forecast(40.7109945,-74.004355).subscribe((json) => {
         this.weatherData = json;
         console.log(this.weatherData); 
    })
  }
  
  convertDate(str: string):string{
    let currentDate = moment(str);
    return currentDate.format("DD-MM-YYYY ");
  }
}
