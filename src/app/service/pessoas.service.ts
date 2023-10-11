import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoas } from '../models/pessoas';

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

  exemploErro(): Observable<Pessoas[]> {
    return this.http.get<Pessoas[]>(this.API + '/erro');
  }

   /*
  CASO PRECISE ENVIAR REQUEST PARAMS, BASTA DECLARAR ASSIM E INCLUIR NA REQUISIÇÃO HTTP

  let params = new HttpParams()
      .set('empresaId', empresaId.toString())

  return this.http.get<Pessoa[]>(this.API, { params: params});

  
  
  SE PRECISAR COLOCAR COISAS NO HEADER DA REQUISIÇÃO


      let headers = new HttpHeaders()
      .set("Content-Type", "application/json");


        return this.http.get<Pessoa[]>(this.API, { headers: headers});



  */
}
