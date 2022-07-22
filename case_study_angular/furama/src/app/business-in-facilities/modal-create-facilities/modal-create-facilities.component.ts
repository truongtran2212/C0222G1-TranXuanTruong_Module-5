import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceType} from '../service-type';
import {RentType} from '../rent-type';

@Component({
  selector: 'app-modal-create-facilities',
  templateUrl: './modal-create-facilities.component.html',
  styleUrls: ['./modal-create-facilities.component.css']
})
export class ModalCreateFacilitiesComponent implements OnInit {

  constructor() {
  }

  public createForm: FormGroup;

  public serviceTypeList: ServiceType [] = [
    {name: 'Villa'},
    {name: 'House'},
    {name: 'Room'},
  ];

  public rentTypeList: RentType [] = [
    {name: 'Year'},
    {name: 'Month'},
    {name: 'Day'},
    {name: 'Hour'},
  ];

  ngOnInit(): void {
    this.createForm = new FormGroup({
      // id: new FormControl(),
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.pattern('^\\D{7,}$')]),
      // name: new FormControl('', [Validators.required]),
      useAble: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      cost: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOtherConvenience: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      numberOfFloors: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('^[0-9]{1,}$')]),
      rentType: new FormControl('', [Validators.required]),
      serviceType: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.createForm.value);
  }
}
