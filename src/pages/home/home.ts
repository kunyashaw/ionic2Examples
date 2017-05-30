import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {demoWindows} from '../demoWindows/demoWindows'
import {demoButtons} from '../demoButtons/demoButtons'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  list=[demoWindows,demoButtons];
  constructor(public navCtrl: NavController) {

  }

  jump(index){
    this.navCtrl.push(this.list[parseInt(index)]);
  }

}
