import { Component, OnInit } from '@angular/core';
import {Register} from "./register";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Country} from "./country";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup : new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      },this.checkPassword),

      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required,this.checkAge]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required,Validators.pattern('^(\\+84)[0-9]{9,10}$')])
    })
  }
  countryList: Country [] = [
    {name: 'Việt Nam'},
    {name: 'Nga'},
    {name: 'Hàn Quốc'},
      ]

  checkAge(abstractControl: AbstractControl): any {
      const age = abstractControl.value.substr(0,4);

      const curDate = new Date().getFullYear();

      return (curDate - age >= 18) ? null : {not18 : true}
  }

  checkPassword(abstractControl: AbstractControl): any {
      const p = abstractControl.value;
      // let confirmPassword = abstractControl.value.confirmPassword;

      return (p.password === p.confirmPassword) ? null : {notSame : true};
  }

  getPassword(){
    return this.registerForm.get('passwordGroup').get('password')
  }

  getConfirmPassword(){
    return this.registerForm.get('passwordGroup').get('confirmPassword')
  }

  getRegister() {
    console.log(this.registerForm.value)
  }

}
