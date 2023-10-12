import { Component, inject } from '@angular/core';
import { Pessoas } from 'src/app/models/modelsPessoas/pessoas';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoasService } from 'src/app/service/servicePessoa/pessoas.service';


@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent {
  lista: Pessoas[] = [];
  isEditing: boolean = false;
  pessoaSelecionadaParaEdicao: Pessoas = new Pessoas();
  indiceSelecionadoParaEdicao!: number;
  modalService = inject(NgbModal);
  pessoaService = inject(PessoasService);
  pessoaSelecionada: Pessoas = new Pessoas();
  idSelecao!: number;
  modal: any;

/*
  constructor(){
    let pessoa1: Pessoas = new Pessoas();
    pessoa1.nome = "Eduardo";
    pessoa1.idade = 23;
    this.lista.push(pessoa1);

    let pessoa2: Pessoas = new Pessoas();
    pessoa2.nome = "Ana";
    pessoa2.idade = 30;
    this.lista.push(pessoa2);

    let pessoa3: Pessoas = new Pessoas();
    pessoa3.nome = "Carlos";
    pessoa3.idade = 28;
    this.lista.push(pessoa3);

    let pessoa4: Pessoas = new Pessoas();
    pessoa4.nome = "Mariana";
    pessoa4.idade = 25;
    this.lista.push(pessoa4);

    let pessoa5: Pessoas = new Pessoas();
    pessoa5.nome = "Rafael";
    pessoa5.idade = 35;
    this.lista.push(pessoa5);

    let pessoa6: Pessoas = new Pessoas();
    pessoa6.nome = "Isabel";
    pessoa6.idade = 29;
    this.lista.push(pessoa6);

    let pessoa7: Pessoas = new Pessoas();
    pessoa7.nome = "Lucas";
    pessoa7.idade = 27;
    this.lista.push(pessoa7);

    let pessoa8: Pessoas = new Pessoas();
    pessoa8.nome = "Patricia";
    pessoa8.idade = 31;
    this.lista.push(pessoa8);

    let pessoa9: Pessoas = new Pessoas();
    pessoa9.nome = "Felipe";
    pessoa9.idade = 26;
    this.lista.push(pessoa9);

    let pessoa10: Pessoas = new Pessoas();
    pessoa10.nome = "Julia";
    pessoa10.idade = 24;
    this.lista.push(pessoa10);

  }
*/

  constructor() {
    this.listAll();
  }

  
  abrirModal(open: any, pessoa?: Pessoas) {
    if (pessoa) {
      this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa);
      this.isEditing = true; 
    } else {
      this.pessoaSelecionadaParaEdicao = new Pessoas();
      this.isEditing = false; 
    }
  
    this.modalService.open(open, { size: 'lg' }).result.then((result) => {
      if (result === 'save') {
      }
    });
  }
  
  addNaLista(pessoa: Pessoas){
    this.listAll();
    this.modalService.dismissAll();
  }
  
  listAll() {

    this.pessoaService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  adicionar(modal: any) {
    this.pessoaSelecionadaParaEdicao = new Pessoas();
    this.modalService.open(modal, { size: 'sm' });
    this.listAll();
  }

  editar(open: any, pessoa: Pessoas, indice: number) {
    console.log('Valor de i:', indice +1);
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa);
    this.indiceSelecionadoParaEdicao = indice + 1;
    this.isEditing = true; 
    this.modalService.open(open, { size: 'lg' });
    this.listAll();
  }


  delete(id: number) {
    if (window.confirm("Tem certeza de que deseja excluir esta pessoa?")) {
        this.pessoaService.delete(id).subscribe({
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

    this.pessoaService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }
}



