import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


/*
  Generated class for the SpotifyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpotifyProvider {

  private baseUrl: string = "https://api.spotify.com/v1";
  private options: any = "/artists"; 

  constructor(public http: HttpClient) {
    console.log('Hello SpotifyProvider Provider');
  }

  // le provider utilise ici
  setProvider():Observable<any> {
    return this.http.post(this.baseUrl,JSON.stringify(this.options));
  }

  getArtists(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+this.options).subscribe(data =>{
         resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }
}
