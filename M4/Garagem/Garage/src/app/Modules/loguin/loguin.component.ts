import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AppService } from 'src/app/app.service';
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
  carros: Array<CarrosType>;

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

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.service.garagem$.subscribe((res) => (this.carros = res));
  }
}
