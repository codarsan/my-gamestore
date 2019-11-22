import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  submitted = false;

  userFormGroup = this.userFormBuilder.group({
    usernameControl: ['', Validators.required],
    passwordControl: ['', Validators.required],
    emailControl: ['', Validators.required]
  });

  constructor(private userFormBuilder: FormBuilder, private userService: UserService) {
  }

  addUser() {
    this.userService.createUser(this.userFormGroup.value.usernameControl,
       this.userFormGroup.value.passwordControl,
       this.userFormGroup.value.emailControl)
       .subscribe(() => {
         this.userFormGroup.reset();
         this.submitted = true; });
  }

  ngOnInit() {
    this.submitted = false;
    }

}
