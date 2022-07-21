import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Country} from './country';
import {Contact} from './contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';

  // validate nhiều trường hợp thì nên bỏ vào []
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    gender: new FormControl('', Validators.required),
    isMarried: new FormControl(),
    country: new FormControl('', Validators.required)
  });
  countryList: Country[] = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Nga'},
    ];
  onSubmit() {
    console.log(this.contactForm.value);
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }
  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }
}
