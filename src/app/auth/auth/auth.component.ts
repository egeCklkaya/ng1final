import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  signInForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {

    this.signInForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })

    this.signUpForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })

   }

  ngOnInit(): void {}

  signIn() {
    this.authService.signIn(
      this.signInForm.get('email')?.value,
      this.signInForm.get('password')?.value
    )
  }

  signInWithGmail(){
    this.authService.gmailSignIn();
  }

  signUp() {
    this.authService.signUp(
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('password')?.value
    )
  }
}
