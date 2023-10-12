import { Injectable,inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from 'src/app/models/modelsCarro/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);
  constructor() { }

  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API);
  }

  save(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, carro);
  }

  edit(carro: Carro): Observable<Carro> {

    const url = `${this.API}/atualizar/${carro.id}`;
    return this.http.put<Carro>(url, carro);
  }

  delete(id: number): Observable<any> {
    const url = `${this.API}/deletar/${id}`;
    return this.http.delete(url);
  }

  exemploErro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/erro');
  }
}
