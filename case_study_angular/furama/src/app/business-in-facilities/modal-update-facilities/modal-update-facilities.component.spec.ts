import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUpdateFacilitiesComponent } from './modal-update-facilities.component';

describe('ModalUpdateFacilitiesComponent', () => {
  let component: ModalUpdateFacilitiesComponent;
  let fixture: ComponentFixture<ModalUpdateFacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalUpdateFacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalUpdateFacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
