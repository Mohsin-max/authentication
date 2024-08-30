import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private service:AuthService){}

  ngOnInit(): void {

      this.service.getUser().subscribe((rs)=>{
  
        console.log(rs);
        
  
      })
  
  }

  registerForm = new FormGroup({

    "username":new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z][a-zA-Z0-9]*$')],),
    "email":new FormControl('',[Validators.required,Validators.email]),
    "password":new FormControl('',[Validators.required,Validators.minLength(4)])

  })

  registerFormSubmit(){

    const postData = {...this.registerForm.value}

    this.service.registerUser(postData as User).subscribe((response)=>{

      console.log(response);
      

    })


    this.registerForm = new FormGroup({

      "username":new FormControl('',[Validators.required,Validators.minLength(4),]),
      "email":new FormControl('',[Validators.required,Validators.email]),
      "password":new FormControl('',[Validators.required,Validators.minLength(4)])
  
    })
    

  }

  allUsers:any[]=[];


}
