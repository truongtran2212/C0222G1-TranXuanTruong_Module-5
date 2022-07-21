import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ServiceType} from "../service-type";
import {RentType} from "../rent-type";

@Component({
  selector: 'app-modal-update-facilities',
  templateUrl: './modal-update-facilities.component.html',
  styleUrls: ['./modal-update-facilities.component.css']
})
export class ModalUpdateFacilitiesComponent implements OnInit {

  public updateForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      // id: new FormControl(),
      code: new FormControl('', [Validators.required]),
      // name: new FormControl('', [Validators.required, Validators.pattern('^\D{7,}$')]),
      name: new FormControl('', [Validators.required]),
      useAble: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      cost: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
    })
  }

  public serviceTypeList: ServiceType [] = [
    {name: 'Villa'},
    {name: 'House'},
    {name: 'Room'},
  ]

  public rentTypeList : RentType [] = [
    {name: 'Year'},
    {name: 'Month'},
    {name: 'Day'},
    {name: 'Hour'},
  ]

  onSubmit() {
    console.log(this.updateForm.value);
  }

}
