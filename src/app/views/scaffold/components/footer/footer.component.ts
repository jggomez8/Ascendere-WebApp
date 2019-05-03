import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubscribeService } from '../../providers/subscribe.service';

@Component({
  selector: 'indev-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private _route: Router,
    private _fb: FormBuilder,
    private _subService: SubscribeService
  ) {}

  subscribeForm: FormGroup;

  ngOnInit() {
    this.subscribeForm = this._fb.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.subscribeForm.invalid) {
      this._snackBar.open('❗ La forma no es valida');
      return;
    }

    const { email } = this.subscribeForm.value;
    this._subService.subscribeWithEmail(email).subscribe(res => {
      console.log(res);

      this._snackBar.open(res);
    });
  }

  spotEasterEgg($event: Event) {
    $event.preventDefault();
    this._snackBar.open('Felicidades. Me atrapaste');
  }

  get isNotAtAdmin(): boolean {
    return !this._route.url.includes('admin');
  }
}
