import { Component } from '@angular/core';
import { IonicModule, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {
  resultado: number;
  gasolina: number;
  alcool: number;
  cor: string;
  mensagem: string;
  constructor() {
    this.gasolina = 0 ;
    this.alcool = 0 ;
    this.resultado = 0;
    this.cor=  'primary';
    this.mensagem='';
  }
  calcular(a: IonInput,g: IonInput){
      let verificador = 0.70
      let mensagem = '';
      if(a.value != null && a.value != '' && g.value != null && g.value != ''){
        let comparador = +a.value / +g.value;
        if( comparador <= verificador){
            this.resultado = comparador;
            this.mensagem = "melhor usar Acool"
            this.cor= "success";
        }else{
          this.resultado = comparador;
          this.mensagem = "melhor usar Gasolina";
          this.cor = "danger";
        }

      }
  }
  limpar(a: IonInput, g:IonInput){
    a.value = '';
    g.value = '';
  }

}
