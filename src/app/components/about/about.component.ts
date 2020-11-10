import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input()
  isSapphire = false;

  constructor() { }

  ngOnInit(): void {
  }

}
