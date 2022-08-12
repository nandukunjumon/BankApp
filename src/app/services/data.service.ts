import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options={
  headers: new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //login username
  currentUsername: any

  //login Acno
  currentAcno: any

  // data base
  userDetails: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 5000, transaction: [] },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 6000, transaction: [] },
    1002: { acno: 1002, username: 'Vyom', password: 1002, balance: 4000, transaction: [] }
  }

  constructor(private http: HttpClient) {
    this.getDetails()
  }

  //to store data in local storage
  saveDetails() {
    //data base
    if (this.userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails))
    }
    //login acno
    if (this.currentAcno) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno))
    }
    //login username
    if (this.currentUsername) {
      localStorage.setItem('currentUsername', JSON.stringify(this.currentUsername))
    }
  }

  //to get data from local storage
  getDetails() {
    //data base
    if (localStorage.getItem('userDetails')) {
      this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '')
    }
    //login acno
    if (localStorage.getItem('currentAcno')) {
      this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '')
    }
    //login username
    if (localStorage.getItem('currentUsername')) {
      this.currentUsername = JSON.parse(localStorage.getItem('currentUsername') || '')
    }
  }


  //register
  register(acno: any, password: any, username: any) {
    const data = {
      acno, password, username
    }
    //register api - asynchronous
    return this.http.post('http://localhost:3000/register', data)
  }
  // login


  login(acno: any, pswd: any) {
    const data = {
      acno, pswd
    }

    return this.http.post('http://localhost:3000/login', data)
  }

getOptions(){
  const token =JSON.parse(localStorage.getItem('token')||'')
  let headers=new HttpHeaders()
  if(token){
    headers=headers.append('x-access-token',token)
    options.headers=headers
  }
  return options
}

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    const data = {
      acno, pswd, amt
    }
    //register api - asynchronous

    return this.http.post('http://localhost:3000/deposit', data,this.getOptions())

  }

  //withdraw
  withdraw(acno: any, pswd: any, amt: any) {
    const data = {
      acno, pswd, amt
    }
    //register api - asynchronous

    return this.http.post('http://localhost:3000/withdraw', data,this.getOptions())

  }
  

  //transaction
  getTransaction(acno: any) {
    const data = {
      acno
    }
    //register api - asynchronous

    return this.http.post('http://localhost:3000/getTransaction', data,this.getOptions())

  }
}