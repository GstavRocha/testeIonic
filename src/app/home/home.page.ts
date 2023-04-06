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
  resultado: string;
  gasolina: string;
  alcool: string;
  cor: string;
  constructor() {
    this.gasolina = '';
    this.alcool = '';
    this.resultado = '';
    this.cor=  '';
  }
  calcular(a: IonInput,g: IonInput){
      let verificador = 0.70
      if(a.value != null && a.value != '' && g.value != null && g.value != ''){
        let comparar = +a.value / +g.value;
        if( comparar <= verificador){
            this.resultado = 'Alcool';
            this.cor= 'Warning';
        }else{
          this.resultado = 'Gasolina';
          this.cor = "Primary"
        }

      }
  }
}
