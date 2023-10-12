import { Component, inject } from '@angular/core';
import { Carro } from 'src/app/models/modelsCarro/carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarrosService } from 'src/app/service/serviceCarro/carros.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {
  
  lista: Carro[] = [];
  isEditing: boolean = false;
  carroSelecionadaParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;
  modalService = inject(NgbModal);
  carroservice = inject(CarrosService);
  carroSelecionada: Carro = new Carro();
  idSelecao!: number;
  modal: any;
  /*
  constructor(){
    for (let i = 1; i <= 10; i++){
      let carros: carro = new carro();
      carros.nome = `Carro ${i}`;
      carros.ano = 2023 - i;
      this.lista.push(carros);
    }
  }*/
  constructor(){
    this.listAll();
  }
  abrirModal(open: any, carro?: Carro) {
    if (carro) {
      this.carroSelecionadaParaEdicao = Object.assign({}, carro);
      this.isEditing = true; 
    } else {
      this.carroSelecionadaParaEdicao = new Carro();
      this.isEditing = false; 
    }
  
    this.modalService.open(open, { size: 'lg' }).result.then((result) => {
      if (result === 'save') {
      }
    });
  }

  addNaLista(carros: Carro){
    this.lista.push(carros);
    this.modalService.dismissAll();
  }

  listAll() {

    this.carroservice.listAll().subscribe({
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
    this.carroSelecionadaParaEdicao = new Carro();
    this.modalService.open(modal, { size: 'sm' });
    this.listAll();
  }

  editar(open: any, carro: Carro, indice: number) {
    console.log('Valor de i:', indice +1);
    this.carroSelecionadaParaEdicao = Object.assign({}, carro);
    this.indiceSelecionadoParaEdicao = indice + 1;
    this.isEditing = true; 
    this.modalService.open(open, { size: 'lg' });
    this.listAll();
  }


  delete(id: number) {
    if (window.confirm("Tem certeza de que deseja excluir esta pessoa?")) {
        this.carroservice.delete(id).subscribe({
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

    this.carroservice.exemploErro().subscribe({
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
