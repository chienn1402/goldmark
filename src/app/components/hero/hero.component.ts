import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

declare var $: any;

@Component({
  selector: 'gm-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  formGroup: FormGroup;

  @Input()
  isSapphire = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    $('.hero-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      autoplaySpeed: 3000,
    });

    this.formGroup = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
      target: [this.isSapphire ? 'Sapphire' : 'Diamond'],
      registerOn: [new Date().toISOString()],
    });
  }

  submit(): void {
    if (this.formGroup.valid) {
      this.userService.addUser(this.formGroup.value)
      .then((user) => {
        alert('Đăng ký thành công!');
      })
      .catch((err) => {
        alert('Đã có lỗi xảy ra, vui lòng thử lại!');
      });
    }
  }

}
