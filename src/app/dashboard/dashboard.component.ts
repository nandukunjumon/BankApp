import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""
user=""

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
  constructor(private ds:DataService,private fb:FormBuilder) {this.user=this.ds.currentUser }

  ngOnInit(): void {
  }

  //Deposit
  deposit(){

    var acno =  this.depositForm.value.acno
    var pswd =  this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

   
    const result =this.ds.deposit(acno,pswd,amount)
if(this.depositForm.valid){
  if(result){
    alert(`${amount} Credited Success Fully And New Balance Is ${result} `)
  }
}
else{
  alert('Invalid Form')
}
   

  }

  //WithDrawl
  withdraw(){
    var acno = this.withdrawForm.value.acno1
    var pswd = this.withdrawForm.value.pswd1
    var amount = this.withdrawForm.value.amount1

    const result =this.ds.withdraw(acno,pswd,amount)
    if(this.withdrawForm.valid){

    if(result){
      alert(`${amount} Debited Success Fully And New Balance Is ${result} `)
    }

  }
  else{
    alert('Invalid Form')
  }
}

}