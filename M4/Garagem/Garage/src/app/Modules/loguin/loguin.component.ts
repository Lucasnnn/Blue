import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CarrosType } from 'src/app/models/carros.type';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoguinComponent implements OnInit {
  carros: Array<CarrosType> = [
    {
      nome: 'Audi A3',
      ano: '2018',
      potencia: '300',
      tipo: 'Carro',
      linkFoto:
        'https://i.pinimg.com/564x/a5/3d/4b/a53d4bd3653c85de11880fb1d37eac64.jpg',
    },
    {
      nome: 'Bmw M3 touring',
      ano: '2022',
      potencia: '510',
      tipo: 'Carro',
      linkFoto:
        'https://www.automaistv.com.br/wp-content/uploads/2022/06/P90468211_highRes_the-first-ever-bmw-m_edited-990x594.jpg',
    },
    {
      nome: 'H2R',
      ano: '2022',
      potencia: '310',
      tipo: 'Moto',
      linkFoto:
        'https://i.pinimg.com/564x/06/19/e7/0619e7c35dd9b6af8a18f53d22b16ce0.jpg',
    },
    {
      nome: 'Audi A3',
      ano: '2018',
      potencia: '300',
      tipo: 'Carro',
      linkFoto:
        'https://i.pinimg.com/564x/a5/3d/4b/a53d4bd3653c85de11880fb1d37eac64.jpg',
    },
    {
      nome: 'Bmw M3 touring',
      ano: '2022',
      potencia: '510',
      tipo: 'Carro',
      linkFoto:
        'https://www.automaistv.com.br/wp-content/uploads/2022/06/P90468211_highRes_the-first-ever-bmw-m_edited-990x594.jpg',
    },
    {
      nome: 'H2R',
      ano: '2022',
      potencia: '310',
      tipo: 'Moto',
      linkFoto:
        'https://i.pinimg.com/564x/06/19/e7/0619e7c35dd9b6af8a18f53d22b16ce0.jpg',
    },
  ];

  swiperConfig: any = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
      clickable: true,
    },
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
        loop: true,
        pagination: {
          clickable: true,
        },
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
        loop: true,
        pagination: {
          clickable: true,
        },
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        loop: true,
        pagination: {
          clickable: true,
        },
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
