import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Factura } from 'src/_modelo/factura';
import { FormularioFacturasComponent } from './formulario-facturas/formulario-facturas.component';

const routes: Routes = [
  {path: "mostrarHome", title:"Mostrar Home", component:HomeComponent},
  {path: "mostrarQuienesSomos", title:"Mostrar quienes somos", component:QuienesSomosComponent},
  {path: "mostrarContacto", title:"Mostrar contacto", component:ContactoComponent},
  {path: "mostrarFactura", title:"Mostrar Factura", component:FormularioFacturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
