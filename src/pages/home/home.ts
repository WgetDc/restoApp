import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicioMenus } from '../../servicios/servicio.menus';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
menus = [];
constructor(public navCtrl: NavController, public servicioMenus: ServicioMenus ) {
  servicioMenus.getMenus()
    .subscribe(menus => {
      this.menus = menus;
    });
  }

  public goToPageCrear(){
    this.navCtrl.push('CrearPage');
  }

  public goToPageDetalle(identificador){
    this.navCtrl.push('DetallePage', { id: identificador } );
  }

}
