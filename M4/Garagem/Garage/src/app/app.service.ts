import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _garagem: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  get garagem$() {
    return this._garagem.asObservable();
  }

  garagem(): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/todosCarros`)
      .pipe(tap((response) => this._garagem.next(response)));
  }

  atualizar(id: string, dados: Object) {
    console.log(id, dados);
    return this.http
      .put(`${environment.apiUrl}/atualizarCarro/${id}`, dados)
      .subscribe((res) => {
        if (res) {
          this.garagem().pipe(first()).subscribe();
        }
      });
  }

  criar(dados: Object) {
    return this.http
      .post(`${environment.apiUrl}/criarCarro`, dados)
      .subscribe((res) => {
        if (res) {
          this.garagem().pipe(first()).subscribe();
        }
      });
  }

  deletar(id: string) {
    return this.http
      .delete(`${environment.apiUrl}/deletarCarro/${id}`)
      .subscribe((res) => {
        if (res) {
          this.garagem().pipe(first()).subscribe();
        }
      });
  }
}
