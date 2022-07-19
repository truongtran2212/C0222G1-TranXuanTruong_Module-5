import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  birthday = new Date(1998,12-1,22);
  toggle = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }

  get format() {
    return this.toggle ? 'fullDate' : 'shortDate';
  }
}
