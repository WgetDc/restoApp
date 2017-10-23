import {Injectable} from '@angular/core';

@Injectable()

export class ServicioMenus{
    menus = [
        { id: 1, nombre: "Tallarines a la bolognesa", cantidad:1, precio:2000, descripcion: "La gente de Bolonia emplea esta salsa tradicionalmente para servir los famosos  con tallarines frescos (tagliatelle alla bolognese), para polenta o ñoquis. Menos tradicional, la salsa se sirve con los rigatoni o se usa como relleno de la lasaña o pasticho o también de canelones.", img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Tallarines_bolo%C3%B1esa_pastafresca_tagliatelle_bolognese.jpg/250px-Tallarines_bolo%C3%B1esa_pastafresca_tagliatelle_bolognese.jpg"},
        { id: 2, nombre: "Cazuela chilota", cantidad: 1, precio: 3500, descripcion: "Cazuela chilota, la mas rica del sur", img:"https://upload.wikimedia.org/wikipedia/commons/5/59/Cazuela_ecuatoriana.jpg"},
        { id: 3, nombre: "Milcaos", cantidad: 4, precio: 2500, descripcion: "manjar del sur", img:"https://media.betazeta.com/sabrosia/2013/12/milcao.jpg"}
    ];

    public getMenus(){
        return this.menus;
    }

    public createMenu(menu){
        this.menus.push(menu);
    }
}