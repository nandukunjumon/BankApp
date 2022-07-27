import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname=""
  acno=""
  pswd=""
//register-Model
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  acno:[''],
  pswd:['']
})
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pswd
    //call register in data service
    const result = this.ds.register(acno,pswd,uname)

    if(this.registerForm.valid){
      if(result){
        alert("Successfully Register")
        this.router.navigateByUrl("")
      }
      else{
        alert('User Already Exist.. Please Log In')
        this.router.navigateByUrl("")
      }
    }
    else{
      alert('Invalid Form')
    }
   
  }
}