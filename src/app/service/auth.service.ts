import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLoginDTO ): Observable<UsuarioLoginDTO>{
    return this.http.put<UsuarioLoginDTO>('https://blodpessoal.herokuapp.com/api/v1/usuario/credenciais', usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://blodpessoal.herokuapp.com/api/v1/usuario/salvar', usuario)
  }
}
