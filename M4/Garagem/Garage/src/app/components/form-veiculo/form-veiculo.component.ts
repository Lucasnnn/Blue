import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-form-veiculo',
  templateUrl: './form-veiculo.component.html',
  styleUrls: ['./form-veiculo.component.scss'],
})
export class FormVeiculoComponent implements OnInit {
  form: FormGroup;
  @Input() dadoEdicao: Object;
  @Output() editado = new EventEmitter();

  constructor(private service: AppService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      linkFoto: [],
      nome: [],
      tipo: [],
      ano: [],
      potencia: [],
      __v: [],
      _id: [],
    });

    if (this.dadoEdicao) {
      this.form.setValue(this.dadoEdicao);
    }
  }

  adicionar() {
    this.service.criar(this.form.value);
    this.form.reset();
  }

  salvarEdit() {
    this.editado.emit(this.form.value);
    this.service.atualizar(this.form.value._id, this.form.value);
  }

  excluir() {
    this.editado.emit(this.form.value._id);
    this.service.deletar(this.form.value._id);
  }
}
