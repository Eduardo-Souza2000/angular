import { Component } from '@angular/core';
import { Pessoas } from './pessoa';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.scss']
})
export class ListaPessoasComponent {
  lista: Pessoas[] = [];

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

}