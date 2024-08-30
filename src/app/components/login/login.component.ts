import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({

    "email":new FormControl('',[Validators.required,Validators.email]),
    "password":new FormControl('',[Validators.required,Validators.minLength(4)])

  })

  loginFormSubmit(){

    console.log(this.loginForm.value);
    this.loginForm = new FormGroup({

      "email":new FormControl('',[Validators.required,Validators.email]),
      "password":new FormControl('',[Validators.required,Validators.minLength(4)])
  
    })
    

  }

}
