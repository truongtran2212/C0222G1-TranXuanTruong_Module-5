import {Component, OnInit} from '@angular/core';
import {Student} from "../student";
import {StudentService} from "../service/student.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Class} from "../class";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService: StudentService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  id: number;
  name: string = '';
  idClass: string = '';

  studentList: Student[];

  classList: Class[];

  studentForm = new FormGroup({
    id: new FormControl(''),
    // name: new FormControl('', [Validators.required, Validators.pattern('([\\p{Lu}][\\p{Ll}]{0,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){1,10}')]),
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z-a-z ]{5,}$')]),
    dateOfBirth: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.studentService.findAll().subscribe(value => {
      this.studentList = value;
    }, error => {
      console.log(error)
    })

    this.studentService.findAllClass().subscribe(value => {
      this.classList = value;
    }, error => {
      console.log(error)
    })
  }

  onSubmitCreate() {
    const studentObj = this.studentForm.value
    this.studentService.create(studentObj).subscribe(value => {
      this.studentForm.reset();
      console.log(value)
    }, error => {

    }, () => {
      this.ngOnInit();
    })
  }

  valueOf(idDelete: number, name: string) {
    this.id = idDelete;
    this.name = name;
    console.log(this.id)
  }

  delete() {
    this.studentService.delete(this.id).subscribe(value => {

    }, error => {

    }, () => {
      this.ngOnInit();
    })
  }

  search() {
    this.studentService.search(this.name, this.idClass).subscribe(value => {
      this.studentList = value;
      this.studentForm.reset();
      console.log(this.idClass);
      console.log(this.name)
      console.log(this.studentList)
    },error => {
      console.log(error)
    }, () => {
    })
  }
}
