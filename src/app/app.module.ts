import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFiltroPipe } from './product/producto-filtro.pipe';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { MenuComponent } from './menu/menu.component';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { CinepolitoComponent } from './cinepolito/cinepolito.component';
import { CineComponent } from './cine/cine.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFiltroPipe,
    OperasBasComponent,
    MenuComponent,
    CinepolitoComponent,
    CineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
