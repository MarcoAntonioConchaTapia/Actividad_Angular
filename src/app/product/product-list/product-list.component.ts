import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagenWidth:number=200;
  imagenMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string="";

  constructor() { }

  showImagen():void{
    this.muestraImg =! this.muestraImg;
  }

  ngOnInit(): void {
  }



  productos:IProducto[]=[
    {
      "ProductoId":1,
      "Modelo":'Sentra',
      "Descripcion":'Cuatro puertas familiar',
      "Year":'febrero 3 2022',
      "Presio":120000,
      "Marca":'NISSAN',
      "Color":'Azul',
      "imagenUrl":'https://www.informador.mx/__export/1591376300172/sites/elinformador/img/2020/06/05/nissan-sentra-2020-1600-0c_1_crop1591376299435.jpg_1970638775.jpg'
    }, 
    {
      "ProductoId":2,
      "Modelo":'A4',
      "Descripcion":'Cuatro puertas familiar',
      "Year":'febrero 3 2022',
      "Presio":120000,
      "Marca":'Audi',
      "Color":'Blancol',
      "imagenUrl":'https://laverdadnoticias.com/__export/1575861651979/sites/laverdad/img/2019/12/08/audi_2020_conoce_las_novedosas_funciones_implementadas_en_este_auto.jpg_759710130.jpg'
    },
    {
      "ProductoId":3,
      "Modelo":'Riot',
      "Descripcion":'cinco puertas familiar',
      "Year":'febrero 3 2022',
      "Presio":120000,
      "Marca":'Kia',
      "Color":'Rojo',
      "imagenUrl":'https://autoprice.com.mx/storage/images/2078/exterior/CwbaoAyi9M4eqMJCv0yYEsZBizAhhcajrOUXfeB6.jpg'
    }
  ]

}
