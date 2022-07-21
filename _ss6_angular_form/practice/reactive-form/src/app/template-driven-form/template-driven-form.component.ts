import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createMember: NgForm) {
    console.log(createMember.value);
  }
}
