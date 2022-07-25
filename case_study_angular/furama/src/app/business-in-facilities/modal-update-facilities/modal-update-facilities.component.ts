import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServiceType} from '../service-type';
import {RentType} from '../rent-type';
import {FacilitiesService} from '../service/facilities.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FacilitiesClass} from '../FacilitiesClass';

@Component({
  selector: 'app-modal-update-facilities',
  templateUrl: './modal-update-facilities.component.html',
  styleUrls: ['./modal-update-facilities.component.css']
})
export class ModalUpdateFacilitiesComponent implements OnInit {

  constructor(private facilitiesService: FacilitiesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  facilities = new FacilitiesClass();


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


  ngOnInit(): void {

    // dòng này gây ra lỗi
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.facilities = this.facilitiesService.findById(id);
    this.updateForm.patchValue(this.facilities);

  }

  onSubmit() {
    console.log(this.updateForm.value);
    const facilities = this.updateForm.value;
    this.facilitiesService.update(facilities);
    this.updateForm.reset();
    this.router.navigateByUrl('/list-facilities');
    console.log(facilities);
  }

  //
  edit() {


  }
}
