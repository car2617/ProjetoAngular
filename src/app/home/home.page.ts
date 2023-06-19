import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {

  resultado:number= 0;
  valor1:any = null;
  valor2:any = null;
  operacao:any = null;
  

  exibir(numero: any) {
     
    if(this.valor1 == null)  {
        this.valor1 =numero;
        this.resultado = numero;
    } else {

      if(this.valor2 == null)  {
        this.valor2 =numero;
        this.resultado = numero;
      }
    }

    
    console.log(this.valor1)
    console.log(this.valor2)
    console.log(this.resultado)

  }


  operador(operador:any){

    if(this.operacao == null){
      this.operacao =operador;
    }
    console.log(this.resultado)
  }
 
  inverterSinal(inverso:any){

    
  }


  apagar(){
    this.resultado = 0
    this.valor1 = null
    this.valor2 = null
    this.operacao = null
  }

  lixo(){
    if(this.valor2 != null ){
     this.valor2 = null
    } else {
      if(this.valor1 != null){
        this.resultado = 0
        this.valor1 = null
        this.operacao = null
      }
    
    }
    console.log(this.valor1)
    console.log(this.valor1)
    console.log(this.resultado)
    console.log(this.operacao)  

  }

  calcular(){
    if(this.operacao == '+'){
      this.resultado = this.valor1+this.valor2;
    }

    if(this.operacao == '-'){
      this.resultado = this.valor1-this.valor2;
    }
    
    if(this.operacao == '*'){
      this.resultado = this.valor1*this.valor2;
    }
    
    if(this.operacao == '/'){
      this.resultado = this.valor1/this.valor2;
    }
  }

}
