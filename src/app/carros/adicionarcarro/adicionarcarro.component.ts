import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carro } from '../carro';

@Component({
  selector: 'app-adicionarcarro',
  templateUrl: './adicionarcarro.component.html',
  styleUrls: ['./adicionarcarro.component.scss']
})
export class AdicionarcarroComponent {

  roteador = inject(ActivatedRoute);
  carros: carro = new carro();

  @Output() retorno = new EventEmitter<carro>();

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvarCarro(){
    this.retorno.emit(this.carros)
  }


}
