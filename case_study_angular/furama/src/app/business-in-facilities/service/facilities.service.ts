import {Injectable} from '@angular/core';
import {Facilities} from '../facilities/facilities';

@Injectable({
  providedIn: 'root'
})
export class FacilitiesService {

  constructor() {
  }

  facilityList: Facilities[] = [
    {
      idFacilities: 1,
      code: 'DV-1234',
      name: 'PHÒNG SUITE HƯỚNG BIỂN',
      useAble: 85.8,
      cost: 67,
      maxPeople: 2,
      standardRoom: 'VIP',
      descriptionOtherConvenience: 'ok',
      poolArea: 40.2,
      numberOfFloors: 3,
      rentType: 'Theo năm',
      serviceType: 'Villa',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg'
    },
    {
      idFacilities: 2,
      code: 'DV-2222',
      name: 'PHÒNG STUDIO SUITE',
      useAble: 40.1,
      cost: 25,
      maxPeople: 5,
      standardRoom: 'VIP',
      descriptionOtherConvenience: 'ok',
      poolArea: 40.2,
      numberOfFloors: 3,
      rentType: 'Theo năm',
      serviceType: 'Room',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg'
    },
    {
      idFacilities: 3,
      code: 'DV-4444',
      name: 'PHÒNG DELUXE',
      useAble: 43.7,
      cost: 33,
      maxPeople: 3,
      standardRoom: 'VIP',
      descriptionOtherConvenience: 'ok',
      poolArea: 40.2,
      numberOfFloors: 3,
      rentType: 'Theo năm',
      serviceType: 'Room',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Deluxe-double-bed-F-370x239.jpg'
    },
    {
      idFacilities: 4,
      code: 'DV-5523',
      name: 'PHÒNG SUPERIOR VIP',
      useAble: 40.1,
      cost: 22,
      maxPeople: 5,
      standardRoom: 'VIP',
      descriptionOtherConvenience: 'ok',
      poolArea: 40.2,
      numberOfFloors: 3,
      rentType: 'Theo năm',
      serviceType: 'House',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Presidential-Suite-F-370x239.jpg'
    },
    {
      idFacilities: 5,
      code: 'DV-1234',
      name: 'BIỆT THỰ HƯỚNG BIỂN',
      useAble: 40.1,
      cost: 77,
      maxPeople: 7,
      standardRoom: 'VIP',
      descriptionOtherConvenience: 'ok',
      poolArea: 40.2,
      numberOfFloors: 3,
      rentType: 'Theo năm',
      serviceType: 'Villa',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Beach_Pool_Villas-_Exterior-1-F-370x239.jpg'
    },
    {
      idFacilities: 6,
      code: 'DV-7777',
      name: 'PHÒNG SUPERIOR',
      useAble: 40.1,
      cost: 12,
      maxPeople: 12,
      standardRoom: 'VIP',
      descriptionOtherConvenience: 'ok',
      poolArea: 40.2,
      numberOfFloors: 3,
      rentType: 'Theo năm',
      serviceType: 'Room',
      url: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg'
    }
  ];

  findAll() {
    return this.facilityList;
  }

  delete(id: number) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].idFacilities === id) {
        this.facilityList.splice(i, 1);
      }
    }
  }

  create(facilities: Facilities) {
    this.facilityList.push(facilities);
  }

  findById(id: number): Facilities {
    for (const facilities of this.facilityList) {
      if (facilities.idFacilities === id) {
          return facilities;
      }
    }
  }

  update(facilities: Facilities) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].idFacilities === facilities.idFacilities) {
        this.facilityList.splice(i, 1, facilities);
        break;
      }
    }
  }
}
