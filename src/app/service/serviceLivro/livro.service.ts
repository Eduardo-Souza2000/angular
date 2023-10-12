import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/models/modelsLivro/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  API: string = 'http://localhost:8080/api/livro';
  http = inject(HttpClient);
  constructor() { }

  listAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API);
  }

  save(livro: Livro): Observable<Livro> {
    return this.http.post<Livro>(this.API, livro);
  }

  edit(livro: Livro): Observable<Livro> {
    const url = `${this.API}/atualizar/${livro.id}`;
    return this.http.put<Livro>(url, livro);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/deletar/${id}`;
    return this.http.delete(url);
  }

  exemploErro(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.API + '/erro');
  }
}
