import { Component } from '@angular/core';
import { ServicioFacturasService } from '../servicio-facturas.service';
import { Factura } from 'src/_modelo/factura';

@Component({
  selector: 'app-formulario-facturas',
  templateUrl: './formulario-facturas.component.html',
  styleUrls: ['./formulario-facturas.component.css']
})
export class FormularioFacturasComponent {
  //Inyección del servicio en el constructor: declaras variable de tipo Servicio
  constructor(private miServicio:ServicioFacturasService){}

  fact:Factura=new Factura(42);

  devuelveArrayFactura(){
    return this.miServicio.facturas;
  }

  //Métodos que llaman a los métodos del servicio
  crear() {
    this.miServicio.create(this.fact);
    this.fact=new Factura;
  }

  mostrar(){
    let f = this.miServicio.read(this.fact.idFactura);
    if(f != undefined)
      alert(f.idFactura + " " + f.idCliente + " " + f.iva + " " + f.totalFactura);
    else
      alert("NO HAY FACTURA");
  }

  eliminar(){
    this.miServicio.delete(this.fact.idFactura);
  }

  modificar(){
    this.miServicio.update(this.fact.idFactura,this.fact);
    this.fact=new Factura;
  }

  }

