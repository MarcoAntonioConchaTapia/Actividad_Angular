import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  constructor() { }



  numeroC: number = 0;
  numeroB: number = 0;
  tarjeta: boolean = false;
  nombre: string = "";
  desc1: number = 0;
  desc2: number = 0;
  desc3: number = 0;
  precioB: number = 12;
  aviso1: boolean = false;
  aviso2E: boolean = false;
pagar: number = 0;



  validarTarjeta(bandera: boolean): void {

    this.tarjeta = bandera;

  }
 

  procesoCine(): void {

    this.calcularCompradores();
  }




  calcularCompradores(): void {

    if (this.numeroB <= (this.numeroC * 7)) {

      this.aviso1 = true;
      this.aviso2E = false;

      if (this.tarjeta == true) {
  
        this.desc1 = 0.85;
        this.desc2 = 0.90;
        this.desc3 = 0.90;

        if(this.numeroB > 5){

          this.pagar = this.precioB * this.numeroB;
          this.pagar = (this.pagar * this.desc1)*this.desc3;

        }
        else if(this.numeroB>= 3 && this.numeroB <= 5){

          this.pagar = this.precioB * this.numeroB;
          this.pagar = (this.pagar * this.desc2) * this.desc3;

        }

        else{

          this.pagar = this.precioB * this.numeroB;
          this.pagar = this.pagar * this.desc3

        }


        }

      else {
   
        this.desc1 = 0.85;
        this.desc2 = 0.90;
      
        if(this.numeroB > 5){

          this.pagar = this.precioB * this.numeroB;
           this.pagar = this.pagar * this.desc1;
        }

        else if (this.numeroB>= 3 && this.numeroB <= 5){

          this.pagar = this.precioB * this.numeroB;
          this.pagar = this.pagar * this.desc2;
        }

        else{

          this.pagar = this.precioB * this.numeroB;
          this.pagar = this.pagar;

        }

       } 

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
