import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent implements OnInit {

  num1='';
  num2='';
  resultado1:number=0;
  resultado:number=0;

  num='';
  resultado2:number=0;
  texto:string[]=[];
  imprimir='';

  sumar(){
    this.resultado1=parseInt(this.num1)+parseInt(this.num2);
  }

  tabla(){
    let texto:string[]=[];
    let num=parseInt(this.num);

    for(let i = 1 ; i <= 10 ; i++){
      this.resultado = num * i
      texto.push (num +  ' X ' + i +' = ' + this.resultado);
  }
  this.texto=texto;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
