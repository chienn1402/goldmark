import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
    console.log($element);
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
