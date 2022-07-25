import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceType} from '../service-type';
import {RentType} from '../rent-type';
import {FacilitiesService} from '../service/facilities.service';

@Component({
  selector: 'app-modal-create-facilities',
  templateUrl: './modal-create-facilities.component.html',
  styleUrls: ['./modal-create-facilities.component.css']
})
export class ModalCreateFacilitiesComponent implements OnInit {

  constructor(private facilitiesService: FacilitiesService) {
  }

  public createForm: FormGroup;

  serviceTypeList: ServiceType [] = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'},
  ];

  rentTypeList: RentType [] = [
    {id: 1, name: 'Year'},
    {id: 2, name: 'Month'},
    {id: 3, name: 'Day'},
    {id: 4, name: 'Hour'},
  ];

  ngOnInit(): void {
    this.createForm = new FormGroup({
      id: new FormControl(),
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
      url: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.createForm.value);
    const facilities = this.createForm.value;
    this.facilitiesService.create(facilities);
  }
}
