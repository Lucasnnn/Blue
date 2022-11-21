import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { CarrosType } from 'src/app/models/carros.type';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  modo: boolean;
  form: FormGroup;
  seleciona: CarrosType;
  carros: Array<CarrosType>;

  constructor(private service: AppService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.service.garagem$.subscribe((res) => {
      this.carros = res;
    });

    this.form = this.fb.group({
      linkFoto: [],
      nome: [],
      tipo: [],
      ano: [],
      potencia: [],
      __v: [],
      _id: [],
    });
  }

  selecionado(index: number) {
    this.modo = false;
    this.seleciona = this.carros[index];
  }

  editar() {
    this.modo = !this.modo;
    this.form.setValue(this.seleciona);
  }

  salvarEdit() {
    this.service.atualizar(this.form.value._id, this.form.value);
    this.modo = !this.modo;
  }
}
