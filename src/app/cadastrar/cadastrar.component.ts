import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioLoginDTO } from '../model/UsuarioLoginDTO';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario:  Usuario = new Usuario
  confirmarSenha: string
  tipoUsuario: string

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.targe.value

  }

  tipoUser(event: any){
    this.tipoUsuario = event.targe.value

  }

  cadastrar(){


  }

}
