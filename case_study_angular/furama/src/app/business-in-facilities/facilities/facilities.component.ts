import {Component, OnInit} from '@angular/core';
import {Facilities} from './facilities';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  id: number;
  name: string;
  facilityList: Facilities[] = [
    {
      id: 1,
      name: 'PHÒNG SUITE HƯỚNG BIỂN',
      useAble: 85.8,
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      id: 2,
      name: 'PHÒNG STUDIO SUITE',
      useAble: 40.1,
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
    },
    {
      id: 3,
      name: 'PHÒNG DELUXE',
      useAble: 43.7,
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    },
    {
      id: 4,
      name: 'PHÒNG SUPERIOR VIP',
      useAble: 40.1,
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg'
    },
    {
      id: 5,
      name: 'BIỆT THỰ HƯỚNG BIỂN',
      useAble: 40.1,
      url: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg'
    },
    {
      id: 6,
      name: 'PHÒNG SUPERIOR',
      useAble: 40.1,
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


  valueOfId(idDelete: number, nameDelete: string) {
    this.id = idDelete;
    this.name = nameDelete;
  }


  delete() {
    for ( let i = 0; i < this.facilityList.length - 1; i++) {
      // Không xóa được th cuối cùng
      if (this.facilityList[i].id === this.id) {
        this.facilityList.splice( i, 1);
      }
      if ( this.facilityList[this.facilityList.length - 1].id === this.id) {
        this.facilityList.pop();
      }
    }
  }
}
