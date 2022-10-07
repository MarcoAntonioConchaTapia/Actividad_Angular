import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolito',
  templateUrl: './cinepolito.component.html',
  styleUrls: ['./cinepolito.component.css']
})
export class CinepolitoComponent implements OnInit {

  nombre: string = "";
  numeroC: number = 0;
  numeroB: number = 0;
  tarjeta: boolean = false;
  desc1: number = 0;
  desc2: number = 0;
  precioB: number = 12;
  totalPagar: number = 0;
  aviso1: boolean = false;
  aviso2E: boolean = false;
pagar: number = 0;

  /*
 
 calculos(){
 
   let numeroB: number = parseInt(this.numeroB);
   let numeroB2: number = parseInt(this.numeroB);
   let resultado: number = 0;
   let totalPagar: number = 0;
 
   numeroB = parseInt(this.numeroB) / parseInt(this.numeroC);
 
   if (numeroB>7){
 
     this.resultado = 'Error O.O';
     this.totalPagar = 'solo se pueden comprar 7 boletos por cada persona UwU';
 
   }
   else
 
   resultado = this.desc1(numeroB);
 
   resultado = this.validarTarjeta(this.tarjeta, resultado);
 
   totalPagar = this.desc1(numeroB2);
   totalPagar = this.validarTarjeta(this.tarjeta, totalPagar);
 
 }
 
 validarTarjeta(select: boolean, precio: number){
 
   let descuento = 0;
   let resultado = 0;
 
 if(select = true){
 
   descuento = 0.90;
 }
 else{
   descuento = 1;
 }
 
 resultado = precio*descuento;
 
 return resultado;
 
 }
 
 
 desc1(numeroB: number){
 
   let resultado: number = 0;
   let descuento: number = 0;
   let precio: number = 12;
   let total: number = 0;
 
   if(numeroB>5){
 
     descuento = 0.85;
 
   }
   else if(numeroB>= 3 && numeroB <=5){
 
     descuento = 0.90;
 
   }
   else{
 
     descuento = 1;
 
   }
 
   total = numeroB * precio;
   resultado = total*descuento;
 
   return resultado;
 
 }
 
 */

  validartARJETA(bandera: boolean): void {

    this.tarjeta = bandera;

  }




  procesoCine(): void {

    if (this.numeroB > 5) {

      this.desc1 = 0.85;
    }

    if (this.numeroB >= 3 && this.numeroB <= 5) {

      this.desc1 = 0.90;

    }

    else {

      this.desc1 = 0;

    }
    console.log(this.desc1);


    if (this.tarjeta == true) {

      this.desc2 = 0.90;
    }
    else {

      this.desc2 = 0;
    }
    console.log(this.desc2);
    this.calcularCompradores();

  }

  calcularCompradores(): void {

    if (this.numeroB <= (this.numeroC * 7)) {

      this.pagar = this.precioB * this.numeroB;
      this.aviso1 = true;
      this.aviso2E = false;

      console.log(this.pagar);

      if (this.desc1 != 0) {

        this.pagar * this.desc1;
      }
      console.log(this.pagar);
      if (this.desc2 != 0) {

        this.pagar * this.desc2;
      }
      console.log(this.pagar);
    }
    else {

      this.aviso1 = false;
      this.aviso2E = true;
      this.pagar = 0;

    }

  }
  ngOnInit(): void {
  }



}

