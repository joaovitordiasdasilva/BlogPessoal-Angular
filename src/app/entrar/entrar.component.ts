import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLoginDTO = new UsuarioLoginDTO
  credenciaisLogin: CredenciaisDTO = new CredenciaisDTO
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    console.log(this.usuarioLogin)
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLoginDTO) => {
      this.usuarioLogin = resp

      environment.token = this.credenciaisLogin.token
      environment.nome = this.credenciaisLogin.nome
      environment.foto = this.credenciaisLogin.foto
      environment.id = this.credenciaisLogin.idUsuario

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)

      this.router.navigate(['/inicio'])
    },erro =>{
      if(erro.status == 400){
        alert('Usuário ou senha estão incorretos!')
      }
    })
  }
}
