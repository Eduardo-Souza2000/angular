import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/models/modelsLivro/livro';
import { LivroService } from 'src/app/service/serviceLivro/livro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-adicionarlivro',
  templateUrl: './adicionarlivro.component.html',
  styleUrls: ['./adicionarlivro.component.scss']
})
export class AdicionarlivroComponent {

  @Input() livro: Livro = new Livro(); 
  @Input() isEditing: boolean = false;
  @Input() livroSelecionadoParaEdicao: Livro = new Livro(); 
  @Output() retorno = new EventEmitter<Livro>(); 

  livroService = inject(LivroService);
  lista: Livro[] = []; 
  indiceSelecionadoParaEdicao!: number;
  modalService = inject(NgbModal);
  livroSelecionado: Livro = new Livro(); 
  idSelecao!: number;
  modal: any;

  constructor() {
    /* let id = this.roteador.snapshot.paramMap.get('id');
    console.log(id);*/
  }

  salvarLivro() {
    if (this.livro.autor == null || this.livro.titulo == null) {
      alert("Campos Inválidos");
      return;
    } else {
      if (this.isEditing) {
        this.livroService.edit(this.livro).subscribe({
          next: updatedLivro => {
            this.lista[this.indiceSelecionadoParaEdicao] = updatedLivro;
            this.modalService.dismissAll();
          },
          error: erro => {
            alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
            console.error(erro);
          }
        });
      } else {
        this.livroService.save(this.livro).subscribe({
          next: novoLivro => {
            this.lista.push(novoLivro);
            this.modalService.dismissAll();
          },
          error: erro => {
            alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
            console.error(erro);
          }
        });
      }
    }
  }

}
