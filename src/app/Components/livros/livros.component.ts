import { Component, inject } from '@angular/core';
import { Livro } from 'src/app/models/modelsLivro/livro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/app/service/serviceLivro/livro.service';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent {

  lista: Livro[] = []; // Agora lista é uma lista de Livros
  isEditing: boolean = false;
  livroSelecionadoParaEdicao: Livro = new Livro();
  indiceSelecionadoParaEdicao!: number;
  modalService = inject(NgbModal);
  livroService = inject(LivroService); // Use o serviço de Livro
  livroSelecionado: Livro = new Livro();
  idSelecao!: number;
  modal: any;

  constructor() {
    this.listAll();
  }

  abrirModal(open: any, livro?: Livro) {
    if (livro) {
      this.livroSelecionadoParaEdicao = Object.assign({}, livro);
      this.isEditing = true;
    } else {
      this.livroSelecionadoParaEdicao = new Livro();
      this.isEditing = false;
    }

    this.modalService.open(open, { size: 'lg' }).result.then((result) => {
      if (result === 'save') {
      }
    });
  }

  addNaLista(livro: Livro) {
    this.listAll();
    this.modalService.dismissAll();
  }

  listAll() {
    this.livroService.listAll().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

  adicionar(modal: any) {
    this.livroSelecionadoParaEdicao = new Livro();
    this.modalService.open(modal, { size: 'sm' });
    this.listAll();
  }

  editar(open: any, livro: Livro, indice: number) {
    console.log('Valor de i:', indice + 1);
    this.livroSelecionadoParaEdicao = Object.assign({}, livro);
    this.indiceSelecionadoParaEdicao = indice + 1;
    this.isEditing = true;
    this.modalService.open(open, { size: 'lg' });
    this.listAll();
  }

  delete(id: number) {
    if (window.confirm("Tem certeza de que deseja excluir este livro?")) {
      this.livroService.delete(id).subscribe({
        next: () => {
          this.listAll();
        },
        error: erro => {
          console.error(erro);
        }
      });
    }
  }

  exemploErro() {
    this.livroService.exemploErro().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
