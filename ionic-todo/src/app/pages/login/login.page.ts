import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    public alert: AlertController,
  ) {
    this.login = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
  }
  login: FormGroup | any;
  loginBtn() {
    let data = this.login.value
    console.log(data);
    let signUpUsername = localStorage.getItem("signedInUsername")
    let signUpUserPassword = localStorage.getItem("signedInUserPassword")
    console.log(signUpUsername)
    console.log(data.username)

    if (data.username == signUpUsername && data.password == signUpUserPassword) {
      this.router.navigate(['home'])
      localStorage.setItem("auth", "true")

    } else {
      alert("User not found")
      // async showAlert(){
      //   const alerts = await this.alert.create({
      //     header:'Alert!',
      //     message:"User not found,Kindly sign up if you don't have an account",
      //     buttons:['Ok']
      //   });
      //   await alerts.present()
    }
    this.login.reset()

  }


}
