import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/user-details';
import { TweetappService } from '../../service/tweetapp.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isRegSucc = false;
  isRegFail = false;
  constructor(private tweetService: TweetappService, private router: Router) { }

  ngOnInit(): void {
    this.createform();
  }
  createform(): void {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl(''),
      contactNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
      confirmPassword: new FormControl(),
    });
  }

  generatePayload(): UserDetails {
    return {
      userInfo: {
        firstName: this.signUpForm.get('firstName').value,
        lastName: this.signUpForm.get('lastName').value,
        userName: this.signUpForm.get('userName').value,
        password: this.signUpForm.get('password').value,
        email: this.signUpForm.get('email').value,
        contactNumber: this.signUpForm.get('contactNumber').value,
        imageName: null
      }
    } as UserDetails
  }

  onblurConfirmPass(): void {
    if (this.signUpForm.get('password').value !== this.signUpForm.get('confirmPassword').value) {
      this.signUpForm.get('confirmPassword').setErrors({ invalid: true });
    } else {
      this.signUpForm.get('confirmPassword').setErrors(null);
    }
  }

  signUp() {
    if (this.signUpForm.valid) {
      let payload = this.generatePayload();
      this.tweetService.Register(payload).subscribe(
        suc => { this.isRegSucc = true; this.router.navigate(['home']) },
        err => { this.isRegFail = true });
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
