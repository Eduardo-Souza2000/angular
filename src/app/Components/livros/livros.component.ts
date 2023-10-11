import { Component, inject } from '@angular/core';
import {livro } from './livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {

  lista: livro[] = [];
  modalService = inject(NgbModal);

  constructor(){
    for (let i = 1; i <= 10; i++) {
      let livros: livro = new livro();   
      livros.titulo = `Livro ${i}`;
      livros.autor = `Autor ${i}`;
      this.lista.push(livros);
    }

  }

  abrirModal(open: any){
    this.modalService.open(open, { size: 'lg' });
  }

  addNaLista(Livro: livro){
    this.lista.push(Livro);
    this.modalService.dismissAll();
  }

}
