import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegemployeeComponent } from './regemployee.component';


describe('RegemployeeComponent', () => {
  let component: RegemployeeComponent;
  let fixture: ComponentFixture<RegemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
