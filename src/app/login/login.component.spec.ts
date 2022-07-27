import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties / variable
  aim = 'Your Perfect Banking Partner'

  account = 'Please Enter Account Number Here'
  
  // to hold user account number
  acno=""

  // to hold user password
  pswd=""

  // data base
  userDetails:any = {
    1000:{acno:1000,username:'Neer',password:1000,balance:5000},
    1001:{acno:1001,username:'Laisha',password:1001,balance:6000},
    1002:{acno:1002,username:'Vyom',password:1002,balance:4000}
  }

  // constructor - 
  constructor(private router:Router) { }

  // life cycle hook - angular
  ngOnInit(): void {
  }

  // user defined function

  //acnoChange
  acnoChange(event:any){
    this.acno = event.target.value
    console.log(this.acno);
  }
  //pswdChange
  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd);
  }

  // login
  login(){
    var acno = this.acno
    var pswd = this.pswd

    let userDetails = this.userDetails

    if(acno in userDetails){
      if(pswd == userDetails[acno]['password']){
        alert('Login Successful')
        this.router.navigateByUrl('dashboard')
      }
      else{
        alert('Incorrect Password')
      }
    }
    else{
      alert('User Doesnot Exist')
    }
  }

}