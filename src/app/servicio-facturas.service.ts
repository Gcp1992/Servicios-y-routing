import { Injectable } from '@angular/core';
import { Factura } from 'src/_modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class ServicioFacturasService {

  //Creo Array de tipo factura:
  facturas:Factura[]=[];

  constructor() { }

    read(id:number) {
      for(let f of this.facturas){
        if(f.idFactura==id)
          return f;
      }
      return undefined;
    }

    delete(id:number) {
      for(let f=0;f<this.facturas.length;f++){
        if(this.facturas[f].idFactura==id){
          this.facturas.splice(f,1);
          break;
        }
      }
    }

    //Le pasamos el id como WHERE en instrucción SQL y le pasamos el objeto entero
    update(id:number, factura:Factura) {
      for(let f of this.facturas){
        if(f.idFactura==id){
          f.idCliente=factura.idCliente;
          f.idFactura=factura.idFactura
          f.iva=factura.iva;
          f.totalFactura=factura.totalFactura;
          break;
        }

      }

    }

    create(factura:Factura){
      this.facturas.push(factura);
      console.log(this.facturas);

    }


}
