import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    window.scroll(0, 0);
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar']);
    }
  }
}
