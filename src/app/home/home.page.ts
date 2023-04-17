import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule],
})
export class HomePage {
  resultado: any;
  gasolina: number;
  alcool: number;
  cor: string;
  mensagem: string;

  formGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.gasolina = 0 ;
    this.alcool = 0 ;
    this.resultado = 0;
    this.cor=  'primary';
    this.mensagem='';
    this.formGroup = fb.group({
      alcool: ['',
      [Validators.required, 
        Validators.min(0.1),
        Validators.minLength(1)
      ]
    ],
      gasolina: ['',
      [Validators.required, 
        Validators.min(0), 
        Validators.minLength(1)
      ]
    ]
    });
  }
  calcular(){
      let verificador = 0.70
      let preco = this.formGroup.value;
      let resultado = +preco.alcool / +preco.gasolina;
      console.log(this.formGroup.value)
      if(resultado <= verificador){
        this.resultado = resultado;
        this.mensagem = "melhor usar Acool"
        this.cor= "success";
      }else{
        this.resultado = resultado;
        this.mensagem = "melhor usar Gasolina";
        this.cor = "danger";
      };
  }
  limpar(){
    this.formGroup.setValue({alcool: '' , gasolina: ''})
    this.resultado = '';
    this.cor = 'primary';

  }

}
