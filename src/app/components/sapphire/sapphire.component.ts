import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gm-sapphire',
  templateUrl: './sapphire.component.html',
  styleUrls: ['./sapphire.component.scss']
})
export class SapphireComponent implements OnInit {

  @Input()
  isSapphire = false;

  constructor() { }

  ngOnInit(): void {
  }

}
