import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: CredenciaisDTO ): Observable<CredenciaisDTO>{
    return this.http.put<CredenciaisDTO>('https://blodpessoal.herokuapp.com/api/v1/usuario/credenciais', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blodpessoal.herokuapp.com/api/v1/usuario/salvar', usuario)
  }
}
