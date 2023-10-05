import { Component } from '@angular/core';
import { carro } from './carro';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {
  lista: carro[] = [];
  
  constructor(){
    for (let i = 1; i <= 10; i++){
      let carros: carro = new carro();
      carros.nome = `Carro ${i}`;
      carros.ano = 2023 - i;
      this.lista.push(carros);
    }
  }

}
