import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinepolitoComponent } from './cinepolito/cinepolito.component';
import { CineComponent } from './cine/cine.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  { path:'', component:ProductListComponent },
  { path:'suma', component:OperasBasComponent},
  { path:'Cine', component:CineComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
