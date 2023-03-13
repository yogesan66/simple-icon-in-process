import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router: Router
  ) {
    this.signup = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  signup: FormGroup | any;
  signupBtn() {
    let data = this.signup.value
    console.log(data);
    this.signup.reset()
    localStorage.setItem("signedInUsername", data.username)
    localStorage.setItem("signedInUserPassword", data.password)
    this.router.navigate(['login'])
  }

}
