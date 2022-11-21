import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  modo: boolean;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.attBotao();
      }
    });
  }

  salvarModal() {
    const usuario = (<HTMLInputElement>document.getElementById('usuario'))
      .value;
    const senha = (<HTMLInputElement>document.getElementById('senha')).value;
    if (usuario === 'zezinho' && senha === 'leozinhofleck') {
      window.localStorage.setItem(
        'taokeyn?',
        '61ebb28e-4f17-495e-98f3-f39452d5e698'
      );
      this.route.navigate(['/listagem']);
    } else {
      Swal.fire({
        title: 'Usuario ou senha invalidos',
        timer: 2000,
        icon: 'error',
      });
    }
  }

  sair() {
    window.localStorage.removeItem('taokeyn?');
    this.route.navigate(['/']);
  }

  attBotao() {
    this.modo = window.document.URL.includes('listagem');
  }
}
