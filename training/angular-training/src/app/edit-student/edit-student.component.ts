import { Component, OnInit } from '@angular/core';
import {Class} from "../class";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../student";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private studentService: StudentService) { }

              student: Student;

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
    this.studentService.findAllClass().subscribe(value => {
      this.classList = value;
    }, error => {
      console.log(error)
    })

    const id = Number(this.activatedRoute.snapshot.params.id)
    this.studentService.findById(id).subscribe(value => {
      this.student = value;
      this.studentForm.patchValue(this.student);
    })
  }

  onSubmitUpdate() {
    this.student = this.studentForm.value;
    this.studentService.update(this.student).subscribe(value => {
      this.router.navigateByUrl('');
      console.log(this.student);
    })
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }
}
