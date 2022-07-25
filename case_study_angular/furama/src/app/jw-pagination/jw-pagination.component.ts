import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import paginate = require('jw-paginate');
import {Customer} from '../business-in-customer/customer/customer';

@Component({
  selector: 'app-jw-pagination',
  templateUrl: './jw-pagination.component.html',
  styleUrls: ['./jw-pagination.component.css']
})
export class JwPaginationComponent implements OnInit, OnChanges {

  @Input() customerList: Array<Customer>;
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;

  pager;

  ngOnInit() {
    // set page if items array isn't empty
    if (this.customerList && this.customerList.length) {
      this.setPage(this.initialPage);
    }
  }

   setPage(page: number) {
    // get new pager object for specified page
    this.pager = paginate(this.customerList.length, page, this.pageSize, this.maxPages);

    // get new page of items from items array
    const pageOfItems = this.customerList.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.changePage.emit(pageOfItems);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // reset page if items array has changed
    if (changes.customers.currentValue !== changes.customers.previousValue) {
      this.setPage(this.initialPage);
    }
  }
}
