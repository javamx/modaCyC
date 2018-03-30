import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos: any[] = [];
  cargando: boolean;

  constructor(public http: Http) {
    this.cargar_productos();
  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://modacycv2.firebaseio.com/productos/${ cod }.json`);
  }

  public cargar_productos() {
    this.cargando = true;
    this.http
      .get('https://modacycv2.firebaseio.com/productos_idx.json')
      .subscribe(res => {
        setTimeout(() => {
          this.cargando = false;
          this.productos = res.json();
        }, 500);
      });
  }
}
