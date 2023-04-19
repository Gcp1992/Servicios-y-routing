import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioFacturasService } from './servicio-facturas.service';
import { FormularioFacturasComponent } from './formulario-facturas/formulario-facturas.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioFacturasComponent,
    HomeComponent,
    ContactoComponent,
    QuienesSomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  //Metemos aquí nuestro servicio
  providers: [ServicioFacturasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
