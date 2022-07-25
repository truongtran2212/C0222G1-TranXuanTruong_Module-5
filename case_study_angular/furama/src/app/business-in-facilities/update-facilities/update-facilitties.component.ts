import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Facilities} from '../facilities/facilities';
import {ServiceType} from '../service-type';
import {RentType} from '../rent-type';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilitiesService} from '../service/facilities.service';

@Component({
  selector: 'app-update-facilitties',
  templateUrl: './update-facilitties.component.html',
  styleUrls: ['./update-facilitties.component.css']
})
export class UpdateFacilittiesComponent implements OnInit {

  facilities: Facilities;
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

  updateForm = new FormGroup({
    idFacilities: new FormControl(''),
    code: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.pattern('^\\D{7,}$')]),
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

  constructor(private activatedRoute: ActivatedRoute,
              private facilitiesService: FacilitiesService,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.facilities = this.facilitiesService.findById(id);
    this.updateForm.setValue(this.facilities);
  }

  onSubmit() {
    console.log(this.updateForm.value);
    const facilities = this.updateForm.value;
    this.facilitiesService.update(facilities);
    this.updateForm.reset();
    this.router.navigateByUrl('/list-facilities');
    console.log(facilities);
  }
}
