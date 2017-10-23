import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicioMenus } from '../../servicios/servicio.menus';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
menus = [];
constructor(public navCtrl: NavController, public servicioMenus: ServicioMenus ) {
  this.menus = servicioMenus.getMenus();
  }

}
