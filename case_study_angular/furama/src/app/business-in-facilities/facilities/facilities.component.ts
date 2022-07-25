import {Component, OnInit} from '@angular/core';
import {FacilitiesService} from '../service/facilities.service';
import {Facilities} from './facilities';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceType} from '../service-type';
import {RentType} from '../rent-type';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  id: number;
  name: string;
  facilitiesList: Facilities[] ;
  constructor(private facilitiesService: FacilitiesService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.facilitiesList = this.facilitiesService.findAll();

    console.log(this.facilitiesList);
  }


  valueOfId(idDelete: number, nameDelete: string) {
    this.id = idDelete;
    this.name = nameDelete;
  }


  delete() {
    this.facilitiesService.delete(this.id);
  }
}
