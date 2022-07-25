import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination-controls',
  templateUrl: './pagination-controls.component.html',
  styleUrls: ['./pagination-controls.component.css']
})
export class PaginationControlsComponent implements OnInit {

  @Input() page: number;

  active = 0;

  pages;

  constructor() {
    this.pages = Array(7).fill(0).map((x, i) => i);
    this.pages.pop();

  }

  get currentPage() {
    return this.active;
  }

  ngOnInit(): void {
  }

  setPage(m: number): number {
    return this.active + m;
  }
}
