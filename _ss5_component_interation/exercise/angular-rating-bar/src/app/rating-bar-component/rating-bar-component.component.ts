import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {IRatingUnit} from "./irating-unit";

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {

  @Input()
  value: number;
  @Input()
  active: boolean = true;

  ratingUnits: Array<number> = new Array (10);

  constructor() { }

  ngOnInit(): void {
  }

  changValue(number: number) {
    this.value = number;
    this.active = true;
  }
}
