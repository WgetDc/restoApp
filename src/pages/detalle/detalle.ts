import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicioMenus } from '../../servicios/servicio.menus';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  id:null;
  edit = false;
  menu = { id: null, nombre: null, cantidad: null, precio: null, descripcion: null, img: null };
  constructor(public navCtrl: NavController, public navParams: NavParams, public servicioMenus: ServicioMenus) {
    this.id = this.navParams.get('id');
    this.menu = this.servicioMenus.getMenu(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  public borrarMenu(){
    this.servicioMenus.deleteMenu(this.menu);
    this.navCtrl.pop();
  }

  public enableEdit(){
    this.edit = true;
  }

  public editarMenu(){
    this.servicioMenus.editMenu(this.menu);
    this.edit = false;
  }

}
