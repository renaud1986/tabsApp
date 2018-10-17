import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SkillsPage } from '../skills/skills';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  formations: String[] = []; 
  interests: {type:String,sujet:String}[] = [];
  customIcons: String[] = []; 

  constructor(public navCtrl: NavController) {
     this.initialize(); 
  }

  initialize(){
    this.formations = ["Angular - Bruxelles Formation",
                       "Ionic - Business Training",
                       "IOS - Business Training",
                       "Android - Business Training",
                       "UML - Business Training",
                       "Bachelier informatique de gestion - EPFC (4 ans)",
                       "Bachelier reseaux & telecoms - ESI (3 ans)"];

    this.interests = [{ type:"body",
                        sujet:"Fitness"
                      },
                      { type:"cafe",
                        sujet:"Sorties"
                      },
                      { type:"game-controller-b",
                        sujet:"Jeux"
                      },
                      { type:"jet",
                        sujet:"Voyages"
                      },
                      { type:"beer",
                        sujet:"Pubs"
                      },
                      { type:"restaurant",
                        sujet:"Restaurants"
                      }];
              
    this.customIcons = ["android","swift","angular","my_sql","java"];

  }

  loadingSkills(interest:any){
     this.navCtrl.push(SkillsPage,{skill:interest});
  }

}
