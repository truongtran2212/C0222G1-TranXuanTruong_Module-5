import {Component, OnInit} from '@angular/core';
import {TicketService} from "../service/ticket.service";
import {ActivatedRoute} from "@angular/router";
import {Ticket} from "../service/ticket";
import {Home} from "../service/home";
import {ToastrService} from "ngx-toastr";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticketList: Ticket[];

  homeList: Home[];

  end: string = '';

  start: string = '';

  time: string = '';

  dayStart: string = '';

  p: number = 1;


  ticket: Ticket;
  ticketForm = new FormGroup({
    id: new FormControl(),
    cost: new FormControl('', [Validators.required, Validators.min(1)]),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    dayStart: new FormControl('', [Validators.required]),
    time: new FormControl('', Validators.required),
    home: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
  }, this.checkDay);

  constructor(private ticketService: TicketService,
              private activatedRoute: ActivatedRoute,
              private toast: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllTicket();
    this.getAllHome();
  }

  getAllTicket() {
    this.ticketService.findAllTicket(0).subscribe(value => {
      this.ticketList = value;
    }, error => {
      console.log(error)
    })
  }

  getAllHome() {
    this.ticketService.findAllHome().subscribe(value => {
      this.homeList = value;
      console.log(this.homeList)
    }, error => {
      console.log(error)
    })
  }
  checkDay(abstractControl: AbstractControl): any {
    const day = new Date(abstractControl.value.dayStart);
    const currDay = new Date();
    return (day.getTime() > currDay.getTime()) ? null : {error: true};
  }

  valueOf( id: number, start: string, end: string, time: string, dayStart: string) {
    this.start = start;
    this.end = end;
    this.time = time;
    this.dayStart = dayStart;
    this.ticketService.findById(id).subscribe(value => {
      this.ticket = value;
    })
  }

  onSubmitCreate() {
    const ticketObj = this.ticketForm.value
    this.ticketService.create(ticketObj).subscribe(value => {
      this.ticketForm.reset();
    }, error => {

    }, () => {
      this.toast.success('Add Ticket successfully!', 'Ticket!');
      this.getAllTicket();
    })
  }
  //
  // search() {
  //   this.ticketService.search(this.start, this.end).subscribe(value => {
  //     this.ticketList = value;
  //   }, error => {
  //     console.log(error)
  //   }, () => {
  //   })
  // }
  //
  book() {
    this.ticketService.update(this.ticket).subscribe(value => {
      console.log(value)
      }, error => {
    }, () => {
      this.getAllTicket();
    })
  }
  nextPage() {

  }

}
