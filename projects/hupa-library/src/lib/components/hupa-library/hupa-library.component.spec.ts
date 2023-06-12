import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HupaLibraryComponent } from './hupa-library.component';

describe('HupaLibraryComponent', () => {
  let component: HupaLibraryComponent;
  let fixture: ComponentFixture<HupaLibraryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HupaLibraryComponent]
    });
    fixture = TestBed.createComponent(HupaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
