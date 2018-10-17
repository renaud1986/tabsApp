import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpotifyProvider } from '../../providers/spotify/spotify';

/**
 * Generated class for the SkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skills',
  templateUrl: 'skills.html',
})
export class SkillsPage {

  infos: any;
  artists: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private provider:SpotifyProvider) {
    this.infos =  navParams.get('skill');
    console.log(this.infos);
    console.log(this.infos.type);
    console.log(this.infos.sujet);
    this.getArtists();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillsPage');
  }
  
  // recupere tous les artistes presents sur Spotify
  getArtists(){
     this.provider.getArtists().then(data => {
       this.artists = data; // contient toutes les donnees venant de l'API Spotify
       console.log(this.artists);
     });
  }
}
