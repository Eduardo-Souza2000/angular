import { Component, inject } from '@angular/core';
import { carro } from './carro';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {
  lista: carro[] = [];

  modalService = inject(NgbModal);
  
  constructor(){
    for (let i = 1; i <= 10; i++){
      let carros: carro = new carro();
      carros.nome = `Carro ${i}`;
      carros.ano = 2023 - i;
      this.lista.push(carros);
    }
  }

  abrirModal(open: any){
    this.modalService.open(open, { size: 'lg' });
  }

  addNaLista(carros: carro){
    this.lista.push(carros);
    this.modalService.dismissAll();
  }

}
