import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-sapphire-page',
  templateUrl: './sapphire-page.component.html',
  styleUrls: ['./sapphire-page.component.scss']
})
export class SapphirePageComponent implements OnInit {

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
