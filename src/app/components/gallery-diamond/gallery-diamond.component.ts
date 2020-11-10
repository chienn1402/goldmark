import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'gm-gallery-diamond',
  templateUrl: './gallery-diamond.component.html',
  styleUrls: ['./gallery-diamond.component.scss']
})
export class GalleryDiamondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.gallery-slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });
  }

}
