import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from 'src/app/models/modelsCarro/carro';
import { CarrosService } from 'src/app/service/serviceCarro/carros.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adicionarcarro',
  templateUrl: './adicionarcarro.component.html',
  styleUrls: ['./adicionarcarro.component.scss']
})
export class AdicionarcarroComponent {
  @Input() carro: Carro = new Carro(); 
  @Input() isEditing: boolean = false;
  @Input() carroSelecionadaParaEdicao : Carro = new Carro;
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarrosService);
  lista: Carro[] = [];
  indiceSelecionadoParaEdicao!: number;
  modalService = inject(NgbModal);
  carroSelecionado: Carro = new Carro();
  idSelecao!: number;
  modal: any;

  constructor(){
    
  }

  salvarCarro(){

    if(this.carro.ano == null ||  this.carro.nome == null){
      alert("Campos Invalidos")
      return;
    }else if(isNaN(this.carro.ano )){
      alert("Aceito somente numero no ano do Carro")
      return;
    } else if(this.carro.ano < 1900 || this.carro.ano > 2025 ){
      alert("Ano do Carro Invalido")
      return;
    }else{
      if (this.isEditing) {
        
        this.carroService.edit(this.carro).subscribe({
          next: uptadeCarro => {
            this.lista[this.indiceSelecionadoParaEdicao] = uptadeCarro;
            this.modalService.dismissAll();
          },
          error: erro => {
            alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
            console.error(erro);
          }
        });
      } else {
        this.carroService.save(this.carro).subscribe({
          next: novoCarro => {
            this.lista.push(novoCarro);
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
