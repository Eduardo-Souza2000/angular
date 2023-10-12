import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from '../../models/modelsPessoas/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  API: string = 'http://localhost:8080/api/pessoa';
  http = inject(HttpClient);
  constructor() { }

  listAll(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.API);
  }

  save(pessoa: Pessoas): Observable<Pessoas> {
    return this.http.post<Pessoas>(this.API, pessoa);
  }

  edit(pessoa: Pessoas): Observable<Pessoas> {

    const url = `${this.API}/atualizar/${pessoa.id}`;
    return this.http.put<Pessoas>(url, pessoa);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/deletar/${id}`;
    return this.http.delete(url);
  }

  exemploErro(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.API + '/erro');
  }


}
