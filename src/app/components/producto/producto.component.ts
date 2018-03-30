import { ProductosService } from './../../services/productos.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {
  producto: any = undefined;
  constructor(private route: ActivatedRoute, private _ps: ProductosService) {
    route.params.subscribe(parametros => {
      _ps.cargar_producto(parametros['id']).subscribe(res => {
        this.producto = res.json();
      });
    });
  }
}
