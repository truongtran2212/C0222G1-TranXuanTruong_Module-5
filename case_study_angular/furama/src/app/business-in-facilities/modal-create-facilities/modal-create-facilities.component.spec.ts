import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateFacilitiesComponent } from './modal-create-facilities.component';

describe('ModalCreateFacilitiesComponent', () => {
  let component: ModalCreateFacilitiesComponent;
  let fixture: ComponentFixture<ModalCreateFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCreateFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
