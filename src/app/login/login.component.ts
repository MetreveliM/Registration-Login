import { HttpClientModule, HttpEvent} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup}from "@angular/forms"
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { SignupComponent } from '../signup/signup.component';
//port { Signer } from 'crypto';

//import { HttpEvent} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

public loginForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private http : HttpClient,  private router:Router) { }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password : [''],
      checkbox : ['']
    })
  }
  login(){

     this.http.get<any>("http://localhost:3001/signUpUser", this.loginForm.value)
     .subscribe ((res: any)=>{
          const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.checkbox === this.loginForm.value.checkbox 
      
      });
     if(SignupComponent){
      alert("Login Success");
      this.loginForm.reset();
      this.router.navigate(['dashboard']);
    
     }else{
      alert("User Not Found!!");
     }
     },err=>{
      alert("Somthing  went wrong!!")
     })
     
  }
}














