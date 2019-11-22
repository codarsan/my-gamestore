import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FakeAuthService } from 'src/app/services/fake-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginFormGroup = this.loginFormBuilder.group({
    usernameControl: ['', Validators.required],
    passwordControl: ['', Validators.required]
  });

  constructor(private loginFormBuilder: FormBuilder, private authService: FakeAuthService) {
  }

  loginUser() {
      this.authService.loginUser(this.loginFormGroup.value.usernameControl, this.loginFormGroup.value.passwordControl);
  }

  ngOnInit() {
    }

}
