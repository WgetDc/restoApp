import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioMenus } from '../../servicios/servicio.menus';
/**
 * Generated class for the CrearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear',
  templateUrl: 'crear.html',
})
export class CrearPage {
  menu = {id:null , nombre: null, cantidad:null, precio:null , descripcion:null ,img:null };

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviciomenus: ServicioMenus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearPage');
  }

  public addMenu(){
    this.menu.id = Date.now();
    this.serviciomenus.createMenu(this.menu);
    this.navCtrl.pop();
  }

}
