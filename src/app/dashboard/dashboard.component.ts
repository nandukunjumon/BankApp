import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // acno=""
  // pswd=""
  // amount=""

  // acno1=""
  // pswd1=""
  // amount1=""
user=""
acno:any
lDate:any

depositForm=this.fb.group({
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})

withdrawForm=this.fb.group({
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
  amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) {
    
    if(localStorage.getItem('currentUsername')){
      this.user=JSON.parse(localStorage.getItem('currentUsername')||'')

    }
    
  this.lDate=new Date() }

  ngOnInit(): void {
    if(!localStorage.getItem('token')){
      alert('Please login')
      this.router.navigateByUrl('')
    }
  }

  //Deposit
  deposit(){

    var acno =  this.depositForm.value.acno
    var pswd =  this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

   
    const result =this.ds.deposit(acno,pswd,amount)
if(this.depositForm.valid){
  const result=this.ds.deposit(acno,pswd,amount)
  .subscribe(
    (result:any)=>{
     
   alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
  )
 
}
else{
  alert('Invalid Form')
}
   

  }

  //WithDrawl
  withdraw(){

    var acno =  this.withdrawForm.value.acno1
    var pswd =  this.withdrawForm.value.pswd1
    var amount = this.withdrawForm.value.amount1

   
   // const result =this.ds.deposit(acno,pswd,amount)
if(this.withdrawForm.valid){
  this.ds.withdraw(acno,pswd,amount)
  .subscribe(
    (result:any)=>{
     
   alert(result.message)
    },
    result=>{
      alert(result.error.message)
    }
  )
 
}
else{
  alert('Invalid Form')
}
   

  }


//logout
logout(){
  //remove login acno,uname
  localStorage.removeItem('currentAcno')
  localStorage.removeItem('currentUser')
  localStorage.removeItem('token')

  //navig to login
  this.router.navigateByUrl('')


}
deleteParent(){
  this.acno=JSON.parse(localStorage.getItem('currentAcno')||'')
}
cancel(){
  this.acno=""
}
onDelete(event:any){
this.ds.delete(event)
.subscribe(
  (result:any)=>{
    alert(result.message)
    this.router.navigateByUrl('')
  },
  result=>{
    alert(result.error.message)
  }
  )
}
}