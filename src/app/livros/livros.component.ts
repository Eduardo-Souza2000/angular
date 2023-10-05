import { Component } from '@angular/core';
import {livro } from './livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {
  lista: livro[] = [];

  constructor(){
    for (let i = 1; i <= 10; i++) {
      let livros: livro = new livro();   
      livros.titulo = `Livro ${i}`;
      livros.autor = `Autor ${i}`;
      this.lista.push(livros);
    }

  }

}
