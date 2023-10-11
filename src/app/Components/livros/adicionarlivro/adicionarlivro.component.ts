import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { livro } from '../livro';

@Component({
  selector: 'app-adicionarlivro',
  templateUrl: './adicionarlivro.component.html',
  styleUrls: ['./adicionarlivro.component.scss']
})
export class AdicionarlivroComponent {

  roteador = inject(ActivatedRoute);
  Livro: livro = new livro();

  @Output() retorno = new EventEmitter<livro>();

  constructor(){
    let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);
  }

  salvarLivro(){
    this.retorno.emit(this.Livro);
  }

}
