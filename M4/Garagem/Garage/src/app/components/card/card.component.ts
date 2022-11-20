import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() ano: string;
  @Input() nome: string;
  @Input() tipo: string;
  @Input() logado: boolean;
  @Input() potencia: string;
  @Input() linkFoto: string;

  constructor() {}

  ngOnInit(): void {}
}
