import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  modo: boolean;
  form: FormGroup;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private service: AppService
  ) {}

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.attBotao();
      }
    });

    this.form = this.fb.group({
      linkFoto: [],
      nome: [],
      tipo: [],
      ano: [],
      potencia: [],
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

  adicionar() {
    this.service.criar(this.form.value);
    this.form.reset();
  }
}
