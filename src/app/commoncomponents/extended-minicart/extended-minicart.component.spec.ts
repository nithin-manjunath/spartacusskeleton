import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedMinicartComponent } from './extended-minicart.component';

describe('ExtendedMinicartComponent', () => {
  let component: ExtendedMinicartComponent;
  let fixture: ComponentFixture<ExtendedMinicartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedMinicartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedMinicartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
