import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoas } from '../pessoas';
import { NgIf } from '@angular/common';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';

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

    if(this.pessoa.idade == null ||  this.pessoa.nome == null){
      alert("Campos Invalidos")
      return;
    }else if(isNaN(this.pessoa.idade )){
      alert("Aceito somente numero na idade")
      return;
    } else if(this.pessoa.idade > 130){
      alert("Idade Invalida, não existem pessoas vivas maiores que 130 anos")
      return;
    }else if (!/^[A-Za-z]+$/.test(this.pessoa.nome as string)){
      alert("Aceito somente Letras no nome")
      return;
    }else{
      this.retorno.emit(this.pessoa);
    }
  }

}
