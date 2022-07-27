import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim = 'Your Perfect Banking Partner'
  account = 'Please enter Your account Number'
  acno = ""
  pswd = ""

  userDetails: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 5000 },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 6000 },
    1002: { acno: 1002, username: 'Vyom', password: 1002, balance: 4000 }
  }
  constructor(private router: Router, private ds: DataService) { }

  ngOnInit(): void {
  }
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno)
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);

  // }


  login() {
    var acno = this.acno
    var pswd = this.pswd
    const result = this.ds.login(acno, pswd)
    if (result) {
      alert('Login Succesful')
      this.router.navigateByUrl('dashboard')
    }

  }


}
