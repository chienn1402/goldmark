import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'gm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input()
  isSapphire = false;

  @Output()
  registerClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitRegister(): void {
    this.registerClick.emit();
  }

}
