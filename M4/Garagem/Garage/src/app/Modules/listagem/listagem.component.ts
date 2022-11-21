import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { CarrosType } from 'src/app/models/carros.type';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  modo: boolean;
  index: number;
  seleciona: CarrosType;
  carros: Array<CarrosType>;

  constructor(private service: AppService, private route: Router) {}

  ngOnInit(): void {
    this.service.garagem$.subscribe((res) => {
      this.carros = res;
    });

    const x = window.localStorage.getItem('taokeyn?');
    if (!x) {
      this.route.navigate(['/']);
    }
  }

  selecionado(index: number) {
    this.modo = false;
    this.index = index;
    this.seleciona = this.carros[index];
  }

  editar() {
    this.modo = !this.modo;
  }

  editado(res: CarrosType) {
    if (typeof res === 'string') {
      this.carros.map((value: CarrosType, index: number) => {
        if (value._id === res) {
          this.carros.splice(index, 1);
        }
      });
    } else {
      this.carros.splice(this.index, 1, res);
    }
  }
}
