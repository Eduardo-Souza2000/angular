import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoas } from '../pessoas';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.scss']
})

export class AdicionarComponent {

  roteador = inject(ActivatedRoute);
  pessoa: Pessoas = new Pessoas();

  @Output() retorno = new EventEmitter<Pessoas>();

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }


  salvarPessoa(){
    this.retorno.emit(this.pessoa);
  }

}
