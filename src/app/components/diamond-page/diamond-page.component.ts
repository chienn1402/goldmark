import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-diamond-page',
  templateUrl: './diamond-page.component.html',
  styleUrls: ['./diamond-page.component.scss']
})
export class DiamondPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {
      const navbarEl = document.getElementById('navbar');
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbarEl.classList.add('scrolled');
      } else {
        navbarEl.classList.remove('scrolled');
      }
    };
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
