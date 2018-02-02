import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Lista, ListaItem } from '../../app/clases/index';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: Lista;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _listaDeseos: ListaDeseosService,
    public alertCtrl: AlertController
  ) {
    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");
    console.log(this.lista.nombre);
  }

  ngOnInit() {}

  actualizar(item: ListaItem) {
    item.completo = !item.completo;
    let todosMarcados = true;
    for (const item of this.lista.items) {
      if(!item.completo) {
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;
    this._listaDeseos.actualizarData();
  }

  borrarItem() {
    let confirm = this.alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Deseas borrar esta lista?',
      buttons: ['cancelar',
        {
          text: 'Si',
          handler: () => {
            // console.log('Agree clicked');
            this._listaDeseos.borrarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
