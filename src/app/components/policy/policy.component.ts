import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gm-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.scss']
})
export class PolicyComponent implements OnInit {

  @Input()
  isSapphire = false;

  constructor() { }

  ngOnInit(): void {
  }

}
